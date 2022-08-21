import { ReactElement } from 'react'
import Cursor from '../components/Cursor'
import Navigation from '../components/Navigation'

function Home() {
    return (
        <main className="main-content">
            <Cursor />
            <Navigation />
        </main>
    )
}

export default Home
