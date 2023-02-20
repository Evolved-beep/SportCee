import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer
  } from "recharts";

  const Radarchart = ({dataUserPerformance}) => {
    const userPerfArray = []
    for(let i = 0; i < dataUserPerformance.length; i++){
        userPerfArray.push({
            value: dataUserPerformance[i].value,
            kind : dataUserPerformance[i].kind
        })
    }
    
    const valueKind = (dataUserKind) => {
        switch(dataUserKind){
            case 1 : return "cardio";
            case 2 : return "energie";
            case 3 : return "endurance";
            case 4 : return "force";
            case 5 : return "vitesse";
            case 6 : return "intensité";
            default : return null;
        }
    }
    
    return(
        <div className="radar_container">
            <ResponsiveContainer height="100%" width="100%">
                <RadarChart data={userPerfArray}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kind" tickFormatter={valueKind} style={{fontSize:"8px"}} />
                    <PolarRadiusAxis tick={false} tickCount={6} axisLine={false}/>
                    <Radar
                    dataKey="value"
                    fill="#FF0101" 
                    opacity={0.6}
                    />
                    </RadarChart>
            </ResponsiveContainer>
        </div>
    )

  }

  export default Radarchart