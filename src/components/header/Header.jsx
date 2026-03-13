import { NavLink } from "react-router";
import "./header.css";
import HeaderNavItem from "./HeaderNavItem";

function Header() {
    const links = [
        { to: "/", content: "Home" },
        { to: "/services", content: "Services" },
        { to: "/portfolio", content: "Portfolio" },
        { to: "/contact", content: "Contact" },
        { to: "/mentions-legales", content: "Mentions légales" },
    ]
    return <nav className="app-header navbar navbar-expand-lg bg-dark text-uppercase justify-content-end" data-bs-theme="dark">
        <div className="container-fluid">
            {/* Brand */}
            <NavLink to="/" end className="navbar-brand">John Doe</NavLink>

            {/* Hamburger - for Mobile and Tablet */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* Menu */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-1">
                    {links.map((link, idx) => <HeaderNavItem key={idx} to={link.to} content={link.content} />)}
                </ul>
            </div>
        </div>
    </nav>;
}

export default Header;