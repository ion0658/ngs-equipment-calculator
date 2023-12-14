import type { Equipment, Options } from "./type.d.ts";

const DEFAULT_OP: Options = {
  damage_bonus: 0,
  minimum_power_bonus: 0,
  critical_damage_bonus: 0,
  critical_percentage_bonus: 0,
};

const DEFAULT_EQUIPMENT_ITEM = {
  base_status: DEFAULT_OP,
  op1: DEFAULT_OP,
  op2: DEFAULT_OP,
  op3: DEFAULT_OP,
  op4: DEFAULT_OP,
  op5: DEFAULT_OP,
  op6: DEFAULT_OP,
  op7: DEFAULT_OP,
  op8: DEFAULT_OP,
};

export function initEquipment(): Equipment {
  return {
    weapon_op: JSON.parse(JSON.stringify(DEFAULT_EQUIPMENT_ITEM)),
    unit1_op: JSON.parse(JSON.stringify(DEFAULT_EQUIPMENT_ITEM)),
    unit2_op: JSON.parse(JSON.stringify(DEFAULT_EQUIPMENT_ITEM)),
    unit3_op: JSON.parse(JSON.stringify(DEFAULT_EQUIPMENT_ITEM)),
  };
}
