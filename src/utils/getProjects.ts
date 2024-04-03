import supabase from "@/supabase"
import { Project } from "./types"


export default async function getProjects() {
    try {
        const { data } = await supabase.from('projects').select('*')

        return data
    } catch (error) {
        throw error
    }
}
