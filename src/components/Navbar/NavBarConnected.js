import React from 'react'
import './Navbar.css'
import {Link, NavLink} from "react-router-dom";
import logo from "../../assets/logo.png";
import user from "../../assets/user.png"

export default function Navbar() {
    return (
        <div className="navbar">
            <Link to="/home"><img className="navbarLogo" src={logo} alt="Logo" width="100px"/></Link>
            <nav>
                <NavLink to="/activities" className={({isActive}) => isActive ? "activeLink" : ""}>Activités</NavLink>
                <NavLink to="/account"  className={({isActive}) => isActive ? "activeLink" : ""}><img className="navbarUser" src={user} alt="" width="50px"/>Mes activités</NavLink>
                <NavLink to="/profil"  className={({isActive}) => isActive ? "activeLink" : ""}>Mon profil</NavLink>
                <NavLink to="/home"  className={({isActive}) => isActive ? "activeLink" : ""}><img className="navbarUser" src={user} alt="" width="50px"/>Déconnexion</NavLink>
            </nav>
        </div>
    )
}
