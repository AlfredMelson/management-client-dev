import { useRecoilValue } from 'recoil'
import {
  AddUserDialogStateAtom,
  EditUserDialogStateAtom,
  SearchUserDialogStateAtom
} from '../../../recoil-state'
import { SearchSection } from '../search'
import Tagline from './Tagline'

export default function TaglineSection() {
  const searchUserDialogState = useRecoilValue(SearchUserDialogStateAtom)
  const addUserDialogState = useRecoilValue(AddUserDialogStateAtom)
  const editUserDialogState = useRecoilValue(EditUserDialogStateAtom)

  return (
    <>
      {!addUserDialogState && !editUserDialogState && (
        <div className='grid h-36 grid-cols-1 grid-rows-1 content-center'>
          {searchUserDialogState ? <SearchSection /> : <Tagline />}
        </div>
      )}
    </>
  )
}
