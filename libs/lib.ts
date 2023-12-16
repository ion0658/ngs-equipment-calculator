import type { Equipment, EquipmentItem, Options, Weapon } from "./type.d.ts";

const DEFAULT_OP: Options = {
  damage_bonus: 0,
  minimum_power_bonus: 0,
  critical_damage_bonus: 0,
  critical_percentage_bonus: 0,
};

const DEFAULT_EQUIPMENT_WEAPON = {
  base_status: DEFAULT_OP,
  op1: {
    damage_bonus: 3.75,
    minimum_power_bonus: 0,
    critical_damage_bonus: 0,
    critical_percentage_bonus: 0,
  },
  op2: {
    damage_bonus: 2.5,
    minimum_power_bonus: 5,
    critical_damage_bonus: 0,
    critical_percentage_bonus: 0,
  },
  op3: {
    damage_bonus: 3.5,
    minimum_power_bonus: 0,
    critical_damage_bonus: 0,
    critical_percentage_bonus: 0,
  },
  op4: {
    damage_bonus: 3,
    minimum_power_bonus: 2.25,
    critical_damage_bonus: 0,
    critical_percentage_bonus: 0,
  },
  op5: {
    damage_bonus: 4,
    minimum_power_bonus: 0,
    critical_damage_bonus: 0,
    critical_percentage_bonus: 0,
  },
  op6: {
    damage_bonus: 4,
    minimum_power_bonus: 3,
    critical_damage_bonus: 0,
    critical_percentage_bonus: 0,
  },
  op7: DEFAULT_OP,
  op8: DEFAULT_OP,
};

const DEFAULT_EQUIPMENT_UNIT = {
  base_status: {
    damage_bonus: 4.5,
    minimum_power_bonus: 0,
    critical_damage_bonus: 0,
    critical_percentage_bonus: 0,
  },
  op1: {
    damage_bonus: 3.75,
    minimum_power_bonus: 0,
    critical_damage_bonus: 0,
    critical_percentage_bonus: 0,
  },
  op2: {
    damage_bonus: 2.5,
    minimum_power_bonus: 5,
    critical_damage_bonus: 0,
    critical_percentage_bonus: 0,
  },
  op3: {
    damage_bonus: 3.5,
    minimum_power_bonus: 0,
    critical_damage_bonus: 0,
    critical_percentage_bonus: 0,
  },
  op4: {
    damage_bonus: 3,
    minimum_power_bonus: 2.25,
    critical_damage_bonus: 0,
    critical_percentage_bonus: 0,
  },
  op5: {
    damage_bonus: 4,
    minimum_power_bonus: 0,
    critical_damage_bonus: 0,
    critical_percentage_bonus: 0,
  },
  op6: {
    damage_bonus: 4,
    minimum_power_bonus: 3,
    critical_damage_bonus: 0,
    critical_percentage_bonus: 0,
  },
  op7: DEFAULT_OP,
  op8: DEFAULT_OP,
};

export function initEquipment(label: string): Equipment {
  return JSON.parse(JSON.stringify({
    label: label,
    weapon_op: DEFAULT_EQUIPMENT_WEAPON,
    unit1_op: DEFAULT_EQUIPMENT_UNIT,
    unit2_op: DEFAULT_EQUIPMENT_UNIT,
    unit3_op: DEFAULT_EQUIPMENT_UNIT,
  }));
}

export function calcDamageBonus1(equipment: EquipmentItem): number {
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

export function calcMinimumDamageBonus1(equipment: EquipmentItem): number {
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

export function calcMinimumWeaponDamage(
  weapon: Weapon,
  equipment: Equipment,
): number {
  const min = calcMinimumDamageBonus(equipment) *
    (1 + weapon.potential_damage_bounous.minimum_power_bonus / 100) *
    weapon.minimum_power_percent;
  return min > 100 ? 100 : min;
}

export function calcCriticalDamageBonus1(equipment: EquipmentItem): number {
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

export function calcCriticalPercentageBonus1(equipment: EquipmentItem): number {
  return (equipment.base_status.critical_percentage_bonus / 100) +
    (equipment.op1.critical_percentage_bonus / 100) +
    (equipment.op2.critical_percentage_bonus / 100) +
    (equipment.op3.critical_percentage_bonus / 100) +
    (equipment.op4.critical_percentage_bonus / 100) +
    (equipment.op5.critical_percentage_bonus / 100) +
    (equipment.op6.critical_percentage_bonus / 100) +
    (equipment.op7.critical_percentage_bonus / 100) +
    (equipment.op8.critical_percentage_bonus / 100);
}

export function calcCriticalPercentageBonus(equipment: Equipment): number {
  return calcCriticalPercentageBonus1(equipment.weapon_op) +
    calcCriticalPercentageBonus1(equipment.unit1_op) +
    calcCriticalPercentageBonus1(equipment.unit2_op) +
    calcCriticalPercentageBonus1(equipment.unit3_op);
}

export function calcDamage(
  weapon_ap: number,
  player_ap: number,
  enemy_armor: number,
  damage_bonus: number,
): number {
  return Math.floor((weapon_ap + player_ap - enemy_armor) * damage_bonus);
}
