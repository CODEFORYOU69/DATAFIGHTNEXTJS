import React from 'react'
import ReactCountryFlag from 'react-country-flag'

function Scoreboard({
    redScore,
    blueScore,
    gj_by_fighter1,
    gj_by_fighter2,
    hits_by_fighter1,
    hits_by_fighter2,
    fighter1,
    fighter2,
    country1,
    country2,
}) {
    return (
        <div className="scoreboard rounded-lg overflow-hidden shadow-lg mx-auto w-2/3 bg-gray-800 text-white">
            <div className="flex flex-row border-double border-4 border-black">
                <div className="score blue w-1/2 bg-blue-700 text-center p-4">
                    <ReactCountryFlag
                        countryCode={country1}
                        svg
                        className="mb-2"
                    />
                    <h2 className="font-bold text-2xl">{fighter1}</h2>
                    <p className="text-6xl font-bold">{blueScore}</p>
                    <p>{gj_by_fighter1}</p>
                    <p className="text-green-500 font-bold">
                        {hits_by_fighter1} Hits
                    </p>
                </div>
                <div className="score red w-1/2 bg-red-700 text-center p-4">
                    <ReactCountryFlag
                        countryCode={country2}
                        svg
                        className="mb-2"
                    />
                    <h2 className="font-bold text-2xl">{fighter2}</h2>
                    <p className="text-6xl font-bold">{redScore}</p>
                    <p>{gj_by_fighter2}</p>
                    <p className="text-green-500 font-bold">
                        {hits_by_fighter2} Hits
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Scoreboard
