import { useContext } from 'react'
import { LoginContext } from '@/context/LoginContext'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateLogin: React.FC = () => {
  const { auth } = useContext(LoginContext)

  if (auth && localStorage.getItem('accessToken')) {
    return <Navigate to="/" />
  }

  return <Outlet />
}

export default PrivateLogin
