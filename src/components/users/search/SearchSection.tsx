import { motion } from 'framer-motion'
import { SearchInput, SearchSelectors } from '.'

export default function SearchSection() {
  return (
    <motion.div
      layout
      initial={{ y: -16 }}
      animate={{ y: 0, transition: { duration: 0.4, ease: [0.6, 0.66, 0.04, 1] } }}
      exit={{ y: -16, transition: { duration: 0.3, ease: [0.6, 0.66, 0.04, 1] } }}
      className='search-shadow z-10 grid w-full auto-rows-auto grid-cols-1 gap-y-2 self-center rounded bg-grey-700 pt-3 pb-6'>
      <SearchSelectors />
      <SearchInput />
    </motion.div>
  )
}
