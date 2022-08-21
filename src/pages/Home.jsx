import Cursor from '../components/Cursor'
import Navigation from '../components/Navigation'
import { motion } from 'framer-motion'

function Home() {
    return (
        <main className="main-content">
            <Cursor />
            <Navigation />
            <div className="home-container">
                <motion.div className="home-about" drag dragConstraints={{ left: -250, right: 250, top: -50, bottom: 250 }}>
                    <img src="/assets/img/me.jpg" alt="" draggable="false" />
                    <h1>Michael Yvars</h1>
                    <h2>développeur front-end junior</h2>
                </motion.div>
            </div>
        </main>
    )
}

export default Home
