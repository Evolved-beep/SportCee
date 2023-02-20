import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,  ResponsiveContainer, Rectangle } from 'recharts';

const SessionAverage = ({dataUserSession}) => {
    const sessionArray = []
    for(let i = 0; i < dataUserSession.length; i++){
        sessionArray.push({
            day: dataUserSession[i].day,
            sessionLength: dataUserSession[i].sessionLength
        })
    }
    const userDay = (sessionArray) => {
        switch(sessionArray){
            case 1 : return "L";
            case 2 : return "M";
            case 3 : return "M";
            case 4 : return "J";
            case 5 : return "V"; 
            case 6 : return "S";
            case 7 : return "D";
        }
        
    }
    const CustomTooltip = ({active, payload}) => active ? (
        <div className="session_container">
            <p>{payload[0].value}min</p>
        </div>
    ) : null 
    return(
        <div className="line_container">
            <span className="duree" >Durée moyenne des</span>
            <span className="duree_session">sessions</span>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sessionArray}>
                <XAxis dataKey="day" tickFormatter={userDay} tickLine={false} axisLine={false} style={{stroke: "#FFFFFF", fontSize: "12px", opacity: '40%'}}   />
                <Tooltip content={CustomTooltip} />
                <Line type="monotone" dataKey="sessionLength" dot={false} activeDot={{ stroke: "red", strokeWidth: 2, r: 5 }} stroke={"#FFF"}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )

}

export default SessionAverage