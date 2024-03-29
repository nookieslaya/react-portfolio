import PortfolioItem from '../../components/PortfolioItem'
import { portfolio } from '../../data'
import './portfolio.scss'
const Portfolio = () => {
	return (
		<main className='portfolio section'>
			<h2 className='section__title'>
				MY <span>Portfolio</span>
			</h2>
			<div className='portfolio__container container grid'>
				{portfolio.map(item => {
					return <PortfolioItem key={item.id} {...item} />
				})}
			</div>
		</main>
	)
}

export default Portfolio
