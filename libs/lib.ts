import type { Equipment, EquipmentItem, Options } from "./type.d.ts";

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

function calcDamageBonus1(equipment: EquipmentItem): number {
  return (1 + equipment.base_status.damage_bonus / 100) *
    (1 + equipment.op1.damage_bonus / 100) *
    (1 + equipment.op2.damage_bonus / 100) *
    (1 + equipment.op3.damage_bonus / 100) *
    (1 + equipment.op4.damage_bonus / 100) *
    (1 + equipment.op5.damage_bonus / 100) *
    (1 + equipment.op6.damage_bonus / 100) *
    (1 + equipment.op7.damage_bonus / 100) *
    (1 + equipment.op8.damage_bonus / 100);
}

export function calcDamageBonus(equipment: Equipment): number {
  return calcDamageBonus1(equipment.weapon_op) *
    calcDamageBonus1(equipment.unit1_op) *
    calcDamageBonus1(equipment.unit2_op) *
    calcDamageBonus1(equipment.unit3_op);
}

function calcMinimumDamageBonus1(equipment: EquipmentItem): number {
  return (1 + equipment.base_status.minimum_power_bonus / 100) *
    (1 + equipment.op1.minimum_power_bonus / 100) *
    (1 + equipment.op2.minimum_power_bonus / 100) *
    (1 + equipment.op3.minimum_power_bonus / 100) *
    (1 + equipment.op4.minimum_power_bonus / 100) *
    (1 + equipment.op5.minimum_power_bonus / 100) *
    (1 + equipment.op6.minimum_power_bonus / 100) *
    (1 + equipment.op7.minimum_power_bonus / 100) *
    (1 + equipment.op8.minimum_power_bonus / 100);
}

export function calcMinimumDamageBonus(equipment: Equipment): number {
  return calcMinimumDamageBonus1(equipment.weapon_op) *
    calcMinimumDamageBonus1(equipment.unit1_op) *
    calcMinimumDamageBonus1(equipment.unit2_op) *
    calcMinimumDamageBonus1(equipment.unit3_op);
}

function calcCriticalDamageBonus1(equipment: EquipmentItem): number {
  return (1 + equipment.base_status.critical_damage_bonus / 100) *
    (1 + equipment.op1.critical_damage_bonus / 100) *
    (1 + equipment.op2.critical_damage_bonus / 100) *
    (1 + equipment.op3.critical_damage_bonus / 100) *
    (1 + equipment.op4.critical_damage_bonus / 100) *
    (1 + equipment.op5.critical_damage_bonus / 100) *
    (1 + equipment.op6.critical_damage_bonus / 100) *
    (1 + equipment.op7.critical_damage_bonus / 100) *
    (1 + equipment.op8.critical_damage_bonus / 100);
}

export function calcCriticalDamageBonus(equipment: Equipment): number {
  return calcCriticalDamageBonus1(equipment.weapon_op) *
    calcCriticalDamageBonus1(equipment.unit1_op) *
    calcCriticalDamageBonus1(equipment.unit2_op) *
    calcCriticalDamageBonus1(equipment.unit3_op);
}

function calcCriticalPercentageBonus1(equipment: EquipmentItem): number {
  return (1 + equipment.base_status.critical_percentage_bonus / 100) +
    (1 + equipment.op1.critical_percentage_bonus / 100) +
    (1 + equipment.op2.critical_percentage_bonus / 100) +
    (1 + equipment.op3.critical_percentage_bonus / 100) +
    (1 + equipment.op4.critical_percentage_bonus / 100) +
    (1 + equipment.op5.critical_percentage_bonus / 100) +
    (1 + equipment.op6.critical_percentage_bonus / 100) +
    (1 + equipment.op7.critical_percentage_bonus / 100) +
    (1 + equipment.op8.critical_percentage_bonus / 100);
}

export function calcCriticalPercentageBonus(equipment: Equipment): number {
  return calcCriticalPercentageBonus1(equipment.weapon_op) +
    calcCriticalPercentageBonus1(equipment.unit1_op) +
    calcCriticalPercentageBonus1(equipment.unit2_op) +
    calcCriticalPercentageBonus1(equipment.unit3_op);
}
