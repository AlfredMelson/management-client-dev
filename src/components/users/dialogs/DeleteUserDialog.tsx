import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { useUser } from '../../../hooks'
import {
  DeleteUserDialogStateAtom,
  filteredUserStateSelector,
  paginatedUserListAtom,
  userIdSelectedAtom
} from '../../../recoil-state'
import { DeleteUserContent } from './content'
import { DialogHeader } from './header'

export default function DeleteUserDialog() {
  const [deleteUserDialogState, setDeleteUserDialogState] =
    useRecoilState(DeleteUserDialogStateAtom)
  const filteredUserState = useRecoilValue(filteredUserStateSelector)
  const { allUsers } = useUser()
  const userIdSelected = useRecoilValue(userIdSelectedAtom)

  const setPaginatedUserList = useSetRecoilState(paginatedUserListAtom)

  useEffect(() => {
    // check filteredUserState contains a value
    if (filteredUserState === undefined || null) {
      return
    }

    if (deleteUserDialogState) {
      const userData = filteredUserState.filter((user) => user.userId === userIdSelected)
      setPaginatedUserList(userData)
    }
  }, [deleteUserDialogState, filteredUserState, setPaginatedUserList, userIdSelected])

  const userData = allUsers.filter((user) => user.userId === userIdSelected)

  const closeDialog = (event: any) => {
    if (event.keyCode === 27 || event.currentTarget === event.target) {
      setDeleteUserDialogState(false)
    }
  }

  window.addEventListener('keydown', (event) => closeDialog(event))

  const userFirstName = userData[0].firstname
  const userLastName = userData[0].lastname
  const toBeDeletedUser = `Delete ${userFirstName} ${userLastName}`

  return (
    <motion.div
      layout
      initial={{ y: -16 }}
      animate={{ y: 0, transition: { duration: 0.4, ease: [0.6, 0.66, 0.04, 1] } }}
      exit={{ y: -16, transition: { duration: 0.3, ease: [0.6, 0.66, 0.04, 1] } }}
      className='mb-4 mt-4 grid grid-cols-1 place-content-between gap-2 rounded-sm bg-grey-700 shadow-lg outline-none focus:outline-none'
      onClick={(event) => closeDialog(event)}>
      <DialogHeader title={toBeDeletedUser} onClick={() => setDeleteUserDialogState(false)} />
      <DeleteUserContent />
    </motion.div>
  )
}
