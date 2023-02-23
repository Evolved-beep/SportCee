import React from "react";
import { BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, Bar, CartesianGrid, CartesianAxis } from "recharts";

/**
 * 
 * @param {object} dataActivity 
 * @returns number
 */

const Barchart = ({dataActivity}) => {
  console.log(dataActivity)
    const resultData = []
    for(let i = 0; i < dataActivity.length; i++){
        const dayUpdate = (i + 1).toString()
        resultData.push({
            day : dayUpdate,
            kilogram: dataActivity[i].kilogram,
            calories: dataActivity[i].calories
        })
    }

    const CustomTooltip = ({active, payload}) => active ? (
        <div className="active_container">
            <p>{payload[0].value}kg</p>
            <p>{payload[1].value}kCal</p>
        </div>
    ) : null 

    /**
     * @component
     * @param {array} resultData contain users kilogram and calories value per day
     * @returns jsx recharts component
     */
    
    return(
        <div className="graphic_container">
          <span className="activite">Activité quotidienne</span>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={resultData}
          margin={{
            top: 20,
          }}
        >
          <XAxis dataKey="day" tickFormatter={resultData}/>
          <YAxis 
                yAxisId='kilogram'
                dataKey="kilogram" 
                orientation="right"
                tickMargin={12}
                tickCount={3}
                tickLine={false}
                axisLine={false}
                domain={["dataMin-3", "dataMax+2"]}
                dx={2}
          />
          <YAxis 
                yAxisId="calories"
                dataKey="calories" 
                orientation="left"
                hide={true}
                domain={[0,"dataMax+20"]}
                tickMargin={2}
                tickCount={3}
          />
          <CartesianGrid strokeDasharray="1" vertical={false} />
          <CartesianAxis />
          <Legend verticalAlign="top" align="right" iconType={"circle"} iconSize={8}  />
          <Tooltip  content={<CustomTooltip/>}/>
          <Legend />
          <Bar yAxisId="kilogram" dataKey="kilogram" name="Poids (kg)" radius={[5,5,0,0]} barSize={10} fill="#282D30" />
          <Bar yAxisId="calories" dataKey="calories" name="Calories Brulées (kCal)" radius={[5,5,0,0]} barSize={10} fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    )

}

export default Barchart