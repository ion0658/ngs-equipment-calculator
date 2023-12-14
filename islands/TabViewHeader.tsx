import type { Signal } from "@preact/signals";
import { TabViewHeaderItem } from "../components/TabViewHeaderItem.tsx";

interface TabViewHeaderProps {
  selected_index: Signal<number>;
  items: string[];
}

export function TabViewHeaders(props: TabViewHeaderProps) {
  const { selected_index, items } = props;
  return (
    <nav class="fixed top-0 left-0 z-10 bg-gray-100 dark:bg-gray-900 w-screen text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul class="flex flex-wrap -mb-px">
        {items.map((item, index) => (
          <TabViewHeaderItem
            item_index={index}
            selected_index={selected_index}
            label={item}
          />
        ))}
      </ul>
    </nav>
  );
}
