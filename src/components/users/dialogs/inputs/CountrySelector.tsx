import { AnimatePresence, motion } from 'framer-motion'
import React, { MutableRefObject, useEffect, useState } from 'react'
import { allCountries, IAllCountries } from './countries'

export const CountrySelector = React.forwardRef<
  HTMLDivElement,
  {
    id: string
    open: boolean
    onToggle: () => void
    onChange: (value: any) => void
    selectedValue: IAllCountries
  }
>((props, ref) => {
  useEffect(() => {
    const mutableRef = ref as MutableRefObject<HTMLDivElement | null>

    const handleClickOutside = (event: any) => {
      if (mutableRef.current && !mutableRef.current.contains(event.target) && props.open) {
        props.onToggle()
        setQuery('')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [props, ref])

  const [query, setQuery] = useState('')

  return (
    <div ref={ref} className='relative'>
      <button
        type='button'
        className='relative w-full cursor-default rounded bg-black-100 py-2 pl-3 pr-10 text-left shadow-sm focus:border-gold-50 focus:outline-none focus:ring-1 focus:ring-gold-50 '
        aria-haspopup='listbox'
        aria-expanded='true'
        aria-labelledby='listbox-label'
        onClick={props.onToggle}>
        <span className='flex items-center truncate'>
          <img
            alt={`${props.selectedValue.value}`}
            src={`/flags/${props.selectedValue.value}.svg`}
            className={'mr-2 inline h-4 rounded-sm'}
          />
          {props.selectedValue.title}
        </span>
        <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
          <svg
            className='h-5 w-5 text-gray-400'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'>
            <path
              fillRule='evenodd'
              d='M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </span>
      </button>

      <AnimatePresence>
        {props.open && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className='absolute z-10 mt-0.5 max-h-80 w-full rounded-md bg-black-100 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
            tabIndex={-1}
            role='listbox'
            aria-labelledby='listbox-label'
            aria-activedescendant='listbox-option-3'>
            <div className='sticky top-0 z-10 bg-black-100'>
              <li className='relative cursor-default select-none py-1 px-1 text-black-50'>
                <input
                  type='search'
                  name='search'
                  autoComplete={'off'}
                  className='relative w-full cursor-default rounded border-none bg-black-100 py-1 pl-3 text-left focus:outline-none  focus:ring-gold-50'
                  placeholder={'Search'}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </li>
              <hr className='bg-black-50' />
            </div>

            <div className={'max-h-64 overflow-y-scroll'}>
              {allCountries.filter((country) =>
                country.title.toLowerCase().startsWith(query.toLowerCase())
              ).length === 0 ? (
                <li className='relative cursor-default select-none py-2 pl-3 italic text-grey-200'>
                  None found
                </li>
              ) : (
                allCountries
                  .filter((country) => country.title.toLowerCase().startsWith(query.toLowerCase()))
                  .map((value, index) => {
                    return (
                      <li
                        key={`${props.id}-${index}`}
                        className='relative flex cursor-default select-none items-center py-2 pl-2 text-white-50 transition hover:bg-grey-900'
                        id='listbox-option-0'
                        role='option'
                        onClick={() => {
                          props.onChange(value.value)
                          setQuery('')
                          props.onToggle()
                        }}>
                        <img
                          alt={`${value.value}`}
                          src={`/flags/${value.value}.svg`}
                          className={'mr-2 inline h-4 rounded-sm'}
                        />

                        <span className='truncate font-normal'>{value.title}</span>
                        {value.value === props.selectedValue.value ? (
                          <span className='absolute inset-y-0 right-0 flex items-center pr-8 text-blue-600'>
                            <svg
                              className='h-5 w-5'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 20 20'
                              fill='currentColor'
                              aria-hidden='true'>
                              <path
                                fillRule='evenodd'
                                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                clipRule='evenodd'
                              />
                            </svg>
                          </span>
                        ) : null}
                      </li>
                    )
                  })
              )}
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
})
