export const capitalizeName = (name: string) => {
  const firstLetter = name.charAt(0)
  const restOfTheName = name.slice(1)

  return `${firstLetter.toUpperCase()}${restOfTheName}`
}