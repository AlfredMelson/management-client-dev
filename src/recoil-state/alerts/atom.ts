import { atom } from 'recoil'

/**
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Utilise hooks to manage state changes and notify components subscribing to re-render.
 *
 */
export const updateUserAlertErrorAtom = atom<boolean>({
  key: 'UpdateUserAlertError',
  default: false
})
// const [UpdateUserAlertError, setUpdateUserAlertError] = useRecoilState(updateUserAlertErrorAtom)
// const setUpdateUserAlertError = useSetRecoilState(updateUserAlertErrorAtom)
// const UpdateUserAlertError = useRecoilValue(updateUserAlertErrorAtom)
// const resetUpdateUserAlertError = useResetRecoilState(updateUserAlertErrorAtom)

export const updateUserErrorMessageAtom = atom<string>({
  key: 'updateUserErrorMessage',
  default: ''
})
// const [updateUserErrorMessage, setUpdateUserErrorMessage] = useRecoilState(updateUserErrorMessageAtom)
// const setUpdateUserErrorMessage = useSetRecoilState(updateUserErrorMessageAtom)
// const updateUserErrorMessage = useRecoilValue(updateUserErrorMessageAtom)
// const resetUpdateUserErrorMessage = useResetRecoilState(updateUserErrorMessageAtom)

export const deleteUserAlertErrorAtom = atom<boolean>({
  key: 'deleteUserAlertError',
  default: false
})
// const [deleteUserAlertError, setDeleteUserAlertError] = useRecoilState(deleteUserAlertErrorAtom)
// const setDeleteUserAlertError = useSetRecoilState(deleteUserAlertErrorAtom)
// const deleteUserAlertError = useRecoilValue(deleteUserAlertErrorAtom)
// const resetDeleteUserAlertError = useResetRecoilState(deleteUserAlertErrorAtom)

export const deleteUserErrorMessageAtom = atom<string>({
  key: 'deleteUserErrorMessage',
  default: ''
})
// const [deleteUserErrorMessage, setDeleteUserErrorMessage] = useRecoilState(deleteUserErrorMessageAtom)
// const setDeleteUserErrorMessage = useSetRecoilState(deleteUserErrorMessageAtom)
// const deleteUserErrorMessage = useRecoilValue(deleteUserErrorMessageAtom)
// const resetDeleteUserErrorMessage = useResetRecoilState(deleteUserErrorMessageAtom)
