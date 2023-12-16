import { useSignal } from "@preact/signals";
import type { Character, Equipment, Weapon } from "../libs/type.d.ts";
import { OPCompResult } from "./inputs/OPCompResult.tsx";
import {
  calcCriticalDamageBonus,
  calcCriticalPercentageBonus,
  calcDamage,
  calcDamageBonus,
  calcMinimumWeaponDamage,
} from "../libs/lib.ts";

interface ShowOPCompResultProps {
  weapon: Weapon;
  player: Character;
  enemy: Character;
  equipment1: Equipment;
  equipment2: Equipment;
}

export function ShowOPCompResult(props: ShowOPCompResultProps) {
  const { weapon, player, enemy, equipment1, equipment2 } = props;
  const eq_1_result = {
    avg_dmg: useSignal(1),
    min_dmg: useSignal(1),
    crit_dmg: useSignal(1),
  };
  const eq_2_result = {
    avg_dmg: useSignal(1),
    min_dmg: useSignal(1),
    crit_dmg: useSignal(1),
  };

  return (
    <>
      <div class="flex gap-2">
        <div class="flex-1 border rounded p-2 border-gray-300 dark:border-gray-600">
          <h3 class="font-semibold mb-2 text-gray-900 dark:text-white">
            {equipment1.label} / {equipment2.label}
          </h3>
          <div>
            <label class="text-gray-700 dark:text-white text-sm font-bold mb-2">
              Average Damage:{" x"}
            </label>
            <span class="text-gray-700 dark:text-white text-sm font-bold mb-2">
              {eq_1_result.avg_dmg.value / eq_2_result.avg_dmg.value}
            </span>
          </div>
          <div>
            <label class="text-gray-700 dark:text-white text-sm font-bold mb-2">
              Minimum Damage:{" x"}
            </label>
            <span class="text-gray-700 dark:text-white text-sm font-bold mb-2">
              {eq_1_result.min_dmg.value / eq_2_result.min_dmg.value}
            </span>
          </div>
          <div>
            <label class="text-gray-700 dark:text-white text-sm font-bold mb-2">
              Critical Damage:{" x"}
            </label>
            <span class="text-gray-700 dark:text-white text-sm font-bold mb-2">
              {eq_1_result.crit_dmg.value / eq_2_result.crit_dmg.value}
            </span>
          </div>
        </div>
        <div class="flex-1 border rounded p-2 border-gray-300 dark:border-gray-600">
          <h3 class="font-semibold mb-2 text-gray-900 dark:text-white">
            {equipment1.label}
          </h3>
          <OPCompResult
            weapon={weapon}
            player={player}
            enemy={enemy}
            equipment={equipment1}
            avg_dmg={eq_1_result.avg_dmg}
            min_dmg={eq_1_result.min_dmg}
            crit_dmg={eq_1_result.crit_dmg}
          />
        </div>
        <div class="flex-1 border rounded p-2 border-gray-300 dark:border-gray-600">
          <h3 class="font-semibold mb-2 text-gray-900 dark:text-white">
            {equipment2.label}
          </h3>
          <OPCompResult
            weapon={weapon}
            player={player}
            enemy={enemy}
            equipment={equipment2}
            avg_dmg={eq_2_result.avg_dmg}
            min_dmg={eq_2_result.min_dmg}
            crit_dmg={eq_2_result.crit_dmg}
          />
        </div>
      </div>
    </>
  );
}
