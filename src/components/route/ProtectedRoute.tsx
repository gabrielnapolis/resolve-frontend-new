import appConfig from '@/configs/app.config'
import { REDIRECT_URL_KEY } from '@/constants/app.constant'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '@/auth'

const { unAuthenticatedEntryPath } = appConfig

const ProtectedRoute = () => {
    const { authenticated } = useAuth()

    if (!authenticated) {
        return (
            <Navigate
                replace
                to={unAuthenticatedEntryPath}
            />
        )
    }

    return <Outlet />
}

export default ProtectedRoute
