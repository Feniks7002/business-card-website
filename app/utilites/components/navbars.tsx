import Link from "next/link"
import { projectIcons, mediaIcons, headlines } from "../definitions/objects"

export function RootNavbar() {
	return (
		<header className="sticky top-1 flex z-10 w-[25%] h-screen bg-gray-200">
			<nav className="w-[80%] h-[90%] m-auto bg-gray-300">
				<div className="flex flex-col py-10">
					<img
						src={"/person.png"}
						alt="main logo img"
						className="w-50 h-auto mx-auto hidden md:block mb-5border-2 border-gray-300 rounded-sm shadow-xl"
					/>
					<Link href={"/"} className="flex flex-col items-center mt-5">
						<h1 className="text-2xl">Piotr Student</h1>
						<p className="text-sm">Prawie student:)</p>
					</Link>
				</div>
				<ul className="flex flex-col items-center gap-3 mt-4">
					{headlines.map((item) => (
						<li
							key={item.name}
							className="text-lg w-[80%] text-center hover:scale-105 transition-all duration-200">
							<Link href={item.source}>{item.name}</Link>
						</li>
					))}
				</ul>
				<div className="flex flex-col my-15">
					<ul className="flex items-center justify-center gap-5">
						{mediaIcons.map((item) => (
							<Link
								key={item.source}
								href={item.source}
								target={item.target}
								rel={item.description}>
								<item.icon.name size={item.icon.size} />
							</Link>
						))}
					</ul>
					<p className="mx-auto mt-2">
						<small>Designed by Piterka</small>
					</p>
				</div>
			</nav>
		</header>
	)
}

export function ProjectNavbar() {
	return (
		<header className="h-[30%] bg-gray-300 sticky top-1 z-10 p-5">
			<div className="h-[20%] flex items-center justify-center">
				<h1 className="text-4xl">Here Are All My Projects Enjoy:)</h1>
			</div>
			<nav className="h-[80%] flex items-center justify-between gap-4">
				{projectIcons.map((project) => (
					<div
						key={project.title}
						className="group relative overflow-hidden rounded-xl">
						<Link href={project.href} className="block relative">
							<img
								src={"/person.png"}
								alt={project.title}
								className="w-[200px] h-auto object-cover transition duration-500 group-hover:scale-110 group-hover:opacity-35"
							/>
							<div className="absolute inset-0 flex items-center justify-center group-hover:bg-black/40 overflow-hidden">
								<span className="translate-y-8 opacity-0 text-white text-sm font-semibold transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
									{project.title}
								</span>
							</div>
						</Link>
					</div>
				))}
			</nav>
		</header>
	)
}
