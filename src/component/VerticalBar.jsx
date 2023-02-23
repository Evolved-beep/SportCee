import React from "react";
import "../VerticalBar.css"

/**
 * vertical navigation
 * @component
 * @returns jsx component
 */
const VerticalBar = () => {

    const pictureArray = [
        "../../../img/yoga.png",
        "../../../img/nageur.png",
        "../../../img/cycliste.png",
        "../../../img/haltere.png"
    ]
    return(
        <div className="vertical_container">
            <div className="bar_container">
                {pictureArray.map((icon) => {
                    return(
                        <div key={icon} className="icon_container">
                        <img src={icon} alt=""/>
                        </div>
                    )
                })}
            </div>
            <span>Copyright, SportSee 2020</span>
        </div>
    )

}

export default VerticalBar