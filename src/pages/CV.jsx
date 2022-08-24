import Cursor from '../components/Cursor'
import Navigation from '../components/Navigation'
// import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core'
// import { zoomPlugin } from '@react-pdf-viewer/zoom'
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
// import '@react-pdf-viewer/default-layout/lib/styles/index.css'
// import '@react-pdf-viewer/core/lib/styles/index.css'

function CV() {
    // const defaultLayoutPluginInstance = defaultLayoutPlugin({})
    // const zoomPluginInstance = zoomPlugin({})

    return (
        <main className="main-content">
            <Cursor />
            <Navigation />
            <div className="cv-container">
                <h1>
                    Peut-être qu'un jour j'afficherais directement mon CV ici, en attendant tu peux le <a href="/assets/cv_yvars_michael.pdf">télécharger</a> directement.
                </h1>
            </div>
            {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
                    <div
                        style={{
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            height: '750px',
                            width: '40%',
                            margin: '0 auto',
                        }}>
                        <Viewer fileUrl="/assets/cv_yvars_michael.pdf" plugins={[defaultLayoutPluginInstance, zoomPluginInstance]} defaultScale={SpecialZoomLevel.PageFit} />
                    </div>
                </Worker> */}
        </main>
    )
}

export default CV
