import { motion } from 'framer-motion'
import { DeleteUserIcon, SettingsIcon } from '../../icons'

export default function UserSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.5, ease: [0.6, 0.66, 0.04, 1] }
      }}
      exit={{ opacity: 0, transition: { delay: 0.5, duration: 0.5, ease: [0.6, 0.66, 0.04, 1] } }}
      className='grid animate-pulse grid-cols-[50px_200px_200px_30px_30px] place-content-between gap-2 rounded-sm bg-gold-50/10 py-4'>
      <div className='col-span-1 ml-4 grid h-10 w-10 grid-cols-1 place-items-center self-center rounded bg-gold-50'></div>
      <div className='col-span-1 ml-4'>
        <p className='mt-0.5 h-4 w-5/6 rounded-sm bg-gold-50 text-left'></p>
        <p className='mt-1.5 h-3 w-5/6 rounded-sm bg-gold-50 text-left'></p>
      </div>
      <div className='col-span-1 ml-4'>
        <p className='mt-1 h-3 w-5/6 rounded-sm bg-gold-50 text-left'></p>
        <p className='mt-1.5 h-3 w-5/6 rounded-sm bg-gold-50 text-left'></p>
      </div>
      <div className='col-span-1 grid grid-cols-1 place-content-center text-left'>
        <div className='w-12 place-self-center'>
          <button className='cursor-default text-gold-50'>
            <SettingsIcon />
          </button>
        </div>
      </div>
      <div className='col-span-1 mr-2 grid grid-cols-1 place-content-center'>
        <div className='w-12 place-self-end'>
          <button className='cursor-default text-gold-50'>
            <DeleteUserIcon />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
