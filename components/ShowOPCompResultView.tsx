import { useSignal } from "@preact/signals";
import type { Character, Equipment, Weapon } from "../libs/type.d.ts";
import { OPCompResult } from "./inputs/OPCompResult.tsx";

interface ShowOPCompResultProps {
  weapon: Weapon;
  player: Character;
  enemy: Character;
  equipment1: Equipment;
  equipment2: Equipment;
}

export function ShowOPCompResult(props: ShowOPCompResultProps) {
  const avg_dmg_1 = useSignal(1);
  const avg_dmg_2 = useSignal(1);
  return (
    <>
      <h1 class="font-semibold mb-2 text-gray-900 dark:text-white">
        Equipment1 / Equipment2: {avg_dmg_1.value / avg_dmg_2.value * 100} %
      </h1>
      <div class="flex gap-2">
        <div class="flex-1 border rounded p-2 border-gray-300 dark:border-gray-600">
          <h3 class="font-semibold mb-2 text-gray-900 dark:text-white">
            Equipment 1
          </h3>
          <OPCompResult
            weapon={props.weapon}
            player={props.player}
            enemy={props.enemy}
            equipment={props.equipment1}
            avg_dmg={avg_dmg_1}
          />
        </div>
        <div class="flex-1 border rounded p-2 border-gray-300 dark:border-gray-600">
          <h3 class="font-semibold mb-2 text-gray-900 dark:text-white">
            Equipment 2
          </h3>
          <OPCompResult
            weapon={props.weapon}
            player={props.player}
            enemy={props.enemy}
            equipment={props.equipment2}
            avg_dmg={avg_dmg_2}
          />
        </div>
      </div>
    </>
  );
}
