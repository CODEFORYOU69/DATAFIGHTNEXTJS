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
    animation: {
        duration: 1000,
        easing: 'easeInOutQuart'
    },
    responsive: true,
    scales: {
        y: {
            beginAtZero: true,
            max: 10, // Define maximum value
        },
    },
    maintainAspectRatio: true,
    plugins: {
        tooltip: {
            callbacks: {
                label: function (context) {
                    return 'Fights: ' + context.parsed.y;
                }
            }
        },
        legend: {
            position: 'bottom',
            labels: {
                boxWidth: 20,
                padding: 15
            }
        },
        title: {
            display: true,
            text: 'Number of Fight',
            font: {
                size: 24,
                weight: 'bold'
            }
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
                backgroundColor: {
                    type: 'linear',
                    colors: ['rgba(255, 99, 132, 0.8)', 'rgba(255, 159, 64, 0.8)'],
                    positions: [0, 1]
                },

                borderColor: 'rgba(255, 99, 132, 1)', // same color as background but fully opaque
                borderWidth: 2, // thicker border
            },
        ],
    }

    return <div style={{ maxWidth: '400px', maxHeight: '400px' }} className="rounded-lg shadow-md p-5 m-5 bg-white" >
          

        <Bar options={options} data={data} />
        
    </div>
}

export default NumberFightBarChart

