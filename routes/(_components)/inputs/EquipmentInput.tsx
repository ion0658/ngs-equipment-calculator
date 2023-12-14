import type { Equipment, EquipmentItem } from "../../../libs/type.d.ts";
import { type Signal, useSignal } from "@preact/signals";
import { EquipmentItemInput } from "./EquipmentItemInput.tsx";

interface EquipmentInputProps {
  label: string;
  equipment: Signal<Equipment>;
}

export function EquipmentInput(props: EquipmentInputProps) {
  const { label, equipment } = props;
  const show_detail = useSignal(false);

  return (
    <div class="block p-2 my-2 border rounded border-gray-300 dark:border-gray-600">
      <div class="border-b border-gray-700 dark:border-gray-200 mb-2">
        <button
          type="button"
          class="text-xl text-left w-full font-semibold mb-2 text-gray-900 dark:text-white"
          onClick={() => {
            show_detail.value = !show_detail.value;
          }}
        >
          {label}
        </button>
      </div>
      <div
        class={`${show_detail.value ? "block" : "hidden"}`}
      >
        <div class="flex-1 m-0.5 p-1 border rounded border-gray-200 dark:border-gray-700">
          <EquipmentItemInput
            label="Weapon"
            equipment={equipment.value.weapon_op}
            onChange={(eq: EquipmentItem) => {
              equipment.value = {
                ...equipment.value,
                weapon_op: eq,
              };
            }}
          />
        </div>
        <div class="flex-1 mx-0.5 p-1 border rounded border-gray-200 dark:border-gray-700">
          <EquipmentItemInput
            label="Unit 1"
            equipment={equipment.value.unit1_op}
            onChange={(eq: EquipmentItem) => {
              equipment.value = {
                ...equipment.value,
                unit1_op: eq,
              };
            }}
          />
        </div>
        <div class="flex-1 mx-0.5 p-1 border rounded border-gray-200 dark:border-gray-700">
          <EquipmentItemInput
            label="Unit 2"
            equipment={equipment.value.unit2_op}
            onChange={(eq: EquipmentItem) => {
              equipment.value = {
                ...equipment.value,
                unit2_op: eq,
              };
            }}
          />
        </div>
        <div class="flex-1 mx-0.5 p-1 border rounded border-gray-200 dark:border-gray-700">
          <EquipmentItemInput
            label="Unit 3"
            equipment={equipment.value.unit3_op}
            onChange={(eq: EquipmentItem) => {
              equipment.value = {
                ...equipment.value,
                unit3_op: eq,
              };
            }}
          />
        </div>
      </div>
    </div>
  );
}
