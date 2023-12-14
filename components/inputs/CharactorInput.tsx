import type { Signal } from "@preact/signals";
import type { Character } from "../../libs/type.d.ts";

interface CharacterInputProps {
  label: string;
  character: Signal<Character>;
}

export function CharacterInput(props: CharacterInputProps) {
  const { label, character } = props;
  return (
    <>
      <h2 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {label}
      </h2>
      <hr class="my-2" />
      <div class="flex flex-col my-2">
        <label
          for="base_offensive_power"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Base Offensive Power
        </label>
        <input
          type="number"
          id="base_offensive_power"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="base_offensive_power"
          value={character.value.base_offensive_power}
          onChange={(e) => {
            character.value = {
              ...character.value,
              base_offensive_power: Number(e.currentTarget.value),
            };
          }}
          step={1}
          min={1}
        />
      </div>
      <div class="flex flex-col my-2">
        <label
          for="defensive_power"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Defensive Power
        </label>
        <input
          type="number"
          id="defensive_power"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="defensive_power"
          value={character.value.defensive_power}
          onChange={(e) => {
            character.value = {
              ...character.value,
              defensive_power: Number(e.currentTarget.value),
            };
          }}
          step={1}
          min={0}
        />
      </div>
      <div class="flex flex-col my-2">
        <label
          for="base_critical_percentage"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Base Critical Percentage (%)
        </label>
        <input
          type="number"
          id="base_critical_percentage"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="base_critical_percentage"
          value={character.value.base_critical_percentage}
          onChange={(e) => {
            character.value = {
              ...character.value,
              base_critical_percentage: Number(e.currentTarget.value),
            };
          }}
          step={1}
        />
      </div>
      <div class="flex flex-col my-2">
        <label
          for="base_critical_damage_bonus"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Base Critical Damage Bonus (%)
        </label>
        <input
          type="number"
          id="base_critical_damage_bonus"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="base_critical_damage_bonus"
          value={character.value.base_critical_damage_bonus}
          onChange={(e) => {
            character.value = {
              ...character.value,
              base_critical_damage_bonus: Number(e.currentTarget.value),
            };
          }}
          step={1}
        />
      </div>
    </>
  );
}
