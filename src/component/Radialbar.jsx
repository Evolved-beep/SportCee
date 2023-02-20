import React from "react";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, circle } from 'recharts';


const Radialbar = ({userDada}) => {

    const data = {
        data: userDada
    }
    
    return(
        <div className="radial_container">
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart data={data}>
                <RadialBar
                    minAngle={15}
                    background
                    clockWise
                    label={{ position: 'insideStart', fill: '#000' }}
                    dataKey='data'
                />
                <circle cx="50%" cy="50%" fill="white" r="70"></circle>
                <Legend iconSize={10} layout="vertical" verticalAlign="middle" />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    )

}

export default Radialbar