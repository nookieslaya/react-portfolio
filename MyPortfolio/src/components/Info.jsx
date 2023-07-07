import { personalInfo } from '../data'


const Info = () => {
	return (
		<>
			{personalInfo.map(({ title, description }, index) => {
				return (
					<li className='item__info' key={index}>
						<span className='info__title'>{title}</span>
						<span className='info__description'>{description}</span>
					</li>
				)
			})}
		</>
	)
}

export default Info
