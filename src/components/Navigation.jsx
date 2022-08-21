import { NavLink } from 'react-router-dom'

function Navigation() {
    return (
        <div className="navigation">
            <ul className="navigation-content">
                <NavLink to="/" className={(nav) => (nav.isActive ? 'nav-active' : '')}>
                    accueil
                </NavLink>
                <NavLink to="/project/groupomania" className={(nav) => (nav.isActive ? 'nav-active' : '')}>
                    groupomania
                </NavLink>
                <NavLink to="/project/hot-takes" className={(nav) => (nav.isActive ? 'nav-active' : '')}>
                    hot takes
                </NavLink>
                <NavLink to="/contact" className={(nav) => (nav.isActive ? 'nav-active' : '')}>
                    contact
                </NavLink>
            </ul>
        </div>
    )
}

export default Navigation
