export enum Crops {
  Soy = 'soy',
  Corn = 'corn',
  Cotton = 'cotton',
  Coffee = 'coffee',
  SugarCane = 'sugarcane',
}

export type CropsPlanted = {
  name: Crops;
  planted: boolean;
}

export type Addresses = {
  city: string;
  state: string;
  totalArea: number;
  arableArea: number;
  vegetationArea: number;
  cropsPlanted: CropsPlanted[];
}

export interface Producer {
  document: string;
  name: string;
  farmName: string;
  addresses: Addresses[];
}