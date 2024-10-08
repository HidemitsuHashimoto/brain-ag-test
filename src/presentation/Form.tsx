'use client'

import { formValidation } from "@/business/formValidation"
import { yupResolver } from "@hookform/resolvers/yup"
import { useFieldArray, useForm } from "react-hook-form"
import TextInput from "./components/TextInput"
import { Crops, CropsPlanted, Producer, ProducerForm } from "@/business/producer-domain"
import { useProducerContext } from "@/persistence/producerContext"
import ProducerCard from "./components/ProducerCard"
import { citiesDatabaseFormat } from "@/business/cities"
import { useState } from "react"
import { SubChapter } from "./components/SubChapter"
import { cropsNameFormat } from "@/business/cropFormat"

const defaultCrops: CropsPlanted[] = [
  { name: Crops.Coffee, planted: false },
  { name: Crops.Corn, planted: false },
  { name: Crops.Cotton, planted: false },
  { name: Crops.Soy, planted: false },
  { name: Crops.SugarCane, planted: false },
]


export type EditProps = { active: boolean; producerDoc: string; }
export default function Form() {
  const { producers, addProducer, editProducer } = useProducerContext()
  const [isEdit, setIsEdit] = useState<EditProps>({ active: false, producerDoc: '' })

  const {
    control,
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ProducerForm>({
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

  const onSubmit = (data: ProducerForm) => {
    const formatedProducer: Producer = {
      ...data,
      addresses: [
        {
          ...data.addresses,
          totalArea: Number(data.addresses.totalArea),
          arableArea: Number(data.addresses.arableArea),
          vegetationArea: Number(data.addresses.vegetationArea),
          city: citiesDatabaseFormat(data.addresses.city),
          cropsPlanted: data.addresses.cropsPlanted! as CropsPlanted[],
        }
      ]
    }

    if(isEdit) {
      editProducer?.(formatedProducer)
      setIsEdit({ active: false, producerDoc: '' })
    }else {
      addProducer?.(formatedProducer)
    }

    reset()
  }

  return (
    <section className="flex gap-4 justify-center">
      <form className="flex flex-col gap-2 flex-2" onSubmit={handleSubmit(onSubmit)}>
        <section className="flex flex-col gap-2 border-2 rounded-md p-4">
          <SubChapter text="Dados do produtor" />

          <TextInput id="Document" label="CPF/CNPJ:" register={register('document')} error={errors.document?.message} />
          <TextInput id='Name' label="Nome do produtor:" register={register('name')} error={errors.name?.message} />
          <TextInput id='FarmName' label="Nome da Fazenda:" register={register('farmName')} error={errors.farmName?.message} />
        </section>

        <section className="flex flex-col gap-4 border-2 rounded-md p-4">
          <section className="flex flex-col gap-2">
            <SubChapter text="Endereço:" />

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
        <SubChapter text="Produtores" classStyle="mb-4" />

        <ul className="flex flex-col gap-2">
          {producers?.map(producer => (
            <ProducerCard
              key={producer.document}
              producer={producer}
              isEdit={isEdit}
              setValue={setValue}
              setIsEdit={setIsEdit}
            />
          ))}
        </ul>
      </section>
    </section>
  )
}