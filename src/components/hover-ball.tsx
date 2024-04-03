import { useState } from "react";
import "./styles/index.css"

interface HoverBallInterface {
    x: number,
    y: number,
    z: number
}

export default function HoverBall() {

    const [moving, setMoving] = useState<HoverBallInterface>()
    const speed = 15
    return (
        <div>

            <div style={{ transform: `translate3d(${moving?.x}px, ${moving?.y}px, ${moving?.z}px) ` }} className="transition p-5 hover:cursor-pointer w-48 h-48  rounded-full flex items-center justify-center text-white text-[1.5rem] ball" onMouseMove={(e) => {
                setMoving({
                    x: e.movementX * speed,
                    y: e.movementY * speed,
                    z: (e.movementX - e.movementY) * speed
                })
            }} onMouseLeave={() => {
                setMoving({
                    x: 0,
                    y: 0,
                    z: 0
                })
            }}><span style={{ transform: `translate3d(${moving?.x}px, ${moving?.y}px, ${moving?.z}px) ` }} className=" p-5 hover:cursor-pointer w-48 h-48  rounded-full flex items-center justify-center text-white text-[1.5rem]  z-10 t-1s select-none" >Hover me</span></div>

        </div>
    )
}