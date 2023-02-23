import React from "react";
import { RadialBarChart, RadialBar,  ResponsiveContainer, PolarAngleAxis } from 'recharts';

/**
 * @component
 * @param {object} userDada include user score data 
 * @returns number
 * @returns jsx component recharts
 */


const Radialbar = ({userDada}) => {
    
    return(
        <div className="radial_container">
            <p className="score">Score</p>
            <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart cx="50%" cy="50%" innerRadius={70}  data={userDada} startAngle={90} >
            <circle cx="50%" cy="50%" fill="white" r="70"></circle>
            <PolarAngleAxis type='number' domain={[0, 100]} angleAxisId={1} tick={false} />
            <RadialBar background dataKey="todayscore" angleAxisId={1} fill="#FF0000" data={[userDada]} />
          </RadialBarChart>
            </ResponsiveContainer>
            <div className="text_graph">
                <span>{userDada}%</span>
                <p>de votre objectif</p>
            </div>
        </div>
    )

}

export default Radialbar