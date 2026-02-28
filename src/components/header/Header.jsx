import { NavLink } from "react-router";
import './header.css';

function Header() {
    return <nav className="navbar navbar-expand-lg bg-dark text-uppercase justify-content-end" data-bs-theme="dark">
        <div className="container-fluid">
            {/* Brand */}
            <a className="navbar-brand" href="#">John Doe</a>

            {/* Hamburger - for Mobile and Tablet */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* Menu */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink to="/" end className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/services" end className="nav-link">Services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolio" end className="nav-link">Portfolio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" end className="nav-link">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/mentions-legales" end className="nav-link">Mentions Légales</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>;
}

export default Header;