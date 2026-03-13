import { NavLink } from "react-router";

function HeaderNavItem({to, content}) {
    return (
        <li className="nav-item app-header__nav-item">
            <NavLink to={to} end className="nav-link app-header__nav-link">{content}</NavLink>
        </li>
    )
}

export default HeaderNavItem;