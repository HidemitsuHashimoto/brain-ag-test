'use client'

import { formValidation } from "@/business/formValidation"
import { yupResolver } from "@hookform/resolvers/yup"
import { useFieldArray, useForm } from "react-hook-form"
import TextInput from "./components/TextInput"
import { Crops, CropsPlanted } from "@/business/producer-domain"
import { useProducerContext } from "@/persistence/producerContext"
import ProducerCard from "./components/ProducerCard"

const defaultCrops: CropsPlanted[] = [
  { name: Crops.Coffee, planted: false },
  { name: Crops.Corn, planted: false },
  { name: Crops.Cotton, planted: false },
  { name: Crops.Soy, planted: false },
  { name: Crops.SugarCane, planted: false },
]

const cropsNameFormat: { [key: string]: string } = {
  [Crops.Coffee]: 'Café',
  [Crops.Corn]: 'Milho',
  [Crops.Cotton]: 'Algodão',
  [Crops.Soy]: 'Soja',
  [Crops.SugarCane]: 'Cana de Açúcar',
}

export default function Form() {
  const { producers } = useProducerContext()

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formValidation),
    defaultValues: {
      addresses: {
        cropsPlanted: defaultCrops
      }
    }
  })

  const { fields } = useFieldArray({
    control,
    name: 'addresses.cropsPlanted'
  })
  
  const onSubmit = (data: any) => console.log(data)

  return (
    <section className="flex gap-4 justify-center">
      <form className="flex flex-col gap-2 flex-2" onSubmit={handleSubmit(onSubmit)}>
        <section className="flex flex-col gap-2 border-2 rounded-md p-4">
          <h2 className="text-xl">Dados do produtor</h2>
          <TextInput id="Document" label="CPF/CNPJ:" register={register('document')} error={errors.document?.message} />
          <TextInput id='Name' label="Nome do produtor:" register={register('name')} error={errors.name?.message} />
          <TextInput id='FarmName' label="Nome da Fazenda:" register={register('farmName')} error={errors.farmName?.message} />
        </section>

        <section className="flex flex-col gap-4 border-2 rounded-md p-4">
          <section className="flex flex-col gap-2">
            <h2 className="text-xl">Endereço:</h2>
            <TextInput id='City' label="Cidade" register={register('addresses.city')} error={errors.addresses?.city?.message} />
            <TextInput id='State' label="Estado" register={register('addresses.state')} error={errors.addresses?.state?.message} />
            <TextInput id='TotalArea' label="Área total em hectares" register={register('addresses.totalArea')} error={errors.addresses?.totalArea?.message} />
            <TextInput id='ArableArea' label="Área agricultável em hectares" register={register('addresses.arableArea')} error={errors.addresses?.arableArea?.message} />
            <TextInput id='VegetationArea' label="Área de vegetação em hectares" register={register('addresses.vegetationArea')} error={errors.addresses?.vegetationArea?.message} />
          </section>
          
          <section className="flex flex-col gap-2">
            <h3 className="text-lg">Culturas plantadas:</h3>

            <div className="flex gap-2 justify-between flex-wrap">
              {fields.map((item, index) => {
                return (
                  <div key={item.id} className="flex gap-2 items-center">
                    <input id={item.id} type="checkbox" {...register(`addresses.cropsPlanted.${index}.planted`)} />
                    <label className="checkboxLabel" htmlFor={item.id}>{cropsNameFormat[item.name]}</label>
                  </div>
                )
              })}
            </div>

            {errors.addresses?.cropsPlanted?.root?.message ? <p className="text-yellow-500">{errors.addresses?.cropsPlanted?.root?.message}</p> : null}
          </section>
        </section>

        <button type="submit" className="border-2 rounded-md p-4 hover:bg-slate-600">Salvar</button>
      </form>

      <section className="flex-1 border-2 rounded-md p-4">
        <h2 className="text-xl mb-4">Produtores</h2>
        <ul className="flex flex-col gap-2">
          {producers?.map(producer => (
            <ProducerCard key={producer.document} producer={producer} />
          ))}
        </ul>
      </section>
    </section>
  )
}