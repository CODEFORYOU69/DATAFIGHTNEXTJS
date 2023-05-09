import React from 'react'

function Scoreboard({
    redScore,
    setRedScore,
    blueScore,
    setBlueScore,
    gj_by_fighter1,
    setGj_by_fighter1,
    gj_by_fighter2,
    setGj_by_fighter2,
    hits_by_fighter1,
    setHits_by_fighter1,
    hits_by_fighter2,
    setHits_by_fighter2,
}) {
    return (
        <div className="scoreboard">
            <div className="score red">
                <h2>Red</h2>
                <p>{redScore}</p>
                <p>{gj_by_fighter2}</p>
                <p>{hits_by_fighter2}</p>
            </div>
            <div className="score blue">
                <h2>Blue</h2>
                <p>{blueScore}</p>
                <p>{gj_by_fighter1}</p>
                <p>{hits_by_fighter1}</p>
            </div>
        </div>
    )
}

export default Scoreboard
