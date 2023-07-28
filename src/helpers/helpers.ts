export const formatDate = (value: string): string => {
  const date = new Date(value)

  const formatedDate = date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return formatedDate
}

export const shuffleArray = (array: string[]): string[] => {
  const randomArray = array.map(() => Math.random())
  const sortedArray = array.slice()
  
  sortedArray.sort((a, b) => {
    const A = randomArray[sortedArray.indexOf(a)]
    const B = randomArray[sortedArray.indexOf(b)]
    return A - B
  })
  
  return sortedArray
}