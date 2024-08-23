import { Addresses } from "@/business/producer-domain"
import DashItem from "./DashItem"
import { SubChapter } from "../SubChapter"
import DashPieChart, { PieDataProps } from "./DashPieChart"
import { useEffect, useState } from "react"
import { cropsNameFormat } from "@/business/cropFormat"

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
    
    const newCropsData = Object.keys(cropsCount).map(key => ({ name: cropsNameFormat[key], value: cropsCount[key] }))
    setCropsData(newCropsData)
  }, [addresses])
  
  return (
    <DashItem direction="col" width="w-full">
      <SubChapter text="Gráfico de pizza por estado:" />
      <div className="w-[800px] h-[300px]">
        <DashPieChart data={cropsData} />
      </div>
    </DashItem>
  )
}