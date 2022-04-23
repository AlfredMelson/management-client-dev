import Collocation from './Collocation'
import Pagination from './Pagination'

export default function PanelControls() {
  return (
    <div className='my-3 grid w-full grid-cols-[_240px_auto] justify-items-center'>
      <Collocation />
      <Pagination />
    </div>
  )
}
