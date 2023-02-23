import React, { Fragment, useEffect, useState, useContext } from "react";
import { GetData } from "../Api/fetch";
import { useParams } from "react-router-dom"; 
import '../Dashboard.css'
import Barchart from "../component/Barchar";
import Radarchart from "../component/RadarChart";
import SessionAverage from "../component/Session";
import Radialbar from "../component/Radialbar";
import Userdetail from "../component/Userdetail";
import { ThemeContext} from "../Api/context/index";

/**
 * @params {number} id
 * @params {string} api
 * @returns Dashboard include components
 * 
 */

const Dashboard = () => {

    const { id } = useParams()
    const { api } = useContext(ThemeContext)

         const dataUser = GetData(api.userInfo(id))
         const dataUserActivity = GetData(api.Activity(id))
         const dataAverage = GetData(api.userData(id))
         const dataPerformance = GetData(api.userPerf(id))
         
    if(dataUser === undefined || dataUserActivity === undefined || dataAverage === undefined || dataPerformance === undefined){
        return <h1>Loading...</h1>
    }
    console.log(dataUser)
    return(
        <div className="dashboard_container">
            <div className="user_container">
                <h1>Bonjour
                    <span>{dataUser.firstname}</span>
                </h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className="value_detail_user_container">
                <div className="tes">
                    <Barchart dataActivity={dataUserActivity.sessions} /> 
                    <div className="graphic_flex">
                        <SessionAverage dataUserSession={dataAverage.sessions} />
                        <Radarchart dataUserPerformance={dataPerformance.data} 
                                    dataUserKind={dataPerformance.kind}/>
                        <Radialbar userDada={dataUser.todayscore*100}/>
                    </div>
                </div>
                    <Userdetail value={dataUser}/>
            </div>
        </div>
    )

}

export default Dashboard