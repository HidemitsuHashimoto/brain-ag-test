import { useProducerContext } from "@/persistence/producerContext"
import { SubChapter } from "./components/SubChapter"
import { useMemo } from "react"
import DashItem from "./components/Dashboard/DashItem"
import DashPieChart from "./components/Dashboard/DashPieChart"

export default function Dashboard() {
  const { producers } = useProducerContext()

  const totalFarmQuantity = useMemo(() => producers.reduce((acc, producer) => acc += producer.addresses.length, 0), [producers])

  const totalFarmHectaresQuantity = useMemo(() => 
    producers.reduce((acc, producer) => 
      acc += producer.addresses.reduce((acc2, address) => acc2 += address.totalArea, 0)
    , 0)
  , [producers])

  return (
    <section className="mx-auto w-4/6">
      <ul className="flex flex-col items-center gap-4">
        <DashItem>
          <SubChapter text={`Total de fazendas em quantidade: ${totalFarmQuantity}`} />
        </DashItem>
        <DashItem>
          <SubChapter text={`Total de fazendas em hectares (área total): ${totalFarmHectaresQuantity}`} />
        </DashItem>
        <DashItem>
          <SubChapter text="Gráfico de pizza por estado:" />
          <div className="w-[400px] h-[400px]">
            <DashPieChart addresses={producers.flatMap(producer => producer.addresses)} />
          </div>
        </DashItem>
        <DashItem>
          <SubChapter text="Gráfico de pizza por cultura:" />
        </DashItem>
        <DashItem>
          <SubChapter text="Gráfico de pizza por uso de solo (Área agricultável e vegetação):" />
        </DashItem>
      </ul>
    </section>
  )
}