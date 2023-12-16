import { FreshContext } from "$fresh/server.ts";
import { TabViewHeaderItem } from "../components/TabViewHeaderItem.tsx";

export default function Home(ctx: FreshContext) {
  const items = [
    {
      label: "Compare OP",
      path: "/compare_op",
    },
    {
      label: "Compare Weapon",
      path: "/compare_weapon",
    },
  ];
  return (
    <>
      <header>
        <nav class="fixed top-0 left-0 z-10 bg-gray-100 dark:bg-gray-900 w-screen text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul class="flex flex-wrap -mb-px">
            {items.map((item) => (
              <TabViewHeaderItem
                label={item.label}
                path={item.path}
                current_path={ctx.url.pathname}
              />
            ))}
          </ul>
        </nav>
      </header>
      <div class="relative top-12 pt-2 bg-gray-50 dark:bg-gray-800">
        <ctx.Component />
      </div>
    </>
  );
}
