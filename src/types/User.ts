export interface IUser {
  userId: string
  firstname: string
  lastname: string
  email: string
  street: string
  city: string
  country: string
}

export interface IUsersListed {
  currentUsers: IUser[]
}

export interface IUserModal {
  user: IUser
}

export interface ISortData {
  index: number
  value: string
  label: string
  icon: JSX.Element
}
