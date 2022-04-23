import { AnimatePresence } from 'framer-motion'
import { Suspense, useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { useUser } from '../../hooks'
import {
  AddUserDialogStateAtom,
  DeleteUserDialogStateAtom,
  EditUserDialogStateAtom
} from '../../recoil-state'
import { trpc } from '../../utils'
import { PanelControls } from './controls'
import { DeleteUserDialog } from './dialogs'
import { HeaderSection } from './header'
import { UserSkeleton } from './skeleton'
import { DialogReplacement, TaglineSection } from './tagline'
import { User } from './user'

const UsersCard = () => {
  // set allUsers initial state
  const { setAllUsers } = useUser()

  // query users from server database
  const response = trpc.useQuery(['user.getAll'])

  // loading state used in simulating data loading
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    if (response.data) {
      setAllUsers(response.data)
    }
    // timeout to simulate loading
    setTimeout(function () {
      setIsLoading(false)
    }, 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ui updates based on state of dialogs
  const addUserDialogState = useRecoilValue(AddUserDialogStateAtom)
  const editUserDialogState = useRecoilValue(EditUserDialogStateAtom)
  const deleteUserDialogState = useRecoilValue(DeleteUserDialogStateAtom)

  return (
    <Suspense fallback={<UserSkeleton />}>
      <HeaderSection />
      <AnimatePresence>
        {!addUserDialogState && !editUserDialogState ? (
          <>
            <TaglineSection />
            {isLoading ? (
              <>
                <UserSkeleton />
                <div className='my-2 w-full' />
              </>
            ) : (
              <User />
            )}
            {!isLoading && (deleteUserDialogState ? <DeleteUserDialog /> : <PanelControls />)}
          </>
        ) : (
          <DialogReplacement />
        )}
      </AnimatePresence>
    </Suspense>
  )
}
export default UsersCard
