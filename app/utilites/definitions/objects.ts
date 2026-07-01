import { MdDescription, MdOutlineMuseum, MdOutlineEmail } from "react-icons/md"
import { AiOutlinePython } from "react-icons/ai"
import { PiFilmSlate } from "react-icons/pi"
import { IoCameraOutline } from "react-icons/io5"
import { FiPrinter } from "react-icons/fi"
import { GiSoundWaves } from "react-icons/gi"
import { GrLocation } from "react-icons/gr"
import { MdOutlinePhoneInTalk } from "react-icons/md"
import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa"

export const headlines = [
	{ name: "Home", source: "/" },
	{ name: "About", source: "/about" },
	{ name: "Projects", source: "/projects" },
	{ name: "Decybelomierz", source: "/decybelomierz" },
]

export const projectCards = [
	{
		icon: { name: MdOutlineMuseum, size: 67 },
		title: "LateNight",
		description: "description",
	},
	{
		icon: { name: AiOutlinePython, size: 67 },
		title: "Python games",
		description: "description",
	},
	{
		icon: { name: IoCameraOutline, size: 67 },
		title: "Video maker",
		description: "description",
	},
	{
		icon: { name: PiFilmSlate, size: 67 },
		title: "TeLOwizja",
		description: "description",
	},
	{
		icon: { name: FiPrinter, size: 67 },
		title: "Vplotter",
		description: "description",
	},
	{
		icon: { name: GiSoundWaves, size: 67 },
		title: "Decybelomierz",
		description: "description",
	},
]

export const projectIcons = [
	{ icon: {name: MdOutlineMuseum, size: 100}, href: "/projects/late-night", title: "Late Night" },
	{ icon: {name: AiOutlinePython, size: 100}, href: "/projects/python-games", title: "Python Games" },
	{ icon: {name: IoCameraOutline, size: 100}, href: "/projects/video-maker", title: "Video maker" },
	{ icon: {name: PiFilmSlate, size: 100}, href: "/projects/telowizja", title: "TeLOwizja" },
	{ icon: {name: FiPrinter, size: 100}, href: "/projects/vplotter", title: "Vplotter" },
	{ icon: {name: GiSoundWaves, size: 100}, href: "/projects/decybelomierz", title: "Decybelomierz" },
]

export const contact = [
	{
		type: "phone",
		value: "48+ 676767677",
		icon: { name: MdOutlinePhoneInTalk, size: 18 },
	},
	{
		type: "email",
		value: "pjoter67@67.com",
		icon: { name: MdOutlineEmail, size: 18 },
	},
	{
		type: "location",
		value: "Warszawka",
		icon: { name: GrLocation, size: 18 },
	},
]

export const mediaIcons = [
	{
		source: "https://www.instagram.com/",
		icon: { name: FaInstagram, size: 20 },
		description: "noopener noreferrer",
		target: "_blank",
	},
	{
		source: "https://www.facebook.com/",
		icon: { name: FaFacebook, size: 20 },
		description: "noopener noreferrer",
		target: "_blank",
	},
	{
		source: "https://github.com/",
		icon: { name: FaGithub, size: 20 },
		description: "noopener noreferrer",
		target: "_blank",
	},
]

export const decybelomierzImages = [
	{
		source: "person.png",
		SEOdescription: "Each section of project",
		size: { width: 0, height: 0 },
	},
	{
		source: "person.png",
		SEOdescription: "Each section of project",
		size: { width: 0, height: 0 },
	},
	{
		source: "person.png",
		SEOdescription: "Each section of project",
		size: { width: 0, height: 0 },
	},
]
