import { Addresses } from '@/business/producer-domain';
import { useEffect, useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, PieLabel } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name, value }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${name}: ${(percent * 100).toFixed(0)}% - ${value}`}
    </text>
  );
};

type PieChartProps = {
  addresses: Addresses[];
}
type PieDataProps = {
  name: string;
  value: number;
}
export default function DashPieChart({ addresses }: PieChartProps) {
  const [statesData, setStatesData] = useState<PieDataProps[]>([])

  useEffect(() => {
    const statesCount: { [key: string]: number } = {}
    for(let i of addresses) {
      console.log({i})
      if(statesCount[i.state] !== undefined)
        statesCount[i.state]++
      else
        statesCount[i.state] = 1
    }
    
    const newStatesData = Object.keys(statesCount).map(state => ({ name: state.toUpperCase(), value: statesCount[state] }))
    setStatesData(newStatesData)
  }, [addresses])

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={statesData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {statesData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}