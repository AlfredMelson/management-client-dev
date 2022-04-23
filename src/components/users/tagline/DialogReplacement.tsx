import { motion } from 'framer-motion'
import { useRecoilValue } from 'recoil'
import { AddUserDialogStateAtom, EditUserDialogStateAtom } from '../../../recoil-state'
import { containerOpacityAnimation } from '../../../style'
import { AddUserDialog, EditUserDialog } from '../dialogs'

export default function DialogReplacement() {
  const addUserDialogState = useRecoilValue(AddUserDialogStateAtom)
  const editUserDialogState = useRecoilValue(EditUserDialogStateAtom)

  return (
    <motion.div
      variants={containerOpacityAnimation}
      className='grid grid-cols-1 grid-rows-1 content-center'>
      {addUserDialogState && <AddUserDialog />}
      {editUserDialogState && <EditUserDialog />}
    </motion.div>
  )
}
