import Cursor from '../components/Cursor'
import Navigation from '../components/Navigation'
import { motion } from 'framer-motion'

function Home() {
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
            <motion.div className="home-container" initial="initial" animate="animate" exit="exit" variants={variants}>
                <motion.div className="home-about" drag dragConstraints={{ left: -250, right: 250, top: -50, bottom: 250 }}>
                    <img src="/assets/img/me.jpg" alt="" draggable="false" />
                    <h1>Michael Yvars</h1>
                    <h2>développeur front-end junior</h2>
                </motion.div>
            </motion.div>
        </main>
    )
}

export default Home
