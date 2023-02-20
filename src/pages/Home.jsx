import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Api/context/index";
import '../Home.css'

const Homepage = () => {
    const { switchAPI } = useContext(ThemeContext)
    return(
        <Fragment>
            <div className="home_container">
                <h2>Se connecter en tant que:</h2>
                <div className="button_container">
                    <button><Link to="/user/12">Karl</Link></button>
                    <button onClick={() => switchAPI()}>Switch API</button>
                    <button><Link to="/user/18">Cecilia</Link></button>
                </div>
            </div>
        </Fragment>

    )
}

export default Homepage