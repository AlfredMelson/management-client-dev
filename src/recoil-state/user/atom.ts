import { atom } from 'recoil'

/**
 * Recoil managed state representing employees list per pagination
 *
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Utilise hooks to manage state changes and notify components subscribing to re-render.
 *
 */

export const userIdSelectedAtom = atom<string>({
  key: 'userIdSelected',
  default: ''
})
// const [userIdSelected, setUserIdSelected] = useRecoilState(userIdSelectedAtom)
// const setUserIdSelected = useSetRecoilState(userIdSelectedAtom)
// const userIdSelected = useRecoilValue(userIdSelectedAtom)
// const resetUserIdSelected = useResetRecoilState(userIdSelectedAtom)
