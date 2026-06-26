import { GoDotFill } from "react-icons/go"

import Link from "next/link"

export default function AboutPage() {
	return (
		<div className="flex flex-col">
			<section className="flex items-center justify-center w-[90%] h-[1000px] mt-[100px] bg-gray-300">
				<div className="flex flex-col w-full h-full py-20 px-35">
					<div className="h-[10%]">
						<small className="flex items-center gap-1">
							<GoDotFill size={8} />
							About
						</small>
						<h1 className="text-3xl">I Create My Own Future</h1>
					</div>

					<div className="h-[70%]">
						<img
							src={"/person.png"}
							alt="Do zmiany!!!!!"
							className="h-[90%] w-full"
						/>
					</div>

					<div className="h-[20%] flex">
						<div className="w-[50%] flex flex-col gap-2 p-2">
							<h1 className="text-lg font-medium">I Create My Own Future</h1>
							<small>
								Quisque convallis lacinia est et volutpat the interdum miss
								velitan venenatis odio fringilla ut mauris tincidun the molin
								lunon conva lacinia est et volutpa interdum ectus velican
								venenatis odio mis theme fringilla utam non ante conseuation.
							</small>
						</div>

						<div className="flex justify-center items-center w-[50%] gap-[35%]">
							<ul className="flex flex-col gap-3">
								<li className="flex items-center gap-2">
									<p className="font-medium">Birthday:</p>
									<small>14 February 2007</small>
								</li>
								<li className="flex items-center gap-2">
									<p className="font-medium">Phone:</p>
									<small>48+ 67667677</small>
								</li>
								<li className="flex items-center gap-2">
									<p className="font-medium">Mail:</p>
									<small>pjoter@67.com</small>
								</li>
							</ul>
							<ul className="flex flex-col gap-3">
								<li className="flex items-center gap-2">
									<p className="font-medium">pp</p>
									<small>next</small>
								</li>
								<li className="flex items-center gap-2">
									<p className="font-medium">pp</p>
									<small>next</small>
								</li>
								<li className="flex items-center gap-2">
									<p className="font-medium">pp</p>
									<small>next</small>
								</li>
							</ul>
							{/* <ul className="grid grid-cols-2 grid-rows-3">
								<li className="flex items-center gap-1">
                                    <p className="font-medium">Birthday:</p>
                                    <small>14.0.2007</small>
                                </li>
								<li className="flex items-center gap-1">
                                    <p className="font-medium">pp</p>
                                    <small>next</small>
                                </li>
								<li className="flex items-center gap-1">
                                    <p className="font-medium">Phone:</p>
                                    <small>48+ 67667677</small>
                                </li>
								<li className="flex items-center gap-1">
                                    <p className="font-medium">pp</p>
                                    <small>next</small>
                                </li>
								<li className="flex items-center gap-1">
                                    <p className="font-medium">Mail:</p>
                                    <small>pjoter@67.com</small>
                                </li>
								<li className="flex items-center gap-1">
                                    <p className="font-medium">pp</p>
                                    <small>next</small>
                                </li>
							</ul> */}
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
