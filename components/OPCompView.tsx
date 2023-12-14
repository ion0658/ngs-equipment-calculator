import { useSignal } from "@preact/signals";
import { WeaponInput } from "./inputs/WeaponInput.tsx";
import { CharacterInput } from "./inputs/CharactorInput.tsx";
import { initEquipment } from "../libs/lib.ts";
import { EquipmentInput } from "./inputs/EquipmentInput.tsx";
import type { Character, Equipment, Weapon } from "../libs/type.d.ts";

export function OpCompView() {
  const weapon = useSignal<Weapon>({
    offensive_power: 1000,
    minimum_power_percent: 50,
    potential_damage_bounous: {
      damage_bonus: 30,
      minimum_power_bonus: 0,
      critical_damage_bonus: 0,
      critical_percentage_bonus: 0,
    },
  });
  const player = useSignal<Character>({
    base_offensive_power: 1874,
    defensive_power: 0,
    base_critical_percentage: 5,
    base_critical_damage_bonus: 20,
  });
  const enemy = useSignal<Character>({
    base_offensive_power: 0,
    defensive_power: 1844,
    base_critical_percentage: 5,
    base_critical_damage_bonus: 20,
  });
  const equipment1 = useSignal<Equipment>(initEquipment());
  const equipment2 = useSignal<Equipment>(initEquipment());

  return (
    <div class="flex flex-1">
      <aside class="h-fit p-2 bg-gray-50 dark:bg-gray-800 w-80 border-r border-gray-200 dark:border-gray-700">
        <WeaponInput weapon={weapon} />
        <CharacterInput label="Player" character={player} />
        <CharacterInput label="Enemy" character={enemy} />
      </aside>
      <main class="px-4 py-2 w-full">
        <EquipmentInput label="Equipment 1" equipment={equipment1} />
        <EquipmentInput label="Equipment 2" equipment={equipment2} />
      </main>
    </div>
  );
}
