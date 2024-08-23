const areaKeys: { [key: string]: string } = {
  'arableArea': 'Área agricultável',
  'vegetationArea': 'Área de vegetação',
}
export function areaFormat(areaKey: string) {
  return areaKeys[areaKey]
}