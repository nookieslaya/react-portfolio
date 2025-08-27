import {
	FaHome,
	FaUser,
	FaFolderOpen,
	FaEnvelopeOpen,
	FaBriefcase,
	FaGraduationCap,
	FaCode,
	FaVuejs,
} from 'react-icons/fa'
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi'
import { SiNuxtdotjs, SiTailwindcss } from 'react-icons/si'

import Work1 from './assets/wszedziedobrze.jpg'
import Work2 from './assets/caboverde.jpg'
import Work3 from './assets/work3.png'
import Work9 from './assets/sum.webp'
import Work4 from './assets/muala.png'
import Work5 from './assets/ecommapp.png'
import Work6 from './assets/nextPortfolio.webp'
import Work7 from './assets/AirdropApp.webp'
import Work8 from './assets/bitzone.webp'
import Work11 from './assets/aiagent.png'
import Theme1 from './assets/purple.png'
import Theme2 from './assets/red.png'
import Theme3 from './assets/blueviolet.png'
import Theme4 from './assets/blue.png'
import Theme5 from './assets/goldenrod.png'
import Theme6 from './assets/magenta.png'
import Theme7 from './assets/yellowgreen.png'
import Theme8 from './assets/orange.png'
import Theme9 from './assets/green.png'
import Theme10 from './assets/yellow.png'
import { DiJsBadge, DiCss3, DiHtml5, DiWordpress, DiReact, DiMysql, DiPhp } from 'react-icons/di'
const style = { color: 'white', fontSize: '1.5em' }

export const links = [
	{
		id: 1,
		name: 'Home',
		icon: <FaHome className='nav__icon' />,
		path: '/',
	},

	{
		id: 2,
		name: 'About',
		icon: <FaUser className='nav__icon' />,
		path: '/about',
	},

	{
		id: 3,
		name: 'Portfolio',
		icon: <FaFolderOpen className='nav__icon' />,
		path: '/portfolio',
	},

	{
		id: 4,
		name: 'Contact',
		icon: <FaEnvelopeOpen className='nav__icon' />,
		path: '/contact',
	},
]

export const personalInfo = [
	{
		id: 1,
		title: 'First Name : ',
		description: 'Radek',
	},

	{
		id: 2,
		title: 'Last Name : ',
		description: 'Dumin',
	},

	{
		id: 3,
		title: 'Age : ',
		description: '35 Years',
	},

	{
		id: 4,
		title: 'Nationality : ',
		description: 'Polish',
	},

	{
		id: 5,
		title: 'Available : ',
		description: 'immediately',
	},

	{
		id: 6,
		title: 'City : ',
		description: 'Kielce',
	},

	{
		id: 7,
		title: 'Phone : ',
		description: '+48783812846',
	},

	{
		id: 8,
		title: 'Email : ',
		description: 'radek.dumin@gmail.com',
	},

	{
		id: 10,
		title: 'Langages : ',
		description: 'Polish, English',
	},
	{
		id: 11,
		title: 'Github : ',
		description: (
			<a target='_blank' href='https://github.com/nookieslaya'>
				https://github.com/nookieslaya
			</a>
		),
	},
]

export const stats = [
	{
		id: 1,
		no: '4,5',
		title: 'Years of <br /> Experience',
	},

	{
		id: 2,
		no: '30+',
		title: 'Completed <br /> Projects',
	},
]

export const resume = [
	{
		id: 3,
		category: 'experience',
		icon: <FaBriefcase />,
		year: '09.2024 - 09.2025',
		title: 'Frontend Developer <span> Cogitech </span>',
		desc: 'Creating and developing websites and web applications based on prepared designs.',
		desc2:
			'Main responsibilities included building website templates using ACF and WordPress, as well as developing web applications primarily with Vue, Nuxt 3, Tailwind CSS, and Nuxt UI.',
	},
	{
		id: 2,
		category: 'experience',
		icon: <FaBriefcase />,
		year: '10.2023 - 12.2023',
		title: 'Junior Software Developer <span> Infonetax </span>',
		desc: 'Working on changing the design of the cloud version of the Mobevo program. Introducing new functionality in the program.',
		desc2:
			'My main task was to completely change the appearance of the program based on the previously designed design, adjust the appearance to mobile devices. Additionally I introduced new functionalities in the program.',
	},
	{
		id: 1,
		category: 'experience',
		icon: <FaBriefcase />,
		year: '10.2021 - 06.2023',
		title: 'Web Developer <span> MassInternet </span>',
		desc: 'Creating websites for individual clients based on prepared designs. Contact and collaboration with key clients.',
		desc2:
			'My main task was to create websites, online stores, and templates for the WordPress CMS. For website development, I primarily used HTML, SCSS, JavaScript, PHP, WordPress + ACF. I also worked with WooCommerce and Shoper online stores.',
	},
]

export const skills = [
	{
		id: 1,
		title: 'Html',
		background: <DiHtml5 />,
	},

	{
		id: 2,
		title: 'Javascript',
		background: <DiJsBadge />,
	},

	{
		id: 3,
		title: 'Css',
		background: <DiCss3 />,
	},
	{
		id: 13,
		title: 'Tailwind',
		background: <SiTailwindcss />,
	},

	{
		id: 5,
		title: 'Wordpress',
		background: <DiWordpress />,
	},

	{
		id: 8,
		title: 'React',
		background: <DiReact />,
	},

	{
		id: 12,
		title: 'Nuxt 3',
		background: <SiNuxtdotjs />,
	},

	{
		id: 11,
		title: 'Vue',
		background: <FaVuejs />,
	},
	{
		id: 9,
		title: 'PHP',
		background: <DiPhp />,
	},
	{
		id: 10,
		title: 'SQL',
		background: <DiMysql />,
	},
]

export const portfolio = [
	{
		id: 1,
		img: Work1,
		title: 'Website',
		details: [
			{
				icon: <FiFileText />,
				title: 'Project : ',
				desc: 'Website',
			},
			{
				icon: <FiUser />,
				title: 'Client : ',
				desc: 'Wife :)',
			},
			{
				icon: <FaCode />,
				title: 'Language : ',
				desc: 'HTML, SCSS, JavaScript, PHP, Wordpress + ACF',
			},
			{
				icon: <FiExternalLink />,
				title: 'Preview : ',
				desc: (
					<a className='portfolio-link' target='_blank' href='https://www.wszedzie-dobrze.pl'>
						Link to website
					</a>
				),
			},
		],
	},

	{
		id: 2,
		img: Work2,
		title: 'Website',
		details: [
			{
				icon: <FiFileText />,
				title: 'Project : ',
				desc: 'React Website',
			},
			{
				icon: <FiUser />,
				title: 'Client : ',
				desc: 'Me',
			},
			{
				icon: <FaCode />,
				title: 'Language : ',
				desc: 'React, Tailwind',
			},
			{
				icon: <FiExternalLink />,
				title: 'Preview : ',
				desc: (
					<a className='portfolio-link' target='_blank' href='https://gilded-sunflower-82ea89.netlify.app/'>
						Link to website
					</a>
				),
			},
		],
	},
	{
		id: 3,
		img: Work3,
		title: 'React App',
		details: [
			{
				icon: <FiFileText />,
				title: 'Project : ',
				desc: 'React App',
			},
			{
				icon: <FiUser />,
				title: 'Client : ',
				desc: 'Me',
			},
			{
				icon: <FaCode />,
				title: 'Language : ',
				desc: 'React, Tailwind, Firebase',
			},
			{
				icon: <FiExternalLink />,
				title: 'Preview : ',
				desc: (
					<a className='portfolio-link' target='_blank' href='https://cryptogrid-b6fb7.web.app/'>
						Link to website
					</a>
				),
			},
		],
	},
	{
		id: 4,
		img: Work4,
		title: 'React App',
		details: [
			{
				icon: <FiFileText />,
				title: 'Project : ',
				desc: 'React App',
			},
			{
				icon: <FiUser />,
				title: 'Client : ',
				desc: 'Me',
			},
			{
				icon: <FaCode />,
				title: 'Language : ',
				desc: 'React, Tailwind, Leaflet, OpenStreet Map',
			},
			{
				icon: <FiExternalLink />,
				title: 'Preview : ',
				desc: (
					<a className='portfolio-link' target='_blank' href='https://dreamy-pixie-302b6f.netlify.app/'>
						Link to website
					</a>
				),
			},
		],
	},
	{
		id: 5,
		img: Work9,
		title: 'AI Summarizer',
		details: [
			{
				icon: <FiFileText />,
				title: 'Project : ',
				desc: 'Powered by AI article summarizer',
			},
			{
				icon: <FiUser />,
				title: 'Client : ',
				desc: 'Me',
			},
			{
				icon: <FaCode />,
				title: 'Language : ',
				desc: 'React, Tailwind, OpenAi ',
			},
			{
				icon: <FiExternalLink />,
				title: 'Preview : ',
				desc: (
					<a className='portfolio-link' target='_blank' href='https://creative-fenglisu-c99f3d.netlify.app/'>
						Link to website
					</a>
				),
			},
		],
	},
	{
		id: 6,
		img: Work6,
		title: 'Next.JS Portfolio Website',
		details: [
			{
				icon: <FiFileText />,
				title: 'Project : ',
				desc: 'Next.JS Portfolio Website',
			},
			{
				icon: <FiUser />,
				title: 'Client : ',
				desc: 'Me',
			},
			{
				icon: <FaCode />,
				title: 'Language : ',
				desc: 'Next.JS, Tailwind, FM, Aceternity UI',
			},
			{
				icon: <FiExternalLink />,
				title: 'Preview : ',
				desc: (
					<a className='portfolio-link' target='_blank' href='https://serene-dusk-9698e4.netlify.app/'>
						Link to website
					</a>
				),
			},
		],
	},
	// {
	// 	id: 7,
	// 	img: Work7,
	// 	title: 'AirdropApp',
	// 	details: [
	// 		{
	// 			icon: <FiFileText />,
	// 			title: 'Project : ',
	// 			desc: 'MERN React App ',
	// 		},
	// 		{
	// 			icon: <FiUser />,
	// 			title: 'Client : ',
	// 			desc: 'Me',
	// 		},
	// 		{
	// 			icon: <FaCode />,
	// 			title: 'Language : ',
	// 			desc: 'React,Zustand, TypeScript, MERN, Tailwind, Framer Motion, Aceternity UI, ShadCn',
	// 		},
	// 		{
	// 			icon: <FiExternalLink />,
	// 			title: 'Preview : ',
	// 			desc: (
	// 				<a className='portfolio-link' target='_blank' href='https://grand-scone-4dcf70.netlify.app/'>
	// 					Link to website
	// 				</a>
	// 			),
	// 		},
	// 	],
	// },
	{
		id: 8,
		img: Work8,
		title: 'BitZone Next.JS website',
		details: [
			{
				icon: <FiFileText />,
				title: 'Project : ',
				desc: 'React GSAP CryptoMarket Website ',
			},
			{
				icon: <FiUser />,
				title: 'Client : ',
				desc: 'Me',
			},
			{
				icon: <FaCode />,
				title: 'Language : ',
				desc: 'React,GSAP,Tailwind, ',
			},
			{
				icon: <FiExternalLink />,
				title: 'Preview : ',
				desc: (
					<a className='portfolio-link' target='_blank' href='https://cosmic-pasca-99384c.netlify.app/'>
						Link to website
					</a>
				),
			},
		],
	},
	{
		id: 11,
		img: Work11,
		title: 'Simple AI Agent',
		details: [
			{
				icon: <FiFileText />,
				title: 'Project : ',
				desc: 'Simple browser only AI Agent',
			},
			{
				icon: <FiUser />,
				title: 'Client : ',
				desc: 'Me',
			},
			{
				icon: <FaCode />,
				title: 'Language : ',
				desc: 'React, Typescript ',
			},
			{
				icon: <FiExternalLink />,
				title: 'Preview : ',
				desc: (
					<a className='portfolio-link' target='_blank' href='https://celebrated-jalebi-93b42e.netlify.app/'>
						Link to website
					</a>
				),
			},
		],
	},
]

export const themes = [
	{
		id: 1,
		img: Theme1,
		color: 'hsl(252, 35%, 51%)',
	},

	{
		id: 2,
		img: Theme2,
		color: 'hsl(4, 93%, 54%)',
	},

	{
		id: 3,
		img: Theme3,
		color: 'hsl(271, 76%, 53%)',
	},

	{
		id: 4,
		img: Theme4,
		color: 'hsl(225, 73%, 57%)',
	},

	{
		id: 5,
		img: Theme5,
		color: 'hsl(43, 74%, 49%)',
	},

	{
		id: 6,
		img: Theme6,
		color: 'hsl(339, 81%, 66%)',
	},

	{
		id: 7,
		img: Theme7,
		color: 'hsl(80, 61%, 50%)',
	},

	{
		id: 8,
		img: Theme8,
		color: 'hsl(19, 96%, 52%)',
	},

	{
		id: 9,
		img: Theme9,
		color: 'hsl(88, 65%, 43%)',
	},

	{
		id: 10,
		img: Theme10,
		color: 'hsl(42, 100%, 50%)',
	},
]
