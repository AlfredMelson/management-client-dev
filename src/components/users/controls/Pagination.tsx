import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { filteredUserStateSelector, paginatedUserListAtom } from '../../../recoil-state'
import { usersCardFooter } from '../../../style'
import { Paginate } from '../../../utils'
import { ChevronLeftIcon, ChevronRightIcon } from '../../icons'

export default function Pagination() {
  const [page, setPage] = useState<number>(1)
  const [numPages, setNumPages] = useState<number>(1)

  const filteredUserState = useRecoilValue(filteredUserStateSelector)

  const setPaginatedUserList = useSetRecoilState(paginatedUserListAtom)

  useEffect(() => {
    // check filteredUserState contains a value
    if (filteredUserState === undefined || null) {
      return
    }
    const count = filteredUserState.length

    const pageObj = {
      totalUsers: count,
      selectedPage: page
    }

    const paginateRes = Paginate(pageObj)

    const userIDs = filteredUserState?.slice(
      paginateRes.beginningIndex,
      paginateRes.endingIndex + 1
    )
    setPaginatedUserList(userIDs)

    setNumPages(paginateRes.totalPages)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, filteredUserState])

  return (
    <motion.div variants={usersCardFooter} layout className='col-span-1 col-start-2'>
      {numPages > 1 && (
        <div className='flex items-center justify-between pt-2'>
          <div className='flex flex-1 justify-between sm:hidden'>
            <button className=' inline-flex items-center px-4 text-sm font-medium text-blue-500 transition duration-300 ease-in-out hover:text-blue-400  focus:text-blue-400 focus:outline-none active:text-blue-400 '>
              Previous
            </button>
            <button className=' ml-3 inline-flex items-center px-4 text-sm font-medium text-blue-500 transition duration-300 ease-in-out hover:text-blue-400  focus:text-blue-400 focus:outline-none active:text-blue-400'>
              Next
            </button>
          </div>
          <div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-around'>
            <div>
              <nav className='z-0 inline-flex -space-x-px shadow-sm' aria-label='Pagination'>
                {page !== 1 ? (
                  <button
                    onClick={() => setPage(page - 1)}
                    className=' inline-flex items-center rounded-l-md px-2 text-sm font-medium text-blue-500 transition duration-300 ease-in-out hover:text-blue-400  focus:text-blue-400 focus:outline-none active:text-blue-400 '>
                    <span className='sr-only'>Previous</span>
                    <ChevronLeftIcon
                      className='h-5 w-5 text-blue-500 transition duration-300 ease-in-out hover:text-blue-400 focus:text-blue-400 focus:outline-none active:text-blue-400'
                      aria-hidden='true'
                    />
                  </button>
                ) : (
                  <button className=' inline-flex items-center rounded-l-md px-2 text-sm font-medium text-grey-800'>
                    <span className='sr-only'>Previous</span>
                    <ChevronLeftIcon className='h-5 w-5 text-grey-800' aria-hidden='true' />
                  </button>
                )}

                {numPages < 5 &&
                  Array.from(Array(numPages), (x, i) => i + 1).map((pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => setPage(pageNum)}
                      aria-current='page'
                      className='-indigo-500  z-10 inline-flex items-center px-4 text-sm font-medium text-blue-500 transition duration-300 ease-in-out hover:text-blue-400 focus:text-blue-400 focus:outline-none active:text-blue-400'>
                      {page === pageNum ? (
                        <span className='text-white-50'> {pageNum} </span>
                      ) : (
                        pageNum
                      )}
                    </button>
                  ))}

                {page !== numPages ? (
                  <button
                    onClick={() => setPage(page + 1)}
                    className=' inline-flex items-center rounded-r-md px-2 text-sm font-medium text-blue-500 transition duration-300 ease-in-out hover:text-blue-400  focus:text-blue-400 focus:outline-none active:text-blue-400 '>
                    <span className='sr-only'>Next</span>
                    <ChevronRightIcon
                      className='relative h-5 w-5 text-blue-500 transition duration-300 ease-in-out hover:text-blue-400 focus:text-blue-400 focus:outline-none active:text-blue-400'
                      aria-hidden='true'
                    />
                  </button>
                ) : (
                  <button className='inline-flex items-center rounded-l-md px-2 text-sm font-medium text-grey-800'>
                    <span className='sr-only'>Previous</span>
                    <ChevronRightIcon
                      className='relative h-5 w-5 text-grey-800'
                      aria-hidden='true'
                    />
                  </button>
                )}
              </nav>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  )
}
