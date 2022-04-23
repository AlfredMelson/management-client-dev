import { LayoutGroup, motion } from 'framer-motion'
import { useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { alphabeticalSortAtom, filteredUserStateSelector } from '../../../recoil-state'
import { usersCardFooter } from '../../../style'
import { ISortData } from '../../../types/User'
import { ABCIcon, CBAIcon } from '../../icons'

export default function Collocation() {
  const setAlphabeticalSort = useSetRecoilState(alphabeticalSortAtom)

  const filteredUserState = useRecoilValue(filteredUserStateSelector)

  const [selected, setSelected] = useState<number>(0)

  const sortData: ISortData[] = [
    { index: 0, value: 'alphabetical', label: 'Sort alphabetical', icon: <ABCIcon /> },
    { index: 1, value: 'reverse', label: 'Reverse sort', icon: <CBAIcon /> }
  ]

  return (
    <motion.div
      variants={usersCardFooter}
      layout
      className='col-span-1 col-start-1 place-content-center'>
      {filteredUserState && filteredUserState.length >= 2 && (
        <LayoutGroup>
          <div className='grid grid-cols-[_60px_60px] '>
            {sortData.map((option) => (
              <li
                key={option.index}
                onClick={() => {
                  setSelected(option.index)
                  setAlphabeticalSort(option.value)
                }}
                aria-label='Alphabetical Sort'
                className='text-md relative cursor-pointer list-none font-medium'>
                <span
                  className='absolute left-0 right-0 top-0 z-10'
                  style={{ color: selected === option.index ? ' #fff' : '#1f6feb' }}>
                  {option.icon}
                </span>
              </li>
            ))}
          </div>
        </LayoutGroup>
      )}
    </motion.div>
  )
}
