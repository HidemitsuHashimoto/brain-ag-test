'use client'

import { citiesFormat } from "@/business/cities";
import { ProducerContextProvider } from "@/persistence/producerContext";
import { TabContextProvider } from "@/persistence/tabContext";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    citiesFormat('abre-campo')
  }, [])
  return (
    <TabContextProvider>
      <ProducerContextProvider>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          
        </main>
      </ProducerContextProvider>
    </TabContextProvider>
  );
}
