import { CropsPlanted, Producer } from "@/business/producer-domain";

export const producerDatabase: Producer[] = [
  {
    name: 'Jon',
    document: '43386698883',
    farmName: 'Jon Farm',
    addresses: [
      {
        city: 'sao-paulo',
        state: 'sp',
        totalArea: 10,
        arableArea: 5,
        vegetationArea: 5,
        cropsPlanted: [
          CropsPlanted.Coffee,
          CropsPlanted.Corn,
        ],
      }
    ]
  },
  {
    name: 'Bettany',
    document: '44626683835',
    farmName: 'Bettany Farm',
    addresses: [
      {
        city: 'nova-iguacu',
        state: 'rj',
        totalArea: 10,
        arableArea: 5,
        vegetationArea: 5,
        cropsPlanted: [
          CropsPlanted.Coffee,
          CropsPlanted.Corn,
        ],
      }
    ]
  },
  {
    name: 'Silvia',
    document: '27132115000196',
    farmName: 'Silvia Farm',
    addresses: [
      {
        city: 'araras',
        state: 'sp',
        totalArea: 10,
        arableArea: 5,
        vegetationArea: 5,
        cropsPlanted: [
          CropsPlanted.Coffee,
          CropsPlanted.Corn,
        ],
      }
    ]
  },
  {
    name: 'Rafaela',
    document: '27132115000196',
    farmName: 'Rafaela Farm',
    addresses: [
      {
        city: 'rio-de-janeiro',
        state: 'rj',
        totalArea: 10,
        arableArea: 5,
        vegetationArea: 5,
        cropsPlanted: [
          CropsPlanted.Coffee,
          CropsPlanted.Corn,
        ],
      }
    ]
  },
  {
    name: 'Paulo',
    document: '17189311000143',
    farmName: 'Paulo Farm',
    addresses: [
      {
        city: 'abre-campo',
        state: 'mg',
        totalArea: 10,
        arableArea: 5,
        vegetationArea: 5,
        cropsPlanted: [
          CropsPlanted.Coffee,
          CropsPlanted.Corn,
        ],
      }
    ]
  }
]