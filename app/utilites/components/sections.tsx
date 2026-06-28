import { BsCheckLg } from "react-icons/bs"
import { GoDotFill } from "react-icons/go"
import {
	projectCards,
	contact,
	decybelomierzImages,
} from "../definitions/objects"
import Link from "next/link"

export function Section1() {
	return (
		<section className="flex items-center justify-center w-[85%] h-[800px] mt-[100px] bg-gray-300">
			<div className="flex justify-center w-[80%] h-[75%]">
				<div className="w-[50%] flex">
					<img
						src={"/person.png"}
						alt="User in big picture"
						className="w-100 mx-auto"
					/>
				</div>

				<div className="w-[50%] pl-5">
					<Link href={"/about"} className="inline-flex">
						<small className="flex items-center gap-1">
							<GoDotFill size={8} />
							About
						</small>
					</Link>
					<h1 className="text-2xl ">I Create My Own Future</h1>
					<br></br>
					<p>
						Quisque convallis lacinia est et volutpat the interdum miss velitan
						venenatis odio fringilla ut mauris tincidun the molin lunon conva
						lacinia est et volutpa interdum ectus velican venenatis odio mis
						theme fringilla utam non ante conseuation.
					</p>
					<br></br>
					<ul className="flex flex-col gap-3">
						<li className="flex items-center gap-2">
							<BsCheckLg size={20} />I believe in forward-thinking design
						</li>
						<li className="flex items-center gap-2">
							<BsCheckLg size={20} />
							Design in the quis egestas sode viventan
						</li>
					</ul>

					<div className="flex flex-col items-start w-[90%] mt-[60px] -ml-[200px] px-6 py-7 bg-gray-400">
						<div>
							<h1 className="text-lg font-medium">Piotr Student</h1>
							<p className="text-xs">Prawie student:)</p>
						</div>
						<span className="w-4/5 h-0.5 mb-2 mt-4 bg-gray-300"></span>
						<ul className="flex flex-col gap-2">
							{contact.map((item) => (
								<li key={item.type} className="flex items-center text-sm gap-2">
									<item.icon.name size={item.icon.size} />
									{item.value}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export function Section2() {
	return (
		<section className="w-[85%] h-[900px] bg-gray-300">
			<div className="p-10 w-full h-full">
				<div className="flex flex-col w-full h-[10%] gap-2 px-6">
					<Link href={"/projects"} className="inline-flex">
						<small className="flex items-center gap-1">
							<GoDotFill size={8} />
							Projects
						</small>
					</Link>
					<h1 className="text-3xl">All My Projects</h1>
				</div>

				<ul className="p-5 h-[85%] grid grid-cols-3 grid-rows-2 gap-12">
					{projectCards.map((item) => (
						<li
							key={item.title}
							className="group flex flex-col relative overflow-hidden items-center gap-5 bg-gray-400 hover:scale-105 hover:bg-white transition-all duration-350 rounded-lg hover:rounded-none cursor-pointer">
							<div className="mt-[25px]">
								<item.icon.name size={item.icon.size} />
							</div>
							<div className="flex flex-col items-center gap-2">
								<h1 className="text-3xl text-center">{item.title}</h1>
								<p className="text-center">{item.description}</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export function Section3() {
	return (
		<section className="w-[85%] h-[900px] bg-gray-300">
			<div className="w-full h-full p-15">
				<div className="h-[10%] text-start">
					<Link href={"/decybelomierz"}>
						<small className="flex items-center gap-1 mb-1">
							<GoDotFill size={8} />
							Decybelomierz
						</small>
					</Link>
					<h1 className="text-3xl">The Grand Project</h1>
				</div>

				<ul className="h-[90%] grid grid-cols-3 grid-rows-1 gap-4">
					{decybelomierzImages.map((item) => (
						<li className="flex flex-col items-center">
							<img
								key={item.SEOdescription}
								src={item.source}
								alt={item.SEOdescription}
								className="h-125"
							/>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
