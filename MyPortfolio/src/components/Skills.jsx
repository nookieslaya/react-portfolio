import { skills } from '../data'


const Skills = () => {
	return (
		<>
			{skills.map(({ title, background }, index) => {
				return (
					<div className='progress__box' key={index}>
						<span className='skill__icon'>{background}</span>
						<h2 className='skills__title'>{title}</h2>
					</div>
				)
			})}
		</>
	)
}

export default Skills
