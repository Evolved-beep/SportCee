import React from "react";
import { Link } from "react-router-dom";
import '../Navbar.css'

/**
 * horizontal navbar
 * @component
 * @returns jsx component
 */

const Navbar = () => {
    return(
        <nav>
            <Link to="/"><img src="../../../img/logo.png" alt="" /></Link>
            <ul>
                <li>Accueil</li>
                <li>Profil</li>
                <li>Réglage</li>
                <li>Communauté</li>
            </ul>
        </nav>

    )

}

export default Navbar