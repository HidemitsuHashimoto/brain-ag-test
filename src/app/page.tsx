'use client'

import { ActiveTab, useTabContext } from "@/persistence/tabContext";
import Dashboard from "@/presentation/Dashboard";
import Form from "@/presentation/Form";
import TabButton from "@/presentation/TabButton";

export default function Home() {
  const { activeTab, setTab } = useTabContext()

  return (
    <main className="flex min-h-screen flex-col items-center gap-4 py-2 px-24 w-screen">
      <header className="flex gap-4">
        <TabButton active={activeTab === ActiveTab.Dash} text="Dashboard" onChange={() => setTab?.(ActiveTab.Dash)} />
        <TabButton active={activeTab === ActiveTab.Form} text="Formulário" onChange={() => setTab?.(ActiveTab.Form)} />
      </header>

      {activeTab === ActiveTab.Dash ? (
        <Dashboard />
      ) : null}
      
      {activeTab === ActiveTab.Form ? (
        <Form />
      ) : null}
    </main>
  );
}
