import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
    responsive: false,
    scales: {
        y: {
            beginAtZero: true,
            max: 10, // Define maximum value
        },
    },
    maintainAspectRatio: false, // Add this
    plugins: {
        legend: {
            position: 'top', // place legend on the right side of chart
        },
        title: {
            display: true,
            text: 'Number Fight',
        },
    },
}

const NumberFightBarChart = ({ labels, dataset1 }) => {
    const data = {
        labels,
        datasets: [
            {
                label: 'fights',
                data: dataset1,
                backgroundColor: 'rgba(255, 99, 132, 0.8)', // darker color
                borderColor: 'rgba(255, 99, 132, 1)', // same color as background but fully opaque
                borderWidth: 2, // thicker border
            },
        ],
    }

    return <Bar options={options} data={data} />
}

export default NumberFightBarChart
