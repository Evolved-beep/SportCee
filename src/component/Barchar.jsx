import React, { useState } from "react";
import { BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, Bar, CartesianGrid, CartesianAxis } from "recharts";
import PropTypes from "prop-types";

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
  
  console.log(dataActivity)
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
          <section className="legend_container">
          <span className="activite">Activité quotidienne</span>
          <div className="data_legend">
            <div className="kilogram_container">
              <div className="kilo_point"></div>
              <span>Poids(kg)</span>
            </div>
            <div className="calories_container">
              <div className="calories_point"></div>
              <span>Calories brulées(kCal)</span>
            </div>
          </div>
          </section>
        <ResponsiveContainer width="100%" height="92%">
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
          <Legend iconType={"circle"} cy={3} iconSize={8} className='test' />
          <Tooltip  content={<CustomTooltip/>}/>
          <Bar yAxisId="kilogram" dataKey="kilogram" name="Poids (kg)" radius={[5,5,0,0]} barSize={10} fill="#282D30" />
          <Bar yAxisId="calories" dataKey="calories" name="Calories Brulées (kCal)" radius={[5,5,0,0]} barSize={10} fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    )

  }
  
  Barchart.propTypes = {
    dataActivity: PropTypes.array
  };
 
  export default Barchart
