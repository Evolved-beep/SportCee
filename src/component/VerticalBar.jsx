import React, { Fragment } from "react";
import "../VerticalBar.css"

const VerticalBar = () => {

    const pictureArray = [
        "../../../img/yoga.png",
        "../../../img/nageur.png",
        "../../../img/cycliste.png",
        "../../../img/haltere.png"
    ]
    return(
            <div className="bar_container">
                {pictureArray.map((icon) => {
                    return(
                        <div key={icon} className="icon_container">
                        <img src={icon} alt=""/>
                        </div>
                    )
                })}
                <span>Copyright, SportSee 2020</span>
            </div>
    )

}

export default VerticalBar