import React from 'react'
import Profile from '../../assets/home.jpg'
import Profile3 from '../../assets/home3.png'
import Profile2 from '../../assets/home2.png'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaCode } from 'react-icons/fa'
import './home.scss'

const Home = () => {
	return (
		<section className='home section grid'>
			<div className='home__content'>
				<h1 className='home__title'>
					<span>Cześć! </span>Jestem Radek!
				</h1>
				<div className='home__description'>
					Jestem początkującym programistą, który już ma na koncie pierwsze doświadczenia w pracy zawodowej.{}
					<br></br>
					Rozwijałem swoje umiejętności w różnych dziedzinach, ale teraz pragnę skoncentrować się na facynującym świecie
					front-endu.
				</div>
				<Link to='/about' className='button'>
					Więcej o mnie{' '}
					<span className='button__icon'>
						<FaArrowRight />
					</span>
				</Link>
			</div>
			<div className='color__block'></div>
			{/* <img src={Profile2} alt='' className='home__img' /> */}
			{/* <FaCode className='homeIcon' /> */}
		</section>
	)
}

export default Home
