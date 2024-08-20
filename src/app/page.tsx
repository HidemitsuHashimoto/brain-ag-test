'use client'

import { ActiveTab, useTabContext } from "@/persistence/tabContext";
import TabButton from "@/presentation/TabButton";

export default function Home() {
  const { activeTab, setTab } = useTabContext()
console.log({activeTab: activeTab === ActiveTab.Dash})
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <header className="flex gap-4">
        <TabButton active={activeTab === ActiveTab.Dash} text="Dashboard" onChange={() => setTab?.(ActiveTab.Dash)} />
        <TabButton active={activeTab === ActiveTab.Form} text="Formulário" onChange={() => setTab?.(ActiveTab.Form)} />
      </header>

      <section>
        {activeTab === ActiveTab.Dash ? (
          <h1>Dash</h1>
        ) : null}
        
        {activeTab === ActiveTab.Form ? (
          <h1>Form</h1>
        ) : null}
      </section>
    </main>
  );
}
