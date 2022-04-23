import { useSetRecoilState } from 'recoil'
import { EditUserDialogStateAtom, userIdSelectedAtom } from '../../../recoil-state'
import { SettingsIcon } from '../../icons'

interface IEditUserButton {
  userId: string
}

export default function EditUserButton({ userId }: IEditUserButton) {
  const setEditUserDialogState = useSetRecoilState(EditUserDialogStateAtom)
  const setUserIdSelected = useSetRecoilState(userIdSelectedAtom)

  return (
    <div className='w-12 place-self-center'>
      <button
        onClick={() => {
          setEditUserDialogState(true)
          setUserIdSelected(userId)
        }}
        aria-label='Edit User'
        className=' text-blue-500 transition duration-300 ease-in-out hover:text-blue-400  focus:text-blue-400 focus:outline-none  active:text-blue-400'>
        <SettingsIcon />
      </button>
    </div>
  )
}
