import React from "react";

/**
 * @component
 * @param {object} value contain user general value (protein, calories, lipid)
 * @returns number and string 
 */

const Userdetail = ({value}) => {
    return(
        <div className="user_detail_container">
            <div className="value_container">
                <div className="calories">
                    <img src="../../../img/flamme.png" alt="" />
                </div>
                    <div className="user_detail">
                        <span>{value.calories}kCal</span>
                        <p>Calories</p>
                    </div>
            </div>
            <div className="value_container">
                <div className="proteines">
                    <img src="../../../img/viande.png" alt="" />
                </div>
                    <div className="user_detail">
                        <span>{value.protein}g</span>
                        <p>Protéine</p>
                    </div>
            </div>
            <div className="value_container">
                <div className="glucides">
                    <img src="../../../img/apple.png" alt="" />
                </div>
                    <div className="user_detail">
                        <span>{value.carbohydrate}g</span>
                        <p>Glucides</p>
                    </div>
            </div>
            <div className="value_container">
                <div className="lipides">
                    <img src="../../../img/cheeseburger.png" alt="" />
                </div>
                    <div className="user_detail">
                        <span>{value.lipid}g</span>
                        <p>Lipides</p>
                    </div>
            </div>
        </div>
    )

}

export default Userdetail