import { RootLayoutPropType } from "../utilites/definitions/type"
import { ProjectNavbar } from "../utilites/components/navbars"

export default function ProjectsLayout({ children }: RootLayoutPropType) {
	return (
		<div className="w-[95%] h-[90%] my-auto overflow-hidden">
			<ProjectNavbar />

			<div className="h-[70%] overflow-auto">{children}</div>
		</div>
	)
}
