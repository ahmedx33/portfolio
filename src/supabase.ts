import { createClient } from "@supabase/supabase-js";

const project_url = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL!
const anon_key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(project_url, anon_key);

export default supabase
