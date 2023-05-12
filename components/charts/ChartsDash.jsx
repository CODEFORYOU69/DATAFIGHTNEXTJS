import React from 'react'
import NumberFightBarChart from './Bar'

const ChartsDash = ({ labels, dataset1, dataset2, options }) => {
    return (
        <div>
            <h1>Dashboard</h1>
            <NumberFightBarChart
                labels={labels}
                dataset1={dataset1}
                dataset2={dataset2}
                options={options}
            />
        </div>
    )
}

export default ChartsDash
