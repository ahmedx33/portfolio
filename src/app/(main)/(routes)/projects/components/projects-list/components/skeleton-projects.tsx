import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Code, Eye } from "lucide-react"

export default function SkeletonProjects() {
    return Array(4).fill(0).map((_, index) => <SkeletonPost key={index} />)
}

export function SkeletonPost() {
    return <Card className="w-96 h-[26rem] overflow-hidden shadow-xl pb-3">
        <Skeleton className="w-full h-44" />
        <div className="pt-2 px-4">
            <Skeleton className="w-[80%] h-5 mb-2" />
            <Skeleton className="w-[60%] h-12 mb-2" />
            <div className="flex gap-1 flex-wrap mb-3">
                <Skeleton className="w-24 h-6" />
                <Skeleton className="w-28 h-6" />
                <Skeleton className="w-20 h-6" />
                <Skeleton className="w-32 h-6" />
                <Skeleton className="w-24 h-6" />
                <Skeleton className="w-28 h-6" />
                <Skeleton className="w-20 h-6" />
                <Skeleton className="w-32 h-6" />
            </div>
            <div className="flex gap-1">
                <Button disabled className="flex-1" asChild>
                    <a target="_blank">
                        <Eye className="mr-1.5" />
                        View</a>
                </Button>
                <Button disabled className="flex-1" asChild>
                    <a target="_blank">
                        <Code className="mr-1.5" />
                        Code</a>
                </Button>
            </div>
        </div>
    </Card>
}
