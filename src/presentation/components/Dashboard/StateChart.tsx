import { Addresses } from "@/business/producer-domain"
import DashItem from "./DashItem"
import { SubChapter } from "../SubChapter"
import DashPieChart, { PieDataProps } from "./DashPieChart"
import { useEffect, useState } from "react"

type StateChartProps = {
  addresses: Addresses[]
}
export default function StateChart({ addresses }: StateChartProps) {
  const [statesData, setStatesData] = useState<PieDataProps[]>([])

  useEffect(() => {
    const statesCount: { [key: string]: number } = {}
    for(let i of addresses) {
      if(statesCount[i.state] !== undefined)
        statesCount[i.state]++
      else
        statesCount[i.state] = 1
    }
    
    const newStatesData = Object.keys(statesCount).map(state => ({ name: state.toUpperCase(), value: statesCount[state] }))
    setStatesData(newStatesData)
  }, [addresses])
  
  return (
    <DashItem direction="col">
      <SubChapter text="Gráfico de pizza por estado:" />
      <div className="w-[400px] h-[400px]">
        <DashPieChart data={statesData} />
      </div>
    </DashItem>
  )
}