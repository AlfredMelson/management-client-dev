import { motion } from 'framer-motion'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { useUser } from '../../../hooks'
import { EditUserDialogStateAtom, userIdSelectedAtom } from '../../../recoil-state'
import { EditUserContent } from './content'
import { DialogHeader } from './header'

export default function EditUserDialog() {
  const setEditUserDialogState = useSetRecoilState(EditUserDialogStateAtom)
  const { allUsers } = useUser()
  const userIdSelected = useRecoilValue(userIdSelectedAtom)

  const userData = allUsers.filter((user) => user.userId === userIdSelected)

  const closeDialog = (event: any) => {
    if (event.keyCode === 27 || event.currentTarget === event.target) {
      setEditUserDialogState(false)
    }
  }

  window.addEventListener('keydown', (event) => closeDialog(event))

  return (
    <motion.div
      layout
      initial={{ y: -16 }}
      animate={{ y: 0, transition: { duration: 0.4, ease: [0.6, 0.66, 0.04, 1] } }}
      exit={{ y: -16, transition: { duration: 0.3, ease: [0.6, 0.66, 0.04, 1] } }}
      className='mb-4 mt-2 grid grid-cols-1 place-content-between gap-2 rounded-sm bg-grey-700 shadow-lg outline-none focus:outline-none'
      onClick={(event) => closeDialog(event)}>
      <DialogHeader
        title={`Edit ${userData[0].firstname} ${userData[0].lastname}`}
        onClick={() => setEditUserDialogState(false)}
      />
      <EditUserContent />
    </motion.div>
  )
}
