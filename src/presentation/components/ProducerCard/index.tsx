import { citiesFormat } from "@/business/cities";
import { Producer, ProducerForm } from "@/business/producer-domain"
import ProducerCardAction from "./ProducerCardAction";
import { UseFormSetValue } from "react-hook-form";
import { Dispatch, SetStateAction, useMemo } from "react";
import { EditProps } from "@/presentation/Form";
import { useProducerContext } from "@/persistence/producerContext";

type ProducerCardProps = {
  producer: Producer;
  isEdit: EditProps;
  setValue: UseFormSetValue<ProducerForm>;
  setIsEdit: Dispatch<SetStateAction<EditProps>>;
}
export default function ProducerCard({ producer, isEdit, setValue, setIsEdit }: ProducerCardProps) {
  const { deleteProducer } = useProducerContext()

  const editIsActive = useMemo(() => isEdit.active && isEdit.producerDoc === producer.document, [producer, isEdit])

  const handleEdit = () => {
    setIsEdit({ active: true, producerDoc: producer.document })

    const address = producer.addresses[0]

    setValue('document', producer.document)
    setValue('name', producer.name)
    setValue('farmName', producer.farmName)
    setValue('addresses.city', citiesFormat(address.city))
    setValue('addresses.state', address.state)
    setValue('addresses.totalArea', address.totalArea.toString())
    setValue('addresses.arableArea', address.arableArea.toString())
    setValue('addresses.vegetationArea', address.vegetationArea.toString())
    setValue('addresses.cropsPlanted', address.cropsPlanted)
  }

  const handleDelete = () => {
    deleteProducer?.(producer)
  }

  return (
    <li className={`flex items-center justify-between gap-2 border-2 rounded-md p-4 w-[400px] ${editIsActive ? 'bg-blue-700' : 'bg-transparent'}`}>
      <div>
        <p>Nome: {producer.name}</p>
        <p>Fazenda: {producer.farmName}</p>
        <p>Cidade: {citiesFormat(producer.addresses[0].city)}</p>
      </div>
      <div className="flex flex-col gap-2">
        <ProducerCardAction text="Editar" onClick={handleEdit} />
        <ProducerCardAction text="Remover" onClick={handleDelete} />
      </div>
    </li>
  )
}