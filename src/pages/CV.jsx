import Cursor from '../components/Cursor'
import Navigation from '../components/Navigation'
import { motion } from 'framer-motion'

function CV() {
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
            <motion.div className="cv-container" initial="initial" animate="animate" exit="exit" variants={variants}>
                <img src="/assets/img/cv.jpg" alt="CV de Michael Yvars" />
            </motion.div>
        </main>
    )
}

export default CV
