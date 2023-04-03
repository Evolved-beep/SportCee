import React, { Fragment } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Api/context";
import useSwitchAPI from "../Api/hook/useSwitchAPI";
import '../Home.css'

/**
 * @params {string} switchAPI
 * @returns Homepage includes component
 */

const Homepage = () => {

   /*  const [api, switchAPI,typeApi] = useSwitchAPI() */
    const {api, useSwitchAPI} = useContext(ThemeContext)

    return(
        <Fragment>
            <div className="home_container">
                <h2>Se connecter en tant que:</h2>
                <div className="button_container">
                    <button><Link to="/user/12">Karl</Link></button>
                    <button onClick={useSwitchAPI}>data from {api}</button>
                    <button><Link to="/user/18">Cecilia</Link></button>
                </div>
            </div>
        </Fragment>

    )
}

export default Homepage