"use client"
import { Button } from "@/components/ui/button";
import { DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenu, DropdownMenuLabel, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { Dispatch, SetStateAction, memo, useRef } from "react";
import Image from "next/image";
import { Sorts, TechnologiesList } from "../page";

interface SearchFormProps {
    technologiesList: TechnologiesList
    setTechnologiesList: Dispatch<SetStateAction<TechnologiesList>>
    searchInputValue: string
    setSearchInputValue: Dispatch<SetStateAction<string>>
    setSorts: Dispatch<SetStateAction<Sorts>>
}

function SearchFormComponent({ technologiesList, setTechnologiesList, searchInputValue, setSearchInputValue, setSorts }: SearchFormProps) {
    const techsRef = useRef<HTMLDivElement>(null)
    return <div className="flex flex-col gap-2">
        <Input placeholder="search" value={searchInputValue} onChange={e => setSearchInputValue(e.target.value)} />
        <div className="flex gap-2 lg:flex-row flex-col">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className="lg:w-fit w-full">sort & view</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setSorts(c => ({ sortBy: "newer", viewAs: c.viewAs }))}>
                        newer
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSorts(c => ({ sortBy: "older", viewAs: c.viewAs }))}>
                        older
                    </DropdownMenuItem>
                    <DropdownMenuLabel className="lg:block hidden">View as</DropdownMenuLabel>
                    <DropdownMenuSeparator className="lg:block hidden"/>
                    <DropdownMenuItem className="lg:block hidden"onClick={() => setSorts(c => ({ sortBy: c.sortBy, viewAs: "list" }))}>
                        list
                    </DropdownMenuItem>
                    <DropdownMenuItem className="lg:block hidden" onClick={() => setSorts(c => ({ sortBy: c.sortBy, viewAs: "gallery" }))}>
                        gallery
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="my-auto flex flex-wrap gap-1.5 w-full overflow-x-scroll" ref={techsRef}>
                <Button variant="outline" className="w-12 h-9 p-0 my-auto" onClick={() => setTechnologiesList(technologiesList.map(tech => { return { ...tech, checked: false } }))}><X className="h-full" /></Button>
                {technologiesList?.map(technology => {
                    return <Button onClick={() => setTechnologiesList(technologiesList.map(tech => { return { ...tech, checked: tech.name === technology.name ? !tech.checked : tech.checked } }))} className={`h-9 w-fit border-2 dark:hover:bg-transparent   rounded-xl ${technology.checked ? "border-slate-950 dark:border-gray-400" : ""}`} variant="outline" key={technology.name} title={technology.name}>
                        <Image width={40} height={40} alt={technology.name} className="h-full w-fit mr-2" draggable="false" src={`/logos/${technology.name.trim().toLowerCase()}.png`} />
                        {technology.name}
                    </Button>
                })}
            </div>
        </div>
    </div>
}

const SearchForm = memo(SearchFormComponent)

export default SearchForm
