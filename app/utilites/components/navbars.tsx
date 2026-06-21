import Link from "next/link"
import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa"

export default function RootNavbar() {
	return (
		<header className="w-1/4 h-full flex items-center justify-center bg-gray-200">
			<nav className="flex flex-col w-4/5 h-9/10 bg-gray-300">
				<Link href={"/"}>
					<div className="flex flex-col items-center py-10">
						<img
							src={"/person.png"}
							alt="main logo img"
							className="w-[200px] h-auto hidden md:block mb-5 border-2 border-gray-300 rounded-sm shadow-xl"
						/>
						<h1 className="text-2xl">Piotr Stęchły</h1>
						<p className="text-sm">Prawie student:)</p>
					</div>
				</Link>
				<ul className="flex flex-col items-center gap-3 mt-4">
					<li className="text-lg">
						<Link href={"/"}>Home</Link>
					</li>
					<li className="text-lg">
						<Link href={"/about"}>AboutMe</Link>
					</li>
					<li className="text-lg">
						<Link href={"/site-projects"}>Projects</Link>
					</li>
					<li className="text-lg">
						<Link href={"/museum"}>NightMuseum</Link>
					</li>
					<li className="text-lg">
						<Link href={"/decybelomierz"}>Decybelomierz</Link>
					</li>
				</ul>
				<div className="flex flex-col items-center mt-15">
					<ul className="flex items-center justify-center gap-5">
						<Link
							href="https://www.instagram.com/"
							target="_blank"
							rel="noopener noreferrer">
							<FaInstagram size={20} />
						</Link>
						<Link
							href="https://www.facebook.com/"
							target="_blank"
							rel="noopener   noreferrer">
							<FaFacebook size={20} />
						</Link>
						<Link
							href="https://github.com/"
							target="_blank"
							rel="noopener noreferrer">
							<FaGithub size={20} />
						</Link>
					</ul>
					<p className="mt-2">
						<small>Designed by Piterka</small>
					</p>
				</div>
			</nav>
		</header>
	)
}
