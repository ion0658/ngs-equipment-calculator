import { useSignal } from "@preact/signals";
import { TabViewHeaders } from "../islands/TabViewHeader.tsx";
import { TabViewBody } from "../islands/TabViewBody.tsx";

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
