import { SectionAbout, SectionProjects, SectionDecybelomierz } from "./utilites/components/sections"

export default function Home() {
	return (
		<main className="flex flex-col">
			<SectionAbout />

			<span className="w-[85%] h-[4px] bg-gray-200"></span>

			<SectionProjects />

			<span className="w-[85%] h-[4px] bg-gray-200"></span>

			<SectionDecybelomierz />
		</main>
	)
}
