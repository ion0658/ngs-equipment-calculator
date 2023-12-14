import { Signal } from "@preact/signals";
import type { Weapon } from "../../libs/type.d.ts";

interface WeaponInputProps {
  weapon: Signal<Weapon>;
}

export function WeaponInput(props: WeaponInputProps) {
  const { weapon } = props;
  return (
    <>
      <h2 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        Weapon
      </h2>
      <hr class="my-2" />
      <div class="flex flex-col my-2">
        <label
          for="offensive_power"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Offensive Power
        </label>
        <input
          type="number"
          id="offensive_power"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="offensive_power"
          value={weapon.value.offensive_power}
          onInput={(e) => {
            weapon.value = {
              ...weapon.value,
              offensive_power: Number(e.currentTarget.value),
            };
          }}
          step={1}
          min={1}
        />
      </div>
      <div class="flex flex-col my-2">
        <label
          for="minimum_power_percent"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Minimum Power Percent (%)
        </label>
        <input
          type="number"
          id="minimum_power_percent"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="minimum_power_percent"
          value={weapon.value.minimum_power_percent}
          onInput={(e) => {
            weapon.value = {
              ...weapon.value,
              minimum_power_percent: Number(e.currentTarget.value),
            };
          }}
          step={1}
          min={0}
          max={100}
        />
      </div>
      <div class="flex flex-col my-2">
        <label
          for="damage_bonus"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Potential Ability Damage Bonus (%)
        </label>
        <input
          type="number"
          id="damage_bonus"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="damage_bonus"
          value={weapon.value.potential_damage_bounous.damage_bonus}
          onInput={(e) => {
            weapon.value = {
              ...weapon.value,
              potential_damage_bounous: {
                ...weapon.value.potential_damage_bounous,
                damage_bonus: Number(e.currentTarget.value),
              },
            };
          }}
          step={0.05}
        />
      </div>
      <div class="flex flex-col my-2">
        <label
          for="minimum_power_bouns"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Potential Ability Minimum Power Bonus (%)
        </label>
        <input
          type="number"
          id="minimum_power_bouns"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="minimum_power_bouns"
          value={weapon.value.potential_damage_bounous.minimum_power_bonus}
          onInput={(e) => {
            weapon.value = {
              ...weapon.value,
              potential_damage_bounous: {
                ...weapon.value.potential_damage_bounous,
                minimum_power_bonus: Number(e.currentTarget.value),
              },
            };
          }}
          step={0.05}
        />
      </div>
      <div class="flex flex-col my-2">
        <label
          for="critical_damage_bonus"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Potential Ability Critical Damage Bonus (%)
        </label>
        <input
          type="number"
          id="critical_damage_bonus"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="critical_damage_bonus"
          value={weapon.value.potential_damage_bounous.critical_damage_bonus}
          onInput={(e) => {
            weapon.value = {
              ...weapon.value,
              potential_damage_bounous: {
                ...weapon.value.potential_damage_bounous,
                critical_damage_bonus: Number(e.currentTarget.value),
              },
            };
          }}
          step={0.05}
        />
      </div>
      <div class="flex flex-col my-2">
        <label
          for="critical_percentage_bonus"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Potential Ability Critical Percentage Bonus (%)
        </label>
        <input
          type="number"
          id="critical_percentage_bonus"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="critical_percentage_bonus"
          value={weapon.value.potential_damage_bounous
            .critical_percentage_bonus}
          onInput={(e) => {
            weapon.value = {
              ...weapon.value,
              potential_damage_bounous: {
                ...weapon.value.potential_damage_bounous,
                critical_percentage_bonus: Number(e.currentTarget.value),
              },
            };
          }}
          step={0.05}
        />
      </div>
    </>
  );
}
