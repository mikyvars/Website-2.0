import Cursor from '../components/Cursor'
import Navigation from '../components/Navigation'
import { useParams } from 'react-router-dom'
import { projectsData } from '../data/projectsData'

function Project() {
    const { projectName } = useParams()
    const currentData = projectsData[projectName]
    console.log(currentData)

    return (
        <main className="main-content">
            <Cursor />
            <Navigation />
            <div className="project-container">
                <img src={currentData.imgUrl} alt={currentData.imgAlt} />
                <div className="project-infos">
                    <h1>{currentData.title}</h1>
                    <h2>{currentData.infos}</h2>
                    <h3>> Technologies utilisées:</h3>
                    {currentData.languages.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Project
