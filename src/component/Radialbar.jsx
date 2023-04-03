import React from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
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
        fill: "rgba(251, 251, 251, 1)"
    }
]

  return (
    <div className="radial_container">
      <p className="score">Score</p>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius={80}
          width={500}
          height={500}
          data={data}
        >
          <RadialBar
            dataKey="todayscore"
            angleAxisId={1}
            fill="#FF0000"
            minAngle={15}
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
