"use client";
import { useEffect, useState } from "react";
import SearchForm from "./components/search-form";
import { technologies } from "@/constants";
import { technology } from "@/utils/types";
import ProjectsList from "./components/projects-list/projects-list";
import Caption from "@/components/ui/caption";
import LoadingPage from "../loading-page";
import { useProjects } from "@/store";
import getProjects from "@/utils/getProjects";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export interface Sorts {
	sortBy: "older" | "newer" | null;
	viewAs: "list" | "gallery";
}

export type TechnologiesList = { checked: boolean; name: technology }[];

export default function Projects() {
	const [technologiesList, setTechnologiesList] = useState<TechnologiesList>(
		technologies.map((technology) => {
			return { checked: false, name: technology };
		}),
	);
	const [searchInputValue, setSearchInputValue] = useState("");
	const [sorts, setSorts] = useState<Sorts>({
		sortBy: "newer",
		viewAs: "gallery",
	});
	const { isLoading: isProjectsLoading, setProjects } = useProjects(
		(store: any) => store,
	);
	useEffect(() => {
		if (isProjectsLoading === false) return;
		(async () => {
			getProjects().then(setProjects);
		})();
	}, [setProjects, isProjectsLoading]);
	return (
		<div>
			<LoadingPage
				section="projects"
				loadings={[{ name: "projects", status: isProjectsLoading }]}
			/>
			<section className="w-full min-h-[95vh] pb-4" id="projects">
				<Caption className="mx-auto mt-24 mb-14">Projects</Caption>
				<div className="flex flex-col gap-6 w-[90%] mx-auto">
					<SearchForm
						technologiesList={technologiesList}
						setSorts={setSorts}
						setTechnologiesList={setTechnologiesList}
						searchInputValue={searchInputValue}
						setSearchInputValue={setSearchInputValue}
					/>
					<ProjectsList
						sorts={sorts}
						settechnologiesList={setTechnologiesList}
						technologiesList={technologiesList}
						searchInputValue={searchInputValue}
					/>
					<Button asChild>
						<a
							target="_blank"
							href="https://github.com/ziadx33"
							className="flex gap-1.5 items-center"
						>
							see all projects on github{" "}
							<Github size={20} />
						</a>
					</Button>
				</div>
			</section>
		</div>
	);
}
