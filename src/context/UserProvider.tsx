/* eslint-disable @typescript-eslint/no-empty-function */
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from 'react'
import { useSetRecoilState } from 'recoil'
import { userStateAtom } from '../recoil-state'
import { IUser } from '../types/User'

export interface Users {
  allUsers: IUser[]
  setAllUsers: Dispatch<SetStateAction<IUser[]>>
  userAddition: (newUser: IUser) => void
  userUpdate: (newUser: IUser) => void
  userDeletion: (userId: string) => void
}

const UserContext = createContext<Users>({
  allUsers: [],
  setAllUsers: () => {},
  userAddition: () => {},
  userUpdate: () => {},
  userDeletion: () => {}
})

export const useUsersContext = () => useContext(UserContext)

interface IUserProvider {
  children: ReactNode
}

export const UserProvider = ({ children }: IUserProvider) => {
  const setUserState = useSetRecoilState(userStateAtom)
  const [allUsers, setAllUsers] = useState<IUser[]>([])

  useEffect(() => {
    if (allUsers) {
      setUserState(allUsers)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allUsers])

  // delete user from state
  const userDeletion = (userId: string) => {
    const otherUsers = allUsers.filter((user) => user.userId !== userId)
    setAllUsers(otherUsers)
  }

  // add user to state
  const userAddition = (newUser: IUser) => {
    setAllUsers([...allUsers, newUser])
  }

  // edit user from state
  const userUpdate = (updatedUser: IUser) => {
    const { userId } = updatedUser
    const otherUsers = allUsers.filter((user) => user.userId !== userId)
    setAllUsers([...otherUsers, updatedUser])
  }

  return (
    <UserContext.Provider value={{ allUsers, setAllUsers, userAddition, userDeletion, userUpdate }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
