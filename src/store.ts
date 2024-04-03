import { create } from "zustand"
import { Project } from "./utils/types"


interface UseProjectsInterface {
    projects: Project[]
    setProjects: (projects: Project[]) => void
    isLoading: boolean
}

const useProjects = create<UseProjectsInterface>((set) => ({
    projects: [],
    setProjects: (projects) => set((state) => ({ ...state, projects, isLoading: false })),
    isLoading: true
}))

interface UseStatsInterface {
    github: number | null
    codewars: number | null
    isLoading: boolean
    setStats: (stats: { github: number, codewars: number }) => void
}

const useStats = create<UseStatsInterface>((set) => ({
    github: null,
    codewars: null,
    isLoading: true,
    setStats: (stats) => set(() => ({ ...stats, isLoading: false })),
}))

export {
    useProjects,
    useStats,
}
