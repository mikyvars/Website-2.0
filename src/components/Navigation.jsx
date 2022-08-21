import { NavLink } from 'react-router-dom'

function Navigation() {
    return (
        <div className="navigation">
            <ul className="navigation-content">
                <NavLink to="/" className={(nav) => (nav.isActive ? 'nav-active hover' : 'hover')}>
                    accueil
                </NavLink>
                <NavLink to="/project/groupomania" className={(nav) => (nav.isActive ? 'nav-active hover' : 'hover')}>
                    groupomania
                </NavLink>
                <NavLink to="/project/hot-takes" className={(nav) => (nav.isActive ? 'nav-active hover' : 'hover')}>
                    hot takes
                </NavLink>
                <NavLink to="/project/booki" className={(nav) => (nav.isActive ? 'nav-active hover' : 'hover')}>
                    booki
                </NavLink>
                <NavLink to="/cv" className={(nav) => (nav.isActive ? 'nav-active hover' : 'hover')}>
                    cv
                </NavLink>
                <NavLink to="/contact" className={(nav) => (nav.isActive ? 'nav-active hover' : 'hover')}>
                    contact
                </NavLink>
            </ul>
        </div>
    )
}

export default Navigation
