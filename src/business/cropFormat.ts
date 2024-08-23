import { Crops } from "./producer-domain";

export const cropsNameFormat: { [key: string]: string } = {
  [Crops.Coffee]: 'Café',
  [Crops.Corn]: 'Milho',
  [Crops.Cotton]: 'Algodão',
  [Crops.Soy]: 'Soja',
  [Crops.SugarCane]: 'Cana de Açúcar',
}