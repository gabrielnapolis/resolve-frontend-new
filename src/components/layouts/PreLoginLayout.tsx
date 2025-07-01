import authRoute from '@/configs/routes.config/authRoute'
import { useLocation } from 'react-router-dom'
import AuthLayout from './AuthLayout'
import PostLoginLayout from './PostLoginLayout'
import { useThemeStore } from '@/store/themeStore'
import type { CommonProps } from '@/@types/common'

const PreLoginLayout = ({ children }: CommonProps) => {
    const location = useLocation()
    const layoutType = useThemeStore((state) => state.layout.type)

    const { pathname } = location

    const isAuthPath = authRoute.some((route) => route.path === pathname)

    return (
        <div className="flex flex-auto flex-col h-[100vh]">
            {isAuthPath ? (
                <AuthLayout>{children}</AuthLayout>
            ) : (
                <PostLoginLayout layoutType={layoutType}>
                    {children}
                </PostLoginLayout>
            )}
        </div>
    )
}

export default PreLoginLayout