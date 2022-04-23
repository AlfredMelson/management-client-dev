import { motion } from 'framer-motion'
import { Suspense } from 'react'
import { UsersCard } from '../components'
import UserSkeleton from '../components/users/skeleton/UserSkeleton'

const Users = () => {
  return (
    <Suspense fallback={<UserSkeleton />}>
      <motion.div
        initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.6, 0.66, 0.04, 1] } }}
        exit={{ opacity: 0, y: '100%', transition: { duration: 0.3, ease: [0.6, 0.66, 0.04, 1] } }}
        className='card-min-width xs:w-full xs:mx-2 mx-auto mt-14 grid grid-cols-1 rounded bg-grey-800 px-4 text-center shadow-lg'>
        <UsersCard />
      </motion.div>
    </Suspense>
  )
}

export default Users
