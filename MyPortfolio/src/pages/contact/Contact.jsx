import { FaEnvelopeOpen, FaPhoneSquareAlt, FaFacebookF, FaTwitter, FaDribbble } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import './contact.scss'
import emailjs from '@emailjs/browser'

const Contact = () => {
	const sendEmail = e => {
		e.preventDefault()
		emailjs.sendForm(
			import.meta.env.VITE_SERVICE_ID,
			import.meta.env.VITE_TEMPLATE_ID,
			e.target,
			import.meta.env.VITE_PUBLIC_KEY
		)
	}

	return (
		<section className='contact section'>
			<h2 className='section__title'>
				Get In <span>Touch</span>
			</h2>
			<div className='contact__container container grid'>
				<div className='contact__data'>
					<h3 className='contact__title'>Feel free to contact me! </h3>
					<div className='contact__description'>
						If you want to collaborate with me, you can find contact details below or use the contact form.
					</div>
					<div className='contact__info'>
						<div className='info__item'>
							<FaEnvelopeOpen className='info__icon' />
							<div>
								<div className='info__title'>Mail me</div>
								<h4 className='info__desc'>
									<a href='mailto:radek.dumin@gmail.com'>radek.dumin@gmail.com</a>
								</h4>
							</div>
						</div>
						<div className='info__item'>
							<FaPhoneSquareAlt className='info__icon' />
							<div>
								<div className='info__title'>Call me</div>
								<h4 className='info__desc'>+48 783 812 846 </h4>
							</div>
						</div>
						<div className='contact__socials'>
							<a
								target='_blank'
								href='https://www.facebook.com/profile.php?id=100004856988776'
								className='contact__social-link'>
								<FaFacebookF />
							</a>
						</div>
					</div>
				</div>

				<form className='contact__form form' onSubmit={sendEmail}>
					<div className='form__input-group'>
						<div className='form__input-div'>
							<input type='email' placeholder='Your email' name='email_from' className='form__control' />
						</div>
						<div className='form__input-div'>
							<input type='text' name='email_name' placeholder='Your Name' className='form__control' />
						</div>
						<div className='form__input-div'>
							<input type='text' name='email_subject' placeholder='Your Subject' className='form__control' />
						</div>
					</div>
					<div className='form__input-div'>
						<textarea placeholder='Your Message' name='message' className='form__control textarea'></textarea>
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
