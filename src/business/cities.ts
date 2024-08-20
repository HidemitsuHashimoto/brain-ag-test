export function citiesFormat(cityId: string) {
  return cityId.split('-').map(word => word.charAt(0).toUpperCase() + word.substring(1, word.length)).join(' ')
}