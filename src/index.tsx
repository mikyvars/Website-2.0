import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Project from './pages/Project'
import './styles/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:projectName" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
)
