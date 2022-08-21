import Cursor from '../components/Cursor'
import Navigation from '../components/Navigation'
import { projectsData } from '../data/projectsData'
import { motion } from 'framer-motion'

function Project({ projectName }) {
    const currentData = projectsData[projectName]
    const variants = {
        initial: {
            opacity: 0,
            y: 100,
            transition: { duration: 0.5 },
        },
        animate: {
            opacity: 1,
            y: 0,
        },
        exit: {
            opacity: 0,
            y: -100,
            transition: { duration: 0.3 },
        },
    }

    return (
        <main className="main-content">
            <Cursor />
            <Navigation />
            <motion.div className="project-container" initial="initial" animate="animate" exit="exit" variants={variants}>
                <img src={currentData.imgUrl} alt={currentData.imgAlt} />
                <div className="project-infos">
                    <h1>{currentData.title}</h1>
                    <h2>{currentData.infos}</h2>
                    <h3>> Technologies utilisées:</h3>
                    {currentData.languages.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>
            </motion.div>
        </main>
    )
}

export default Project
