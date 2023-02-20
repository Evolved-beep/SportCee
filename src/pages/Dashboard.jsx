import React, { Fragment, useEffect, useState, useContext } from "react";
import { GetData } from "../Api/fetch";
import { useParams } from "react-router-dom";
import urlAPI from '../Api/utils/const/urlAPI.js'
import urlMock from '../Api/utils/const/urlMock.js'
import '../Dashboard.css'
import Barchart from "../component/Barchar";
import Radarchart from "../component/RadarChart";
import SessionAverage from "../component/Session";
import Radialbar from "../component/Radialbar";
import Userdetail from "../component/Userdetail";
import { ThemeContext, switchAPI, api } from "../Api/context/index";

const Dashboard = () => {

    const { id } = useParams()
    const { api } = useContext(ThemeContext)

 /*    
    const [dataUser, setDataUser] = useState(undefined)
    const [dataUserActivity, setDataUserActivity] = useState(undefined)
    const [dataAverage, setDataAverage] = useState(undefined)
    const [dataPerformance, setDataPerformance] = useState(undefined)

         setDataUser(GetData(api.userInfo(id)))
         setDataUserActivity (GetData(api.Activity(id)))
         setDataAverage (GetData(api.userData(id)))
         setDataPerformance(GetData(api.userPerf(id))) */
         console.log(GetData(api.userInfo(id)))
         const dataUser = GetData(api.userInfo(id))
         const dataUserActivity = GetData(api.Activity(id))
         const dataAverage = GetData(api.userData(id))
         const dataPerformance = GetData(api.userPerf(id))
         




    /* useEffect(() => {
        dataUser.then((items) => {
            setUser(items)
            console.log(user)
            if(items.score === undefined){
                return setUser(items.todayscore)
            }
            return setUser(items.score) 
        })
        dataUserActivity.then((result) => {
           setActivity(result.sessions)
           console.log(activity)
        })
        dataAverage.then((average) => {
            setAverage(average.sessions)
            console.log(average)
        })
        dataPerformance.then((userPerfData) => {
            setPerformance(userPerfData.data)
            setKind(userPerfData.kind)
        })
    },[]) */
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
                    <Barchart dataActivity={dataUserActivity} /> 
                    <div className="graphic_flex">
                        <SessionAverage dataUserSession={dataAverage} />
                        <Radarchart dataUserPerformance={dataPerformance} 
                                  /*   dataUserKind={kind} *//>
                        <Radialbar userDada={dataUser}/>
                    </div>
                </div>
                    <Userdetail value={dataUser}/>
            </div>
        </div>
    )

}

export default Dashboard