import type { EquipmentItem } from "../../libs/type.d.ts";
import { OptionInput } from "./OptionInput.tsx";
import {
  calcCriticalDamageBonus1,
  calcCriticalPercentageBonus1,
  calcDamageBonus1,
  calcMinimumDamageBonus1,
} from "../../libs/lib.ts";

interface EquipmentItemInputProps {
  label: string;
  equipment: EquipmentItem;
  onChange: (equipment: EquipmentItem) => void;
}

export function EquipmentItemInput(props: EquipmentItemInputProps) {
  const { label, equipment, onChange } = props;

  return (
    <div class="block">
      <h3 class="font-semibold mb-2 text-gray-900 dark:text-white">
        {label} ({(calcDamageBonus1(equipment) - 1) * 100}% /{" "}
        {(calcMinimumDamageBonus1(equipment) - 1) * 100}% /{" "}
        {(calcCriticalDamageBonus1(equipment) - 1) * 100}% /{" "}
        {calcCriticalPercentageBonus1(equipment) * 100}%)
      </h3>
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
  );
}
