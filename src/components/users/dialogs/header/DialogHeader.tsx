import { motion } from 'framer-motion'
import CloseIcon from '../../../icons/CloseIcon'

interface IDialogHeader {
  title: string
  onClick?: any
}

export default function DialogHeader({ title, onClick }: IDialogHeader) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.3, duration: 0.4, ease: [0.6, 0.66, 0.04, 1] }
      }}
      exit={{ opacity: 0, y: 16, transition: { duration: 0.3, ease: [0.6, 0.66, 0.04, 1] } }}
      className='flex items-start justify-between px-4 pt-5 pb-0'>
      <h6 className='ml-2 text-xl capitalize text-gold-50'>{title}</h6>
      <button
        onClick={onClick}
        className='background-transparent mr-4  text-blue-500 outline-none transition duration-300 ease-in-out hover:text-blue-400  focus:text-blue-400 focus:outline-none active:text-blue-400'
        type='button'>
        <CloseIcon />
      </button>
    </motion.div>
  )
}
