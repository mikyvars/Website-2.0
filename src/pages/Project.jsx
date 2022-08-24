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
                <div className="project-header">
                    <h1>{currentData.title}</h1>
                    <h2>{currentData.description}</h2>
                    <div style={{ display: 'flex' }}>
                        {currentData.languages.map((item, index) => (
                            <p key={index} style={{ marginRight: '10px' }}>
                                {index === currentData.languages.length - 1 ? item : item + ','}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="project-body">
                    <img src={currentData.imgUrl} alt={currentData.imgAlt} />
                    <p>{currentData.infos}</p>
                </div>
            </motion.div>
        </main>
    )
}

export default Project
