export interface Options {
  damage_bonus: number;
  minimum_power_bonus: number;
  critical_damage_bonus: number;
  critical_percentage_bonus: number;
}

export interface Weapon {
  offensive_power: number;
  minimum_power_percent: number;
  potential_damage_bounous: Options;
}

export interface EquipmentItem {
  base_status: Options;
  op1: Options;
  op2: Options;
  op3: Options;
  op4: Options;
  op5: Options;
  op6: Options;
  op7: Options;
  op8: Options;
}

export interface Equipment {
  label: string;
  weapon_op: EquipmentItem;
  unit1_op: EquipmentItem;
  unit2_op: EquipmentItem;
  unit3_op: EquipmentItem;
}

export interface Character {
  base_offensive_power: number;
  defensive_power: number;
  base_critical_percentage: number;
  base_critical_damage_bonus: number;
}
