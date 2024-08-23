import { Addresses } from "@/business/producer-domain"
import DashItem from "./DashItem"
import { SubChapter } from "../SubChapter"
import DashPieChart, { PieDataProps } from "./DashPieChart"
import { useEffect, useState } from "react"

type CropsChartProps = {
  addresses: Addresses[]
}
export default function CropsChart({ addresses }: CropsChartProps) {
  const [cropsData, setCropsData] = useState<PieDataProps[]>([])

  useEffect(() => {
    const cropsCount: { [key: string]: number } = {}
    for(let address of addresses) {
      for(let crops of address.cropsPlanted) {
        if(cropsCount[crops.name] !== undefined && crops.planted)
          cropsCount[crops.name]++
        else
          cropsCount[crops.name] = 1
      }
    }
    
    const newCropsData = Object.keys(cropsCount).map(state => ({ name: state.toUpperCase(), value: cropsCount[state] }))
    setCropsData(newCropsData)
  }, [addresses])
  
  return (
    <DashItem direction="col">
      <SubChapter text="Gráfico de pizza por estado:" />
      <div className="w-[400px] h-[400px]">
        <DashPieChart data={cropsData} />
      </div>
    </DashItem>
  )
}