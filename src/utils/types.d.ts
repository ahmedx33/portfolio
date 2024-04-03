import { technologies } from "@/constants";

type technology = typeof technologies[number]

interface Project {
    id: number
    created_at: string
    completed_at: string
    name: string
    description: string
    image: string
    technologies: technology[]
    code: string
    url: string
}

interface Skill {
    id: number
    name: string
    image: string
    description: string
}
