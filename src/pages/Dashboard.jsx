import React, { useContext } from "react";
import { GetData } from "../Api/fetch";
import { useParams } from "react-router-dom"; 
import '../Dashboard.css'
import Barchart from "../component/Barchar";
import Radarchart from "../component/RadarChart";
import SessionAverage from "../component/Session";
import Radialbar from "../component/Radialbar";
import Userdetail from "../component/Userdetail";
import { ThemeContext} from "../Api/context/index";
import urlMock from "../Api/utils/const/urlMock";
import urlAPI from "../Api/utils/const/urlAPI";

/**
 * @params {number} id
 * @params {string} api
 * @returns Dashboard include components
 * 
 */

const Dashboard = () => {

    const { id } = useParams()
    const { api } = useContext(ThemeContext)
    console.log("data from", api)
    const url = api === "api" ? urlAPI : urlMock

         const dataUser = GetData(url.userInfo(id))
         const dataUserActivity = GetData(url.Activity(id))
         const dataAverage = GetData(url.userData(id))
         const dataPerformance = GetData(url.userPerf(id))

         
    if(dataUser === undefined || dataUserActivity === undefined || dataAverage === undefined || dataPerformance === undefined){
          return <h1 className="error">Erreur...</h1>
    } 
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
                        <Radialbar userDada={dataUser.todayscore}/>
                    </div>
                </div>
                    <Userdetail value={dataUser}/>
            </div>
        </div>
    )

}

export default Dashboard