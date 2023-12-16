interface TabViewHeaderItemProps {
  label: string;
  path: string;
  current_path: string;
}

export function TabViewHeaderItem(props: TabViewHeaderItemProps) {
  const { label, path, current_path } = props;
  return (
    <li class="me-2">
      <a
        class={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
          path === current_path
            ? "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"
            : ""
        }`}
        href={path}
      >
        {label}
      </a>
    </li>
  );
}
