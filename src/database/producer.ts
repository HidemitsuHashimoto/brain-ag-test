import { Crops, Producer } from "@/business/producer-domain";

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
          { name: Crops.Coffee, planted: true },
          { name: Crops.Corn, planted: true },
          { name: Crops.Cotton, planted: false },
          { name: Crops.Soy, planted: false },
          { name: Crops.SugarCane, planted: false },
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
          { name: Crops.Coffee, planted: true },
          { name: Crops.Corn, planted: true },
          { name: Crops.Cotton, planted: false },
          { name: Crops.Soy, planted: false },
          { name: Crops.SugarCane, planted: false },
        ],
      }
    ]
  },
  {
    name: 'Silvia',
    document: '47514662000143',
    farmName: 'Silvia Farm',
    addresses: [
      {
        city: 'araras',
        state: 'sp',
        totalArea: 10,
        arableArea: 5,
        vegetationArea: 5,
        cropsPlanted: [
          { name: Crops.Coffee, planted: false },
          { name: Crops.Corn, planted: true },
          { name: Crops.Cotton, planted: false },
          { name: Crops.Soy, planted: true },
          { name: Crops.SugarCane, planted: false },
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
          { name: Crops.Coffee, planted: false },
          { name: Crops.Corn, planted: false },
          { name: Crops.Cotton, planted: true },
          { name: Crops.Soy, planted: false },
          { name: Crops.SugarCane, planted: false },
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
          { name: Crops.Coffee, planted: false },
          { name: Crops.Corn, planted: false },
          { name: Crops.Cotton, planted: true },
          { name: Crops.Soy, planted: false },
          { name: Crops.SugarCane, planted: true },
        ],
      }
    ]
  }
]