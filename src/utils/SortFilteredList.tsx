import { IUser } from '../types/User'

export default function SortFilteredList(filteredList: IUser[]) {
  const alphaSort = [...filteredList].sort(function (
    first: { lastname: string },
    second: { lastname: string }
  ) {
    const firstName = first.lastname?.toUpperCase() // ignore upper and lowercase
    const secondName = second.lastname.toUpperCase() // ignore upper and lowercase
    if (firstName < secondName) {
      return -1
    }
    if (firstName > secondName) {
      return 1
    }
    // otherwise, the names are the same
    return 0
  })

  return alphaSort
}
