import { motion } from 'framer-motion'
import { useSetRecoilState } from 'recoil'
import { AddUserDialogStateAtom } from '../../../recoil-state'
import { AddUserContent } from './content'
import { DialogHeader } from './header'

export default function AddUserDialog() {
  const setAddUserDialogState = useSetRecoilState(AddUserDialogStateAtom)

  const closeDialog = (event: any) => {
    if (event.keyCode === 27 || event.currentTarget === event.target) {
      setAddUserDialogState(false)
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
      <DialogHeader title='Add New User' onClick={() => setAddUserDialogState(false)} />
      <AddUserContent />
    </motion.div>
  )
}
