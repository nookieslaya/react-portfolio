import { FaEnvelopeOpen, FaPhoneSquareAlt, FaFacebookF, FaTwitter, FaYoutube, FaDribbble } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import './contact.scss'
const Contact = () => {
	return (
		<section className='contact section'>
			<h2 className='section__title'>
				Get In <span>Touch</span>
			</h2>
			<div className='contact__container container grid'>
				<div className='contact__data'>
					<h3 className='contact__title'>Dont be be be</h3>
					<div className='contact__description'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, sapiente?
					</div>
					<div className='contact__info'>
						<div className='info__item'>
							<FaEnvelopeOpen className='info__icon' />
							<div>
								<div className='info__title'>Mail me</div>
								<h4 className='info__desc'>radek.dumin@gmail.com</h4>
							</div>
						</div>
						<div className='info__item'>
							<FaPhoneSquareAlt className='info__icon' />
							<div>
								<div className='info__title'>Call me</div>
								<h4 className='info__desc'>444 4 444 </h4>
							</div>
						</div>
						<div className='contact__socials'>
							<a href='#' className='contact__social-link'>
								<FaFacebookF />
							</a>
							<a href='#' className='contact__social-link'>
								<FaTwitter />
							</a>
							<a href='#' className='contact__social-link'>
								<FaTwitter />
							</a>
							<a href='#' className='contact__social-link'>
								<FaDribbble />
							</a>
						</div>
					</div>
				</div>
				<form action='' className='contact__form form'>
					<div className='form__input-group'>
						<div className='form__input-div'>
							<input type='email' placeholder='Your email' className='form__control' />
						</div>
						<div className='form__input-div'>
							<input type='text' placeholder='Your Name' className='form__control' />
						</div>
						<div className='form__input-div'>
							<input type='text' placeholder='Your Subject' className='form__control' />
						</div>
					</div>
					<div className='form__input-div'>
						<textarea placeholder='Your Message' className='form__control textarea'></textarea>
					</div>
					<button className='button'>
						Send Message{' '}
						<span className='button__icon contact__button-icon'>
							<FiSend />
						</span>
					</button>
				</form>
			</div>
		</section>
	)
}

export default Contact
