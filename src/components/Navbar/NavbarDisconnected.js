import React from 'react'
import './Navbar.css'
import {Link, NavLink} from "react-router-dom";
import logo from "../../assets/logo.png";
import user from "../../assets/user.svg"

export default function NavbarDisconnected() {
    return (
        <div className="navbar">
            <Link to="/home"><img className="navbarLogo" src={logo} alt="Logo" width="100px"/></Link>
            <nav>
                <NavLink to="/activities" className={({isActive}) => isActive ? "activeLink" : ""}>Activités</NavLink>
                <NavLink to="/login"  className={({isActive}) => isActive ? "activeLink" : ""}><img className="navbarUser" src={user} alt="" width="50px"/>Se connecter</NavLink>
            </nav>
        </div>
    )
}
