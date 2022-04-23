import { IUser } from '../types/User'

// regular expression: https://regexr.com/2rhq7
export const regexEmailValidation =
  /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export interface IUserFilter {
  all: IUser[]
}

const UserFilter = (users: IUser[]): IUserFilter => {
  return {
    all: users
  }
}
export default UserFilter
