import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'
import { Navigate, Outlet } from "react-router-dom"

const PrivateRoutes: React.FC = () => {
    const { auth } = useContext(LoginContext)

    if(!auth) {
        return <Navigate to='/login' />
    }

    return <Outlet />
}

export default PrivateRoutes