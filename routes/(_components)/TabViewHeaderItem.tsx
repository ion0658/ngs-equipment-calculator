import type { Signal } from "@preact/signals";

interface TabViewHeaderItemProps {
  item_index: number;
  label: string;
  selected_index: Signal<number>;
}

export function TabViewHeaderItem(props: TabViewHeaderItemProps) {
  const { item_index, label, selected_index } = props;
  return (
    <li class="me-2">
      <button
        type="button"
        class={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
          selected_index.value === item_index
            ? "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"
            : ""
        }`}
        onClick={() => selected_index.value = item_index}
      >
        {label}
      </button>
    </li>
  );
}
