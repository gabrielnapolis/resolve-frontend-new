import { create } from 'zustand'
import type { View } from '../types'

export type DashboardState = {
    currentView: View
}

type DashboardAction = {
    setCurrentView: (payload: View) => void
}

const initialState: DashboardState = {
    currentView: 'panel',
}

export const useDashboardStore = create<DashboardState & DashboardAction>(
    (set) => ({
        ...initialState,
        setCurrentView: (payload) => set(() => ({ currentView: payload })),
    }),
)
