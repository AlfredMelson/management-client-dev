import { atom } from 'recoil'

/**
 * Recoil managed state representing dialog visibility
 *
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Utilise hooks to manage state changes and notify components subscribing to re-render.
 *
 */

export const AddUserDialogStateAtom = atom<boolean>({
  key: 'addUserDialogState',
  default: false
})
// const [addUserDialogState, setAddUserDialogState] = useRecoilState(AddUserDialogStateAtom)
// const setAddUserDialogState = useSetRecoilState(AddUserDialogStateAtom)
// const addUserDialogState = useRecoilValue(AddUserDialogStateAtom)
// const resetAddUserDialogState = useResetRecoilState(AddUserDialogStateAtom)

export const SearchUserDialogStateAtom = atom<boolean>({
  key: 'searchUserDialogState',
  default: false
})
// const [searchUserDialogState, setSearchUserDialogState] = useRecoilState(SearchUserDialogStateAtom)
// const setSearchUserDialogState = useSetRecoilState(SearchUserDialogStateAtom)
// const searchUserDialogState = useRecoilValue(SearchUserDialogStateAtom)
// const resetSearchUserDialogState = useResetRecoilState(SearchUserDialogStateAtom)

export const EditUserDialogStateAtom = atom<boolean>({
  key: 'editUserDialogState',
  default: false
})
// const [editUserDialogState, setEditUserDialogState] = useRecoilState(EditUserDialogStateAtom)
// const setEditUserDialogState = useSetRecoilState(EditUserDialogStateAtom)
// const editUserDialogState = useRecoilValue(EditUserDialogStateAtom)
// const resetEditUserDialogState = useResetRecoilState(EditUserDialogStateAtom)

export const DeleteUserDialogStateAtom = atom<boolean>({
  key: 'deleteUserDialogState',
  default: false
})
// const [deleteUserDialogState, setDeleteUserDialogState] = useRecoilState(DeleteUserDialogStateAtom)
// const setDeleteUserDialogState = useSetRecoilState(DeleteUserDialogStateAtom)
// const deleteUserDialogState = useRecoilValue(DeleteUserDialogStateAtom)
// const resetDeleteUserDialogState = useResetRecoilState(DeleteUserDialogStateAtom)
