import { createRef, SetStateAction, useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { v4 as uuidv4 } from 'uuid'
import { useUser } from '../../../../hooks'
import { AddUserDialogStateAtom } from '../../../../recoil-state'
import {
  REGEX_City,
  REGEX_Street,
  REGEX_Username,
  regexEmailValidation,
  trpc
} from '../../../../utils'
import { allCountries, IAllCountries } from '../inputs/countries'
import { CountrySelector } from '../inputs/CountrySelector'
import { SubmitButton } from '../submission'

export default function AddUserContent() {
  const { userAddition } = useUser()

  const [loading, setLoading] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
  const setAddUserDialogState = useSetRecoilState(AddUserDialogStateAtom)

  // const client = new QueryClient()

  // firstname input state
  const [firstname, setFirstname] = useState('')
  const [firstnameHelperText, setFirstnameHelperText] = useState<string>('')

  // lastname input state
  const [lastname, setLastname] = useState('')
  const [lastnameHelperText, setLastnameHelperText] = useState<string>('')

  // email  input state
  const [email, setEmail] = useState('')
  const [emailHelperText, setEmailHelperText] = useState<string>('')

  // street input state
  const [street, setStreet] = useState('')
  const [streetHelperText, setStreetHelperText] = useState<string>('')

  // city input state
  const [city, setCity] = useState('')
  const [cityHelperText, setCityHelperText] = useState<string>('')

  // country input state
  const [country, setCountry] = useState('LT')
  const [countryHelperText, setCountryHelperText] = useState<string>('')

  // email address validation state
  const [emailValidation, setEmailValidation] = useState<boolean>(false)

  // completed form validation state
  const [formValidation, setFormValidation] = useState<boolean>(false)

  // handle form validation state
  useEffect(() => {
    const validFirstname: boolean = firstname !== '' && REGEX_Username.test(firstname)
    const validLastname: boolean = lastname !== '' && REGEX_Username.test(lastname)
    const validEmail: boolean = regexEmailValidation.test(email.toLowerCase())
    const validStreet: boolean = street !== '' && REGEX_Street.test(street)
    const validCity: boolean = city !== '' && REGEX_City.test(city)

    // validate country against api

    if (validFirstname && validLastname && validEmail && validStreet && validCity) {
      return () => {
        setFormValidation(true)
      }
    }
  }, [emailValidation, email, firstname, lastname, street, city, country])

  // handle setting and updating error message and state
  // useEffect(() => {
  //   return () => {
  //     // reset alert when either the firstname, lastname or password state changes
  //     setFirstnameHelperText('')
  //     setLastnameHelperText('')
  //     setEmailHelperText('')
  //     setStreetHelperText('')
  //     setCityHelperText('')
  //     setCountryHelperText('')
  //     setFormValidation(false)
  //   }
  // }, [email])

  // handle email address input validation
  useEffect(() => {
    const validateEmail = regexEmailValidation.test(email.toLowerCase())
    setEmailValidation(!validateEmail)
  }, [email])

  // const handleAddEmpl = (event: any) => {
  //   event.preventDefault()

  // alert user if email address input is empty
  // if (!email) {
  //   return setEmailHelperText('Please enter an email')
  // }
  const addUser = trpc.useMutation('user.add')

  const handleAddUser = async (event: any) => {
    event.preventDefault()
    setLoading(true)

    if (!firstname) {
      // alert user if firstname input is empty
      return setFirstnameHelperText('Please enter a first name')
    }
    const validFirstname: boolean = firstname !== '' && REGEX_Username.test(firstname)
    if (!validFirstname) {
      return setFirstnameHelperText('Please enter a valid first name')
    } else {
      setFirstnameHelperText('')
    }

    // alert user if lastname input is empty
    if (!lastname) {
      return setLastnameHelperText('Please enter a last name')
    }
    const validLastname: boolean = lastname !== '' && REGEX_Username.test(firstname)
    if (!validLastname) {
      return setFirstnameHelperText('Please enter a valid last name')
    } else {
      setLastnameHelperText('')
    }

    // alert user if email input is empty
    if (!email) {
      return setEmailHelperText('Please enter an email address')
    }
    const validEmail: boolean = regexEmailValidation.test(email.toLowerCase())
    if (!validEmail) {
      return setEmailHelperText('Please enter a valid email address')
    } else {
      setEmailHelperText('')
    }

    // alert user if street input is empty
    if (!street) {
      return setStreetHelperText('Please enter a street address')
    }
    const validStreet: boolean = street !== '' && REGEX_Street.test(street)
    if (!validStreet) {
      return setStreetHelperText('Please enter a valid street address')
    } else {
      setStreetHelperText('')
    }

    // alert user if city input is empty
    if (!city) {
      return setCityHelperText('Please enter a city')
    }
    const validCity: boolean = city !== '' && REGEX_City.test(city)
    if (!validCity) {
      return setCityHelperText('Please enter a valid city')
    } else {
      setCityHelperText('')
    }

    const userId: string = uuidv4()
    const newUser = {
      userId,
      firstname,
      lastname,
      email,
      street,
      city,
      country
    }

    try {
      addUser.mutate(newUser, {
        onSuccess: () => {
          setSuccess(true)
          setLoading(false)
          userAddition(newUser)
        }
      })

      // update user list
      // notify user has been added
      // close dialog if positive response from server

      setTimeout(function () {
        setAddUserDialogState(false)
      }, 1000)
      // open error alert if there is a caught error
    } catch (error) {
      console.log(error)
      setSuccess(false)
      setLoading(false)
    }
  }

  const myRef = createRef<HTMLDivElement>()

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='mx-1 grid grid-cols-2 gap-x-5 gap-y-4 p-6'>
      <div className='col-span-1 col-start-1 row-start-1'>
        <label className='block'>
          <span className='mt-2 mb-2 ml-3 block text-left'>First name</span>
          <input
            id='firstname'
            placeholder='First name'
            value={firstname}
            onChange={(event: { target: { value: SetStateAction<string> } }) => {
              setFirstname(event.target.value)
            }}
            className='peer relative w-full cursor-default rounded bg-black-100 py-2 pl-3 shadow-sm focus:border-gold-50 focus:outline-none focus:ring-1 focus:ring-gold-50'
          />
          {firstnameHelperText !== '' && (
            <p className='mt-1 ml-3 text-left text-sm italic text-red-500'>{firstnameHelperText}</p>
          )}
        </label>
      </div>

      <div className='col-span-1 col-start-2 row-start-1'>
        <label className='block'>
          <span className='mt-2 mb-2 ml-3 block text-left'>Last name</span>
          <input
            id='lastname'
            placeholder='Last name'
            value={lastname}
            onChange={(event: { target: { value: SetStateAction<string> } }) => {
              setLastname(event.target.value)
            }}
            className='peer relative w-full cursor-default rounded bg-black-100 py-2 pl-3 shadow-sm focus:border-gold-50 focus:outline-none focus:ring-1 focus:ring-gold-50'
          />
          {lastnameHelperText !== '' && (
            <p className='mt-1 ml-3 text-left text-sm italic text-red-500'>{lastnameHelperText}</p>
          )}
        </label>
      </div>

      <div className='col-span-2 col-start-1 row-start-2 w-80'>
        <label className='block'>
          <span className='mt-2 mb-2 ml-3 block text-left'>Email</span>
          <input
            id='email'
            placeholder='Email Address'
            value={email}
            onChange={(event: { target: { value: SetStateAction<string> } }) => {
              setEmail(event.target.value)
            }}
            className='relative w-full cursor-default rounded bg-black-100 py-2 pl-3 shadow-sm focus:border-gold-50 focus:outline-none focus:ring-1 focus:ring-gold-50'
          />
          {emailHelperText !== '' && (
            <p className='mt-1 ml-3 text-left text-sm italic text-red-500'>{emailHelperText}</p>
          )}
        </label>
      </div>

      <div className='col-span-2 col-start-1 row-start-3 w-80'>
        <label className='block'>
          <span className='mt-2 mb-2 ml-3 block text-left'>Street</span>
          <input
            id='street'
            placeholder='Street'
            value={street}
            onChange={(event: { target: { value: SetStateAction<string> } }) => {
              setStreet(event.target.value)
            }}
            className='relative w-full cursor-default rounded bg-black-100 py-2 pl-3 shadow-sm focus:border-gold-50 focus:outline-none focus:ring-1 focus:ring-gold-50'
          />
          {streetHelperText !== '' && (
            <p className='mt-1 ml-3 text-left text-sm italic text-red-500'>{streetHelperText}</p>
          )}
        </label>
      </div>

      <div className='col-span-1 col-start-1 row-start-4'>
        <label className='block'>
          <span className='mt-2 mb-2 ml-3 block text-left'>City</span>
          <input
            id='city'
            placeholder='City'
            value={city}
            onChange={(event: { target: { value: SetStateAction<string> } }) => {
              setCity(event.target.value)
            }}
            className='relative w-full cursor-default rounded bg-black-100 py-2 pl-3 shadow-sm focus:border-gold-50 focus:outline-none focus:ring-1 focus:ring-gold-50'
          />
          {cityHelperText !== '' && (
            <p className='mt-1 ml-3 text-left text-sm italic text-red-500'>{cityHelperText}</p>
          )}
        </label>
      </div>

      <div className='col-span-1 col-start-2 row-start-4'>
        <label className='block'>
          <span className='mt-2 mb-2 ml-3 block text-left'>Country</span>
          <CountrySelector
            id={'countries'}
            ref={myRef}
            open={isOpen}
            onToggle={() => setIsOpen(!isOpen)}
            onChange={(val) => setCountry(val)}
            selectedValue={allCountries.find((option) => option.value === country) as IAllCountries}
          />
        </label>
      </div>
      <div className='row-start-11 col-start-2 text-center'>
        <SubmitButton
          submitting={loading}
          successful={success}
          onClick={handleAddUser}
          btnText='Add User'
        />
        {addUser.error && <p>Something went wrong! {addUser.error.message}</p>}
      </div>
    </div>
  )
}
