import React from 'react'
import Profile from '../../assets/home.jpg'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import './home.scss'

const Home = () => {
	return (
		<section className='home section grid'>
			<div className='home__content'>
				<h1 className='home__title'>
					<span>Hi </span>Im Stefan
				</h1>
				<div className='home__description'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quasi dicta sed voluptate! Quam totam optio
					deserunt consequatur ipsum ratione.
				</div>
				<Link to='/about' className='button'>
					More About Me{' '}
					<span className='button__icon'>
						<FaArrowRight />
					</span>
				</Link>
			</div>
			<div className='color__block'></div>
			<img src={Profile} alt='' className='home__img' />
		</section>
	)
}

export default Home
