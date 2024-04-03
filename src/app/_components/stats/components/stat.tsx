import { Card } from "@/components/ui/card"
import { ReactNode, useEffect, useState } from "react"

interface StatProps {
    name: string
    value: number
    img: ReactNode
}

export default function Stat({ name, img, value }: StatProps) {
    const [current, setCurrent] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            if (current < value) {
                setCurrent(current + 1)
            } else {
                clearInterval(interval)
            }
        }, 40)
        return () => clearInterval(interval)
    }, [current, value])
    return <Card className="w-36 h-fit !border-y-2 rounded-lg flex flex-col gap-2 [&>*]:w-full [&>*]:flex [&>*]:justify-center [&>*]:items-center pt-4 pb-2">
        <div className="img-container">
            {img}
        </div>
        <p className="font-semibold">{name}</p>
        <p className="font-bold text-2xl">{current}</p>
    </Card>
}
