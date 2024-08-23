import { Addresses } from "@/business/producer-domain"
import DashItem from "./DashItem"
import { SubChapter } from "../SubChapter"
import DashPieChart, { PieDataProps } from "./DashPieChart"
import { useEffect, useState } from "react"
import { areaFormat } from "@/business/areaFormat"

type UsableSoilChartProps = {
  addresses: Addresses[]
}
export default function UsableSoilChart({ addresses }: UsableSoilChartProps) {
  const [usableSoilData, setUsableSoilData] = useState<PieDataProps[]>([])

  useEffect(() => {
    const usableSoilCount: { [key: string]: number } = {}
    for(let address of addresses) {
      if(usableSoilCount['arableArea'] !== undefined)
        usableSoilCount['arableArea'] += address.arableArea
      else
        usableSoilCount['arableArea'] = 0
      
      if(usableSoilCount['vegetationArea'] !== undefined)
        usableSoilCount['vegetationArea'] += address.vegetationArea
      else
        usableSoilCount['vegetationArea'] = 0
    }
    
    const newUsableSoilData = Object.keys(usableSoilCount).map(key => ({ name: areaFormat(key), value: usableSoilCount[key] }))
    setUsableSoilData(newUsableSoilData)
  }, [addresses])
  
  return (
    <DashItem direction="col" width="w-full">
      <SubChapter text="Gráfico de pizza por estado:" />
      <div className="w-[800px] h-[300px]">
        <DashPieChart data={usableSoilData} valueComplement="Hectares" />
      </div>
    </DashItem>
  )
}