import type { Character, Equipment, Weapon } from "../../libs/type.d.ts";
import {
  calcCriticalDamageBonus,
  calcCriticalPercentageBonus,
  calcDamage,
  calcDamageBonus,
  calcMinimumWeaponDamage,
} from "../../libs/lib.ts";
import { Signal } from "@preact/signals";

interface OPCompResultProps {
  weapon: Weapon;
  player: Character;
  enemy: Character;
  equipment: Equipment;
  avg_dmg: Signal<number>;
  min_dmg: Signal<number>;
  crit_dmg: Signal<number>;
}

export function OPCompResult(props: OPCompResultProps) {
  const { weapon, player, enemy, equipment, avg_dmg, min_dmg, crit_dmg } =
    props;

  const damage_bonus = calcDamageBonus(equipment) *
    (1 + weapon.potential_damage_bounous.damage_bonus / 100);

  const minimum_weapon_damage = calcMinimumWeaponDamage(weapon, equipment);

  const critical_damage_bonus = calcCriticalDamageBonus(equipment) *
    (1 + weapon.potential_damage_bounous.critical_damage_bonus / 100) *
    (1 + player.base_critical_damage_bonus / 100);

  const critical_percentage = calcCriticalPercentageBonus(equipment) +
        player.base_critical_percentage > 100
    ? 1
    : calcCriticalPercentageBonus(equipment) +
      player.base_critical_percentage;

  crit_dmg.value = calcDamage(
    weapon.offensive_power,
    player.base_offensive_power,
    enemy.defensive_power,
    damage_bonus * critical_damage_bonus,
  );
  min_dmg.value = calcDamage(
    weapon.offensive_power * minimum_weapon_damage / 100,
    player.base_offensive_power,
    enemy.defensive_power,
    damage_bonus,
  );
  const avg_damage_base = calcDamage(
    weapon.offensive_power * (minimum_weapon_damage + 99.99) / 2 / 100,
    player.base_offensive_power,
    enemy.defensive_power,
    damage_bonus,
  );
  avg_dmg.value = avg_damage_base * (1 - critical_percentage / 100) +
    crit_dmg.value * critical_percentage / 100;

  return (
    <>
      <div>
        <label class="text-gray-700 dark:text-white text-sm font-bold mb-2">
          Damage Bonus:{" "}
        </label>
        <span class="text-gray-700 dark:text-white text-sm font-bold mb-2">
          {damage_bonus * 100}%
        </span>
      </div>
      <div>
        <label class="text-gray-700 dark:text-white text-sm font-bold mb-2">
          Minimum Weapon Damage:{" "}
        </label>
        <span class="text-gray-700 dark:text-white text-sm font-bold mb-2">
          {minimum_weapon_damage}%
        </span>
      </div>
      <div>
        <label class="text-gray-700 dark:text-white text-sm font-bold mb-2">
          Critical Damage Bonus:{" "}
        </label>
        <span class="text-gray-700 dark:text-white text-sm font-bold mb-2">
          {critical_damage_bonus * 100}%
        </span>
      </div>
      <div>
        <label class="text-gray-700 dark:text-white text-sm font-bold mb-2">
          Critical Percentage:{" "}
        </label>
        <span class="text-gray-700 dark:text-white text-sm font-bold mb-2">
          {critical_percentage}%
        </span>
      </div>{" "}
      <div>
        <label class="text-gray-700 dark:text-white text-sm font-bold mb-2">
          Critical Damage:{" "}
        </label>
        <span class="text-gray-700 dark:text-white text-sm font-bold mb-2">
          {crit_dmg}
        </span>
      </div>{" "}
      <div>
        <label class="text-gray-700 dark:text-white text-sm font-bold mb-2">
          Minimum Damage:{" "}
        </label>
        <span class="text-gray-700 dark:text-white text-sm font-bold mb-2">
          {min_dmg}
        </span>
      </div>{" "}
      <div>
        <label class="text-gray-700 dark:text-white text-sm font-bold mb-2">
          Average Damage:{" "}
        </label>
        <span class="text-gray-700 dark:text-white text-sm font-bold mb-2">
          {avg_dmg}
        </span>
      </div>
    </>
  );
}
