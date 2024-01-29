import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaCode } from 'react-icons/fa'
import './home.scss'


const Home = () => {
	return (
		<section className='home section grid'>
			<div className='home__content'>
				<motion.h1
					className='home__title'
					initial={{ opacity: 0, x: -200 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 2 }}>
					<span>Hi! </span>I'm Radek!
				</motion.h1>
				<div className='home__description'>
					I'm a beginner programmer who already has some experience in the field.{}
					<br></br>I've been developing my skills in various areas, but now I want to focus on the fascinating world of
					front-end development.
				</div>
				<Link to='/about' className='button'>
					More about me{' '}
					<span className='button__icon'>
						<FaArrowRight />
					</span>
				</Link>
				{/*<motion.div className='slidingTextContainer' variants={slidertVariants} initial='initial' animate='animate'>*/}
				{/*	Web Developer*/}
				{/*</motion.div>*/}
			</div>
			<div className='color__block'></div>
		</section>
	)
}

export default Home
