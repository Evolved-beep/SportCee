import React from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis
} from "recharts";
import PropTypes from "prop-types";
/**
 * @component
 * @param {object} userDada include user score data
 * @returns {jsx} component recharts
 */

const Radialbar = ({ userDada }) => {
    const data = [{
        todayscore: userDada,
        fill: "red"
    }, 
    {
      todayscore: 1,
      fill: 'grey'
    }
]

  return (
    <div className="radial_container">
      <p className="score">Score</p>
      <ResponsiveContainer>
        <RadialBarChart
          cx="50%" 
          cy="50%"
          width="100%"
          height="100%" 
          innerRadius={70}  
          barSize={10} 
          data={data} 
          startAngle={80} 
          endAngle={450}
          >
          <PolarAngleAxis type="number" domain={[0, 1]} angleAxisId={0} tick={false} />
          <RadialBar
          dataKey="todayscore"
          angleAxisId={0}
          cornerRadius="10"
          background
          data={[data[0]]}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="text_graph">
        <span>{userDada*100}%</span>
        <p>de votre objectif</p>
      </div>

    </div>
  );
};

 RadialBar.propTypes = {
    userDada: PropTypes.object
  };
 
export default Radialbar;
