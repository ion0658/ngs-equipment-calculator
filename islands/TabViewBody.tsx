import type { Signal } from "@preact/signals";
import { OpCompView } from "../components/OPCompView.tsx";
import { WeaponCompView } from "../components/WeaponCompView.tsx";

interface TabViewBodyProps {
  selected_index: Signal<number>;
}

export function TabViewBody(props: TabViewBodyProps) {
  const { selected_index } = props;
  const items = [OpCompView, WeaponCompView];
  return (
    <div class="relative top-12 pt-2 bg-gray-50 dark:bg-gray-800">
      {items[selected_index.value]()}
    </div>
  );
}
