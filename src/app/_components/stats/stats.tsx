"use client"
import { Code } from "lucide-react";
import Stat from "./components/stat";
import { useStats } from "@/store";

export default function Stats() {
    const { setStats: _, isLoading: __, ...stats } = useStats(store => store)
    return <div className="mt-5 flex gap-2.5">
        {stats && <>
            {Object.keys(stats).map(key => <Stat key={key} name={key} value={stats[key as keyof typeof stats] as number} img={<Code size={40} />} />)}
        </>}
    </div>
}
