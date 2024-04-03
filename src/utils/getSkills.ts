import supabase from "@/supabase"
import { Skill } from "./types"


export default async function getSkills(): Promise<Skill[]> {
    try {
        const { data } = await supabase.from('skills').select('*')
        return data
    } catch (error) {
        throw error
    }
}
