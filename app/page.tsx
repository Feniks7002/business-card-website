import { Section1, Section2, Section3 } from "./utilites/components/sections"

export default function Home() {
	return (
		<main className="flex flex-col">
			<Section1 />

			<span className="w-[85%] h-[4px] bg-gray-200"></span>

			<Section2 />

			<span className="w-[85%] h-[4px] bg-gray-200"></span>

			<Section3 />
		</main>
	)
}
