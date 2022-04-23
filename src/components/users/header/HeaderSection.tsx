import { motion } from 'framer-motion'
import { useRecoilValue } from 'recoil'
import {
  AddUserDialogStateAtom,
  DeleteUserDialogStateAtom,
  EditUserDialogStateAtom,
  SearchUserDialogStateAtom
} from '../../../recoil-state'
import AddUserButton from './AddUserButton'
import AppName from './AppName'
import HeaderLogo from './HeaderLogo'
import SearchUsers from './SearchUsers'

export default function HeaderSection() {
  const addUserDialogState = useRecoilValue(AddUserDialogStateAtom)
  const editUserDialogState = useRecoilValue(EditUserDialogStateAtom)
  const deleteUserDialogState = useRecoilValue(DeleteUserDialogStateAtom)
  const searchUserDialogState = useRecoilValue(SearchUserDialogStateAtom)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.3, duration: 0.3 }}
      className='mt-6 mb-3 grid w-full grid-cols-[_30px_auto_40px_30px] px-4'>
      <HeaderLogo />
      <AppName />
      {!addUserDialogState &&
        !editUserDialogState &&
        !deleteUserDialogState &&
        !searchUserDialogState && <AddUserButton />}
      {!addUserDialogState &&
        !editUserDialogState &&
        !deleteUserDialogState &&
        !searchUserDialogState && <SearchUsers />}
    </motion.div>
  )
}
