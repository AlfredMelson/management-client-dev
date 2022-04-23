import { useSetRecoilState } from 'recoil'
import { AddUserDialogStateAtom } from '../../../recoil-state'
import { AddUserIcon } from '../../icons'

export default function AddUserButton() {
  const setAddUserDialogState = useSetRecoilState(AddUserDialogStateAtom)
  return (
    <button
      onClick={() => {
        setAddUserDialogState(true)
      }}
      aria-label='Add New User'
      className='col-span-1 place-content-center text-blue-500 transition duration-300 ease-in-out  hover:text-blue-400 focus:text-blue-400 focus:outline-none active:text-blue-400'>
      <AddUserIcon />
    </button>
  )
}
