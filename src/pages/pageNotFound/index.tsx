import { useContext } from 'react'
import { LoginContext } from '@/context/LoginContext'
import { Navigate } from 'react-router-dom'

const PageNotFound: React.FC = () => {
  const { auth } = useContext(LoginContext)

  if (auth && localStorage.getItem('accessToken')) {
    return <Navigate to="/" />
  } else {
    return <Navigate to="/auth/login" />
  }
}

export default PageNotFound
