import { motion } from 'framer-motion'
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'
import {
  searchFieldStateAtom,
  searchPreferenceStateAtom,
  SearchUserDialogStateAtom
} from '../../../recoil-state'
import CloseIcon from '../../icons/CloseIcon'
import { searchOptions } from './SearchSelectors'

export default function SearchInput() {
  const setSearchFieldState = useSetRecoilState(searchFieldStateAtom)

  const searchPreferenceState = useRecoilValue(searchPreferenceStateAtom)

  const handleChange = (e: any) => {
    setSearchFieldState(e.target.value)
  }

  const setSearchUserDialogState = useSetRecoilState(SearchUserDialogStateAtom)

  const resetSearchFieldState = useResetRecoilState(searchFieldStateAtom)

  const handleSearchClose = (_e: any) => {
    resetSearchFieldState(), setSearchUserDialogState(false)
  }

  return (
    <div className='grid h-8 w-full grid-cols-[_auto_80px] justify-items-start '>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.5, duration: 0.5, ease: [0.6, 0.66, 0.04, 1] }
        }}
        exit={{ opacity: 0, transition: { delay: 0.5, duration: 0.5, ease: [0.6, 0.66, 0.04, 1] } }}
        className='col-span-1 col-start-1 w-full self-center pl-6'>
        <input
          type='search'
          className='w-full rounded border-transparent bg-black-50 transition duration-300 ease-in-out focus:border-gold-50 focus:bg-black-50 focus:ring-0'
          placeholder={`Search by ${searchOptions[searchPreferenceState - 1].label} ...`}
          onChange={handleChange}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.5, duration: 0.5, ease: [0.6, 0.66, 0.04, 1] }
        }}
        exit={{ opacity: 0, transition: { delay: 0.5, duration: 0.5, ease: [0.6, 0.66, 0.04, 1] } }}
        className='col-span-1 col-start-2 place-self-center'>
        <button
          onClick={handleSearchClose}
          aria-label='Close Search Area'
          className='text-blue-500 transition duration-300 ease-in-out hover:text-blue-400 focus:text-blue-400 focus:outline-none active:text-blue-400'>
          <CloseIcon />
        </button>
      </motion.div>
    </div>
  )
}
