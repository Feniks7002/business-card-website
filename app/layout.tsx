import "./globals.css"
// import RootNavbar from "./utilites/components/navbars"
import Link from "next/link"
import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa"
import type { RootLayoutPropType } from "./utilites/definitions/type"
import {
	interFont,
	montserratAlternatesFont,
} from "./utilites/definitions/fonts"

export default function RootLayout({ children }: RootLayoutPropType) {
	return (
		<html lang="en">
			<body
				className={`${interFont.className} ${montserratAlternatesFont.variable} h-screen flex overflow-hidden`}>
				<header className="sticky top-1 flex z-10 w-[25%] h-screen bg-gray-200">
					<nav className="w-4/5 h-9/10 m-auto bg-gray-300">
						<div className="flex flex-col py-10">
							<img
								src={"/person.png"}
								alt="main logo img"
								className="w-50 h-auto mx-auto hidden md:block mb-5border-2 border-gray-300 rounded-sm shadow-xl"
							/>
							<Link href={"/"} className="flex flex-col items-center mt-5">
								<h1 className="text-2xl">Piotr Stęchły</h1>
								<p className="text-sm">Prawie student:)</p>
							</Link>
						</div>
						<ul className="flex flex-col items-center gap-3 mt-4">
							<li className="text-lg w-4/5 text-center hover:scale-105 transition-all duration-200">
								<Link href={"/"}>Home</Link>
							</li>
							<li className="text-lg w-4/5 text-center hover:scale-105 transition-all duration-200">
								<Link href={"/about"}>About</Link>
							</li>
							<li className="text-lg w-4/5 text-center hover:scale-105 transition-all duration-200">
								<Link href={"/site-projects"}>Projects</Link>
							</li>
							<li className="text-lg w-4/5 text-center hover:scale-105 transition-all duration-200">
								<Link href={"/museum"}>NightMuseum</Link>
							</li>
							<li className="text-lg w-4/5 text-center hover:scale-105 transition-all duration-200">
								<Link href={"/decybelomierz"}>Decybelomierz</Link>
							</li>
						</ul>
						<div className="flex flex-col my-15">
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
							<p className="mx-auto mt-2">
								<small>Designed by Piterka</small>
							</p>
						</div>
					</nav>
				</header>
				<main className="w-[75%] h-screen overflow-auto bg-gray-200">{children}</main>
			</body>
		</html>
	)
}
