import { useProducerContext } from "@/persistence/producerContext"
import { SubChapter } from "./components/SubChapter"
import { useMemo } from "react"
import DashItem from "./components/Dashboard/DashItem"
import StateChart from "./components/Dashboard/StateChart"
import CropsChart from "./components/Dashboard/CropsChart"
import UsableSoilChart from "./components/Dashboard/UsableSoilChart"

export default function Dashboard() {
  const { producers } = useProducerContext()

  const totalFarmQuantity = useMemo(() => producers.reduce((acc, producer) => acc += producer.addresses.length, 0), [producers])

  const totalFarmHectaresQuantity = useMemo(() => 
    producers.reduce((acc, producer) => 
      acc += producer.addresses.reduce((acc2, address) => acc2 += address.totalArea, 0)
    , 0)
  , [producers])

  const addresses = useMemo(() => producers.flatMap(producer => producer.addresses), [producers])

  return (
    <section className="mx-auto w-4/6">
      <ul className="flex flex-col items-center gap-4">
        <DashItem>
          <SubChapter text={`Total de fazendas em quantidade: ${totalFarmQuantity}`} />
        </DashItem>
        <DashItem>
          <SubChapter text={`Total de fazendas em hectares (área total): ${totalFarmHectaresQuantity}`} />
        </DashItem>

        <StateChart addresses={addresses} />
        <CropsChart addresses={addresses} />
        <UsableSoilChart addresses={addresses} />
      </ul>
    </section>
  )
}