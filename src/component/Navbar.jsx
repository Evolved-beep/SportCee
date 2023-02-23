import React from "react";
import '../Navbar.css'

/**
 * horizontal navbar
 * @component
 * @returns jsx component
 */

const Navbar = () => {
    return(
        <nav>
            <img src="../../../img/logo.png" alt="" />
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