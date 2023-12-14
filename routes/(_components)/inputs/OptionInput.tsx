import type { Options } from "../../../libs/type.d.ts";

interface OptionInputProps {
  label: string;
  options: Options;
  onChange: (options: Options) => void;
}

export function OptionInput(props: OptionInputProps) {
  const { label, options, onChange } = props;
  return (
    <div class="flex gap-1">
      <div class="flex-1">
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
      </div>
      <div class="flex-auto">
        <label
          for="damage_bonus"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Damage Bonus (%)
        </label>
        <input
          type="number"
          id="damage_bonus"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="damage_bonus"
          value={options.damage_bonus}
          onInput={(e) => {
            onChange({
              ...options,
              damage_bonus: Number(e.currentTarget.value),
            });
          }}
          step={0.05}
        />
      </div>
      <div class="flex-auto">
        <label
          for="minimum_power_bonus"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Minimum Power Bonus (%)
        </label>
        <input
          type="number"
          id="minimum_power_bonus"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="minimum_power_bonus"
          value={options.minimum_power_bonus}
          onInput={(e) => {
            onChange({
              ...options,
              minimum_power_bonus: Number(e.currentTarget.value),
            });
          }}
          step={0.05}
        />
      </div>
      <div class="flex-auto">
        <label
          for="critical_damage_bonus"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Critical Damage Bonus (%)
        </label>
        <input
          type="number"
          id="critical_damage_bonus"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="critical_damage_bonus"
          value={options.critical_damage_bonus}
          onInput={(e) => {
            onChange({
              ...options,
              critical_damage_bonus: Number(e.currentTarget.value),
            });
          }}
          step={0.05}
        />
      </div>
      <div class="flex-auto">
        <label
          for="critical_percentage_bonus"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Critical Percentage Bonus (%)
        </label>
        <input
          type="number"
          id="critical_percentage_bonus"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="critical_percentage_bonus"
          value={options.critical_percentage_bonus}
          onInput={(e) => {
            onChange({
              ...options,
              critical_percentage_bonus: Number(e.currentTarget.value),
            });
          }}
          step={0.05}
        />
      </div>
    </div>
  );
}
