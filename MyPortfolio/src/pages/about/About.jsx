import Info from '../../components/Info'
import Stats from '../../components/Stats'
import { FaDownload } from 'react-icons/fa'
import CV from '../../assets/radosławdumincv2024.pdf'
import Skills from '../../components/Skills'
import { resume } from '../../data'
import './about.scss'
import ResumeItem from '../../components/ResumeItem'
import {motion} from "framer-motion";

const About = () => {
	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 4 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1.5 }}
			className='section container'>
			<section className='about'>
				<h2 className='section__title'>
					About <span>Me</span>
				</h2>
				<div className='about__container grid'>
					<div className='about__info'>
						<h3 className='section__subtitle'>Personal Info</h3>
						<ul className='info__list grid'>
							<Info />
						</ul>
						<a href={CV} className='button'>
							Download CV{' '}
							<span className='button__icon'>
								<FaDownload />
							</span>
						</a>
					</div>
					<div className='stats grid'>
						<Stats />
					</div>
				</div>
			</section>
			<div className='separator'></div>

			<section className='skills'>
				<h3 className='section__subtitle subtitle__center'>Skills</h3>
				<div className='skills__container grid'>
					<Skills />
				</div>
			</section>
			<div className='separator'></div>
			<div className='resume'>
				<h3 className='section__subtitle subtitle__center'>Experience</h3>
				<div className='resume__container grid'>
					<div className='resume__data'>
						{resume.map(res => {
							return <ResumeItem key={res.id} {...res} />
						})}
					</div>
				</div>
			</div>
		</motion.main>
	)
}

export default About
