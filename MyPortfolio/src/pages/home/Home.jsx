import React from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa'
import './home.scss'
import Lottie from "lottie-react";
import ReactAnimation from "./../../assets/react2.json"



const Home = () => {
    return (
        <section className='home section grid'>
            <div className='home__content'>
                <motion.h1
                    className='home__title'
                    initial={{opacity: 0}}
                    animate={{opacity: 4}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.5}}
                >
                    <span>Hi! </span>I'm Radek!
                </motion.h1>
                <motion.div className='home__description'
                            initial={{opacity: 0}}
                            animate={{opacity: 4}}
                            exit={{opacity: 0}}
                            transition={{duration: 2.5}}
                            delay={0.5}
                >
                    I'm a beginner programmer who already has some experience in the field.{}
                    <br></br>I've been developing my skills in various areas, but now I want to focus on the fascinating
                    world of
                    front-end development.
                </motion.div>
                <motion.span
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                    delay={1.5}
                >
                    <Link to='/about' className='button'>
                        More about me{' '}
                        <span className='button__icon'>
						<FaArrowRight/>
					</span>
                    </Link>
                </motion.span>
                {/*<motion.div className='slidingTextContainer' variants={slidertVariants} initial='initial' animate='animate'>*/}
                {/*	Web Developer*/}
                {/*</motion.div>*/}
            </div>
            <div className='color__block'><Lottie animationData={ReactAnimation} loop={true} style={{"opacity": "0.05"}}/></div>
        </section>
    )
}

export default Home
