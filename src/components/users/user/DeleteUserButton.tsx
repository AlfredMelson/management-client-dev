import { useResetRecoilState, useSetRecoilState } from 'recoil'
import {
  DeleteUserDialogStateAtom,
  searchFieldStateAtom,
  SearchUserDialogStateAtom,
  userIdSelectedAtom
} from '../../../recoil-state'
import { DeleteUserIcon } from '../../icons'

interface IDeleteUserButton {
  userId: string
}

export default function DeleteUserButton({ userId }: IDeleteUserButton) {
  const setDeleteUserDialogState = useSetRecoilState(DeleteUserDialogStateAtom)
  const setUserIdSelected = useSetRecoilState(userIdSelectedAtom)
  const setSearchUserDialogState = useSetRecoilState(SearchUserDialogStateAtom)
  const resetSearchFieldState = useResetRecoilState(searchFieldStateAtom)

  return (
    <div className='w-12 place-self-end'>
      <button
        onClick={() => {
          setUserIdSelected(userId)
          setDeleteUserDialogState(true)
          setSearchUserDialogState(false)
          resetSearchFieldState()
        }}
        aria-label='Delete User'
        className=' text-blue-500 transition duration-300 ease-in-out hover:text-blue-400  focus:text-blue-400 focus:outline-none  active:text-blue-400'>
        <DeleteUserIcon />
      </button>
    </div>
  )
}
