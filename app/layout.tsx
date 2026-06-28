import "./globals.css"
import { RootNavbar } from "./utilites/components/navbars"
import type { RootLayoutPropType } from "./utilites/definitions/type"
import {interFont, RobotoFont} from "./utilites/definitions/fonts"

export default function RootLayout({ children }: RootLayoutPropType) {
	return (
		<html lang="en">
			<body className={`${interFont.className} ${RobotoFont.variable} h-screen flex overflow-hidden`}>

				<RootNavbar />

				<div className="w-[75%] flex flex-col h-screen overflow-auto bg-gray-200">
					{children}
				</div>

			</body>
		</html>
	)
}
