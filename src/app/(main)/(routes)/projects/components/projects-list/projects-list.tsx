"use client";
import { useMemo, Dispatch, SetStateAction } from "react";
import Project from "./components/project";
import SkeletonProjects from "./components/skeleton-projects";
import { useProjects } from "@/store";
import { Sorts, TechnologiesList } from "../../page";
import supabase from "@/supabase";

interface ProjectsListProps {
    technologiesList: TechnologiesList;
    settechnologiesList: Dispatch<SetStateAction<TechnologiesList>>;
    searchInputValue: string;
    sorts: Sorts;
}

export default function ProjectsList({ technologiesList, searchInputValue, settechnologiesList, sorts }: ProjectsListProps) {
    const { projects, isLoading } = useProjects((store) => store);
    const checkedTechnologiesList = useMemo(() => technologiesList.filter((tech) => tech.checked), [technologiesList]);
   
    const filteredProjects = projects
        ?.sort((a, b) => {
            if (sorts.sortBy === "newer") {
                if (a.created_at < b.created_at) return -1;
                if (a.created_at > b.created_at) return 1;
                return 0;
            } else {
                if (a.created_at < b.created_at) return 1;
                if (a.created_at > b.created_at) return -1;
                return 0;
            }
        })
        .filter((project) => checkedTechnologiesList.length === 0 || checkedTechnologiesList.every((checkedTech) => project.technologies.some((tech) => checkedTech.name === tech)))
        .filter((project) => project.name.toLowerCase().includes(searchInputValue.toLowerCase()))
        .map((project) => {
            const createdDate = new Date(project.created_at);
            const completedDate = project.completed_at ? new Date(project.completed_at) : new Date();
            const completedInDays = Math.round((completedDate.getTime() - createdDate.getTime()) / (1000 * 60 * 60 * 24));
            return <Project viewAs={sorts.viewAs} completedInDays={completedInDays} setTechnologiesList={settechnologiesList} key={project.id} {...project} />;
        });
    return <div className={`flex ${sorts.viewAs === "list" ? "flex-col" : "flex-wrap"} gap-4 pb-4 lg:justify-start justify-center`}>{!isLoading ? filteredProjects : <SkeletonProjects />}</div>;
}
