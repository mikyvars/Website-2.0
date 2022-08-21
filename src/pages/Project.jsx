import Cursor from '../components/Cursor'
import Navigation from '../components/Navigation'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'

function Project() {
    const { projectName } = useParams()
    const variants = {
        initial: {
            opacity: 0,
            transition: { duration: 0.5 },
            y: -100,
        },
        animate: {
            opacity: 1,
            y: 0,
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.3 },
            y: 100,
        },
    }

    return (
        <main className="main-content">
            <Cursor />
            <Navigation />
            <motion.div className="project-container" initial="initial" animate="animate" exit="exit" variants={variants}>
                <h1>{projectName}</h1>
            </motion.div>
        </main>
    )
}

export default Project
