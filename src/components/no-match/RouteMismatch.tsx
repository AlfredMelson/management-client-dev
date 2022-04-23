import { Navigate, useLocation } from 'react-router-dom'

const RouteMismatch = () => {
  const location = useLocation()
  // push user back to login page
  return <Navigate to='/' state={{ from: location }} replace />
}

export default RouteMismatch
