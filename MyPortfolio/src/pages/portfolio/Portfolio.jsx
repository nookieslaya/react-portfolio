import PortfolioItem from '../../components/PortfolioItem'
import { portfolio } from '../../data'
import './portfolio.scss'
import {motion} from "framer-motion";
const Portfolio = () => {
	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 4 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1.5 }}
			className='portfolio section'>
			<h2 className='section__title'>
				MY <span>Portfolio</span>
			</h2>
			<div className='portfolio__container container grid'>
				{portfolio.map(item => {
					return <PortfolioItem key={item.id} {...item} />
				})}
			</div>
		</motion.main>
	)
}

export default Portfolio
