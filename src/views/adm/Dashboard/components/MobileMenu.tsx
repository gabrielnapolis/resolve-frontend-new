import { useRef } from 'react'
import ToggleDrawer from '@/components/shared/ToggleDrawer'
import TabMenu from './TabMenu'
import type { ToggleDrawerRef } from '@/components/shared/ToggleDrawer'

const MobileMenu = () => {
    const drawerRef = useRef<ToggleDrawerRef>(null)

    return (
        <>
            <div>
                <ToggleDrawer ref={drawerRef} title="Navigation">
                    <TabMenu
                        onChange={() => {
                            drawerRef.current?.handleCloseDrawer()
                        }}
                    />
                </ToggleDrawer>
            </div>
        </>
    )
}

export default MobileMenu
