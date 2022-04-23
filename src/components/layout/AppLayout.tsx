import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div className='bg-[url("/assets/bg-user-pattern.png")] bg-fixed bg-top'>
      <div className='scrollbar-track-gray-100 scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800 scrollbar scrollbar-thin flex min-h-screen w-screen flex-col'>
        <Outlet />
      </div>
    </div>
  )
}
