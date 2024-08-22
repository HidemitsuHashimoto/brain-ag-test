import { useProducerContext } from "@/persistence/producerContext"
import { SubChapter } from "./components/SubChapter"

export default function Dashboard() {
  const { producers } = useProducerContext()
  return (
    <section>
      <section>
        <section>
          <SubChapter text="Total de fazendas em quantidade:" />
        </section>
        <section>
          <SubChapter text="Total de fazendas em hectares (área total):" />
        </section>
        <section>
          <SubChapter text="Gráfico de pizza por estado:" />
        </section>
        <section>
          <SubChapter text="Gráfico de pizza por cultura:" />
        </section>
        <section>
          <SubChapter text="Gráfico de pizza por uso de solo (Área agricultável e vegetação):" />
        </section>
      </section>
    </section>
  )
}