import React from 'react'
import NumberFightBarChart from './Bar'
import RadarChart from './Radar1'

const ChartsDash = ({ labels, dataset1, dataset2, options, rounds }) => {
    return (
        <div>
            <h1>Dashboard</h1>
            <div className="flex flex-row">
                <NumberFightBarChart
                    labels={labels}
                    dataset1={dataset1}
                    dataset2={dataset2}
                    options={options}
                />
                <RadarChart rounds={rounds} />
            </div>
        </div>
    )
}

export default ChartsDash
