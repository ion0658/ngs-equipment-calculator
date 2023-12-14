import { useSignal } from "@preact/signals";
import { TabViewHeaders } from "./(_islands)/TabViewHeader.tsx";
import { TabViewBody } from "./(_islands)/TabViewBody.tsx";

export default function Home() {
  const index = useSignal(0);
  const items = ["Compare OP", "Compare Weapon"];
  return (
    <>
      <header>
        <TabViewHeaders
          selected_index={index}
          items={items}
        />
      </header>
      <TabViewBody selected_index={index} />
    </>
  );
}
