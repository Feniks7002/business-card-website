import { BsCheckLg } from "react-icons/bs"
import { MdOutlineEmail } from "react-icons/md"
import { GrLocation } from "react-icons/gr"
import { MdOutlinePhoneInTalk } from "react-icons/md"

export default function Home() {
	return (
		<div className="flex flex-col">
			<section className="flex items-center justify-center w-[85%] h-[800px] mt-[100px] bg-gray-300">
				<div className="flex justify-center w-[80%] h-[75%]">
					<div className="w-[50%] flex">
						<img
							src={"/person.png"}
							alt="User in big picture"
							className="w-100 mx-auto"
						/>
					</div>

					<div className="w-[50%]">
						<h1 className="text-2xl ">I Create Digital Future</h1>
						<br></br>
						<p>
							Quisque convallis lacinia est et volutpat the interdum miss
							velitan venenatis odio fringilla ut mauris tincidun the molin
							lunon conva lacinia est et volutpa interdum ectus velican
							venenatis odio mis theme fringilla utam non ante conseuation.
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

						<div className="flex flex-col items-start w-[90%] mt-[60px] -ml-[150px] px-6 py-7 bg-gray-400">
							<div>
								<h1 className="text-lg font-medium">Piotr Stęchły</h1>
								<p className="text-xs">Prawie student:)</p>
							</div>
							<span className="w-4/5 h-0.5 mb-2 mt-4 bg-gray-300"></span>
							<ul className="flex flex-col gap-1">
								<li className="flex items-center text-sm gap-2">
									<MdOutlineEmail />
									48+ 676767677
								</li>
								<li className="flex items-center text-sm gap-2">
									<GrLocation />
									pjoter67@67.com
								</li>
								<li className="flex items-center text-sm gap-2">
									<MdOutlinePhoneInTalk />
									localization
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<span className="w-[85%] h-[4px] bg-gray-200"></span>

			<section className="flex items-center justify-center w-[85%] h-[900px] bg-gray-300">
				<div className="flex justify-center w-[80%] h-[75%]">
					<div className="w-[50%] flex">
						<img
							src={"/person.png"}
							alt="User in big picture"
							className="w-100 mx-auto"
						/>
					</div>

					<div className="w-[50%]">
						<h1 className="text-2xl ">I Create Digital Future</h1>
						<br></br>
						<p>
							Quisque convallis lacinia est et volutpat the interdum miss
							velitan venenatis odio fringilla ut mauris tincidun the molin
							lunon conva lacinia est et volutpa interdum ectus velican
							venenatis odio mis theme fringilla utam non ante conseuation.
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

						<div className="flex flex-col items-start w-[90%] mt-[60px] -ml-[150px] px-6 py-7 bg-gray-400">
							<div>
								<h1 className="text-lg font-medium">Piotr Stęchły</h1>
								<p className="text-xs">Prawie student:)</p>
							</div>
							<span className="w-4/5 h-0.5 mb-2 mt-4 bg-gray-300"></span>
							<ul className="flex flex-col gap-1">
								<li className="flex items-center text-sm gap-2">
									<MdOutlineEmail />
									48+ 676767677
								</li>
								<li className="flex items-center text-sm gap-2">
									<GrLocation />
									pjoter67@67.com
								</li>
								<li className="flex items-center text-sm gap-2">
									<MdOutlinePhoneInTalk />
									localization
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
