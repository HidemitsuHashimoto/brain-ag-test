import { citiesFormat } from "@/business/cities";
import { Producer } from "@/business/producer-domain"

type ProducerCardProps = {
  producer: Producer;
}
export default function ProducerCard({ producer }: ProducerCardProps) {
  return (
    <li className="border-2 rounded-md p-4 w-[250px]">
      <p>Nome: {producer.name}</p>
      <p>Fazenda: {producer.farmName}</p>
      <p>Cidade: {citiesFormat(producer.addresses[0].city)}</p>
    </li>
  )
}