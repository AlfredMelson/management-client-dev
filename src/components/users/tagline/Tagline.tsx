import { motion } from 'framer-motion'
import { useRecoilValue } from 'recoil'
import { useUser } from '../../../hooks'
import { DeleteUserDialogStateAtom } from '../../../recoil-state'

export default function Tagline() {
  const deleteUserDialogState = useRecoilValue(DeleteUserDialogStateAtom)
  const { allUsers } = useUser()

  return (
    <>
      {!deleteUserDialogState ? (
        <motion.h6
          layout
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.6, 0.66, 0.04, 1] } }}
          exit={{ opacity: 0, y: 16, transition: { duration: 0.3, ease: [0.6, 0.66, 0.04, 1] } }}
          className='z-0 auto-rows-auto self-center pb-3 text-2xl font-semibold text-white-50'>
          Current User List
          <motion.h6
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.3, duration: 0.4, ease: [0.6, 0.66, 0.04, 1] }
            }}
            exit={{ opacity: 0, y: 16, transition: { duration: 0.3, ease: [0.6, 0.66, 0.04, 1] } }}
            className='z-0 auto-rows-auto self-center pt-1 text-sm font-normal text-white-50'>
            User Count: {allUsers.length}
          </motion.h6>
        </motion.h6>
      ) : (
        <motion.h6
          layout
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.6, 0.66, 0.04, 1] } }}
          exit={{ opacity: 0, y: 16, transition: { duration: 0.3, ease: [0.6, 0.66, 0.04, 1] } }}
          className='z-0 auto-rows-auto self-center pb-3 text-2xl font-semibold text-white-50'>
          Filtered User
        </motion.h6>
      )}
    </>
  )
}
