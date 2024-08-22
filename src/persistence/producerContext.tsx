'use client'

import { Producer } from "@/business/producer-domain";
import { ProducerService } from "@/services/producer";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

type ErrorProps = {
  message?: string;
}

type ProducerContextProps = {
  producers: Producer[];
  loading: boolean;
  error: ErrorProps;
  addProducer?: (producer: Producer) => void;
  editProducer?: (producer: Producer) => Promise<void>
}

const ProducerContext = createContext<ProducerContextProps>({
  producers: [],
  error: {},
  loading: false,
})

type ProducerContextProviderProps = {
  children: React.ReactNode
}
export function ProducerContextProvider({ children }: ProducerContextProviderProps) {
  const [producers, setProducers] = useState<Producer[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<ErrorProps>({})

  useEffect(() => {
    async function getData() {
      try{
        setLoading(true)
        const response = await ProducerService.getAll()
        setProducers(response.body)
        setLoading(false)
      }catch(e: any){
        setLoading(false)
        setError({ message: e.message })
      }
    }
    getData()
  }, [])

  const addProducer = useCallback(async (producer: Producer) => {
    try{
      await ProducerService.post(producers, producer)
      setProducers([...producers, producer])
    }catch(e: any) {
      setError({ message: e.message })
    }
  }, [producers])

  const editProducer = useCallback(async (producer: Producer) => {
    try{
      const response = await ProducerService.patch(producers, producer)

      setProducers(response.body)
    }catch(e: any) {
      setError({ message: e.message })
    }
  }, [producers])

  useEffect(() => {
    console.log({producers, loading, error})
  }, [error, loading, producers])

  return (
    <ProducerContext.Provider value={{ producers, loading, error, addProducer, editProducer }}>{children}</ProducerContext.Provider>
  )
}

export const useProducerContext = () => useContext(ProducerContext)