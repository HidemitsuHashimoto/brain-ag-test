import { Producer } from "@/business/producer-domain";
import { producerDatabase } from "@/database/producer";

type PromiseResponse = {
  status: number;
  body: Producer[];
}

export class ProducerService {
  static async getAll(): Promise<PromiseResponse> {
    return new Promise((resolve) => setTimeout(() => resolve({status: 200, body: producerDatabase}), 2000))
  }

  static async post(producerList: Producer[], producer: Producer): Promise<Omit<PromiseResponse, "body">> {
    return new Promise((resolve, reject) => {
      const findProducer = producerList.find(p => p.document === producer.document)
      if(findProducer)
        return reject({ message: 'Produtor com esse CPF/CNPJ já existe na base.' })

      resolve({ status: 201 })
    })
  }
  
  static async patch(producerList: Producer[], producer: Producer): Promise<PromiseResponse> {
    return new Promise((resolve) => {
      const editedProducers = producerList.map(producerItem => {
        if(producerItem.document === producer.document)
          return producer

        return producerItem
      })

      resolve({ status: 201, body: editedProducers })
    })
  }
  
  static async delete(producerList: Producer[], producer: Producer): Promise<PromiseResponse> {
    return new Promise((resolve) => {
      const deletedProducers = producerList.filter(producerItem => producerItem.document !== producer.document)

      resolve({ status: 201, body: deletedProducers })
    })
  }
}