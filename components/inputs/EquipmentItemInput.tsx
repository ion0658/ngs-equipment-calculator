import type { EquipmentItem } from "../../libs/type.d.ts";
import { OptionInput } from "./OptionInput.tsx";
import {
  calcCriticalDamageBonus1,
  calcCriticalPercentageBonus1,
  calcDamageBonus1,
  calcMinimumDamageBonus1,
} from "../../libs/lib.ts";
import { useSignal } from "@preact/signals";

interface EquipmentItemInputProps {
  label: string;
  equipment: EquipmentItem;
  onChange: (equipment: EquipmentItem) => void;
}

export function EquipmentItemInput(props: EquipmentItemInputProps) {
  const { label, equipment, onChange } = props;
  const show_detail = useSignal(false);

  return (
    <div class="block">
      <button
        type="button"
        class="flex items-center mb-2 w-full font-semibold  text-gray-900 dark:text-white"
        onClick={() => {
          show_detail.value = !show_detail.value;
        }}
      >
        {label} ({(calcDamageBonus1(equipment) - 1) * 100}% /{" "}
        {(calcMinimumDamageBonus1(equipment) - 1) * 100}% /{" "}
        {(calcCriticalDamageBonus1(equipment) - 1) * 100}% /{" "}
        {calcCriticalPercentageBonus1(equipment)}%)
        <svg
          data-accordion-icon
          class="ms-auto me-2 mt-1 w-3 h-3 rotate-180 shrink-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
      <div class={show_detail.value ? "block" : "hidden"}>
        <div>
          <OptionInput
            label="Base Status"
            options={equipment.base_status}
            onChange={(e) => {
              onChange({
                ...equipment,
                base_status: e,
              });
            }}
          />
        </div>
        <hr class="my-2" />
        <div>
          <OptionInput
            label="OP 1"
            options={equipment.op1}
            onChange={(e) => {
              onChange({
                ...equipment,
                op1: e,
              });
            }}
          />
        </div>
        <hr class="my-2" />
        <div>
          <OptionInput
            label="OP 2"
            options={equipment.op2}
            onChange={(e) => {
              onChange({
                ...equipment,
                op2: e,
              });
            }}
          />
        </div>
        <hr class="my-2" />
        <div>
          <OptionInput
            label="OP 3"
            options={equipment.op3}
            onChange={(e) => {
              onChange({
                ...equipment,
                op3: e,
              });
            }}
          />
        </div>
        <hr class="my-2" />
        <div>
          <OptionInput
            label="OP 4"
            options={equipment.op4}
            onChange={(e) => {
              onChange({
                ...equipment,
                op4: e,
              });
            }}
          />
        </div>
        <hr class="my-2" />
        <div>
          <OptionInput
            label="OP 5"
            options={equipment.op5}
            onChange={(e) => {
              onChange({
                ...equipment,
                op5: e,
              });
            }}
          />
        </div>
        <hr class="my-2" />
        <div>
          <OptionInput
            label="OP 6"
            options={equipment.op6}
            onChange={(e) => {
              onChange({
                ...equipment,
                op6: e,
              });
            }}
          />
        </div>
        <hr class="my-2" />
        <div>
          <OptionInput
            label="OP 7"
            options={equipment.op7}
            onChange={(e) => {
              onChange({
                ...equipment,
                op7: e,
              });
            }}
          />
        </div>
        <hr class="my-2" />
        <div>
          <OptionInput
            label="OP 8"
            options={equipment.op8}
            onChange={(e) => {
              onChange({
                ...equipment,
                op8: e,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}
