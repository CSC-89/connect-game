import React from "react";

import './Scoreboard.css'

const Scoreboard = ({score}) => {

    return(
    <div className="scoreboard">
        <h4>Score</h4>
        <h2>{score}</h2>
    </div>
    )
};

export default Scoreboard;