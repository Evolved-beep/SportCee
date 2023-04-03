import React from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer
  } from "recharts";
  import PropTypes from 'prop-types';

  /**
   * 
   * @param {object} dataUserPerformance
   * @returns string or null
   */

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
    
    /**
     * @component
     * @param {array} userPerfArray contain value from user performance
     * @returns jsx recharts component
     */

    return(
        <div className="radar_container">
            <ResponsiveContainer height="100%" width="100%">
                <RadarChart data={userPerfArray}>
                    <PolarGrid radialLines={false}/>
                    <PolarAngleAxis dataKey="kind" tickFormatter={valueKind} style={{fontSize:"6px"}} stroke={"#FFF"} tickLine={false} />
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

  RadarChart.propTypes = {
    dataUserPerformance: PropTypes.array
  };
 

  export default Radarchart