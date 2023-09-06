import React, { useState, useEffect } from 'react'
import { fighterService } from '../../services'
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
            max: 30, // Define maximum value
        },
    },
    maintainAspectRatio: true, // Add this
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
            text: 'SITUATIONS ATTAQUES',
            font: {
                size: 24,
                weight: 'bold'
            }
        },
    },

}
export const options2 = {
    animation: {
        duration: 1000,
        easing: 'easeInOutQuart'
    },
    responsive: true,
    scales: {
        y: {
            beginAtZero: true,
            max: 30, // Define maximum value
        },
    },
    maintainAspectRatio: true, // Add this
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
            text: 'SITUATIONS DEFENSIVES',
            font: {
                size: 24,
                weight: 'bold'
            }
        },
    },
}
export const options3 = {
    animation: {
        duration: 1000,
        easing: 'easeInOutQuart'
    },
    responsive: true,
    scales: {
        y: {
            beginAtZero: true,
            max: 30, // Define maximum value
        },
    },
    maintainAspectRatio: true, // Add this
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
            text: 'SITUATIONS CLINCH',
            font: {
                size: 24,
                weight: 'bold'
            }
        },
    },
}
export const options4 = {
    animation: {
        duration: 1000,
        easing: 'easeInOutQuart'
    },
    responsive: true,
    scales: {
        y: {
            beginAtZero: true,
            max: 30, // Define maximum value
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
            text: 'TENDANCES',
            font: {
                size: 24,
                weight: 'bold'
            }
        },
    },
}


const AttOgFightersBarChart = ({

    dataset3,
    dataset4,
    dataset5,
    dataset6,
    dataset7,
    dataset8,
    dataset9,
    dataset10,
    dataset11,
    selectedFighters, // Ajouter la prop selectedFighter
}) => {

    const [fighter, setFighter] = useState(null)
  

    useEffect(() => {
        const fetchFighter = async () => {
            if (!selectedFighters)
                return null;

            const fighterData = await fighterService.getById(selectedFighters[0])
            setFighter(fighterData)
        }
        fetchFighter()
    }, [selectedFighters])

    //get fighters from data prop


    const labels = ['att og', 'att od', 'att fg', 'att fd']
    const label = ['def og', 'def od', 'def fg', 'def fd']
    const labelcac = ['cac og', 'cac od', 'cac fg', 'cac fd']
    const labelgardes = ['og', 'od', 'fg', 'fd']

    const data = {
        labels,
        datasets: [
            {
                label: fighter?.lastName, // Utiliser le nom du fighter récupéré
                data: dataset3,
                backgroundColor: 'rgba(54, 162, 235, 0.8)', // darker color
                borderColor: 'rgba(54, 162, 235, 1)', // same color as background but fully opaque
                borderWidth: 2, // thicker border
            },
            {
                label: 'fighter2',
                data: dataset4,
                backgroundColor: 'rgba(255, 99, 132, 0.8)', // darker color
                borderColor: 'rgba(255, 99, 132, 1)', // same color as background but fully opaque
                borderWidth: 2, // thicker border
            },
        ],
    }
    const data2 = {
        labels: label,
        datasets: [
            {
                label: fighter?.lastName, // Utiliser le nom du fighter récupéré
                data: dataset5,
                backgroundColor: 'rgba(54, 162, 235, 0.8)', // darker color
                borderColor: 'rgba(54, 162, 235, 1)', // same color as background but fully opaque
                borderWidth: 2, // thicker border
            },
            {
                label: 'fighter2',
                data: dataset6,
                backgroundColor: 'rgba(255, 99, 132, 0.8)', // darker color
                borderColor: 'rgba(255, 99, 132, 1)', // same color as background but fully opaque
                borderWidth: 2, // thicker border
            },
        ],
    }
    const data3 = {
        labels: labelcac,
        datasets: [
            {
                label: fighter?.lastName, // Utiliser le nom du fighter récupéré
                data: dataset7,
                backgroundColor: 'rgba(54, 162, 235, 0.8)', // darker color
                borderColor: 'rgba(54, 162, 235, 1)', // same color as background but fully opaque
                borderWidth: 2, // thicker border
            },
            {
                label: 'fighter2',
                data: dataset8,
                backgroundColor: 'rgba(255, 99, 132, 0.8)', // darker color
                borderColor: 'rgba(255, 99, 132, 1)', // same color as background but fully opaque
                borderWidth: 2, // thicker border
            },
        ],
    }
    const data4 = {
        labels: labelgardes,
        datasets: [
            {
                label: 'attaques',
                data: dataset9,
                backgroundColor: 'rgba(54, 162, 235, 0.8)', // darker color
                borderColor: 'rgba(54, 162, 235, 1)', // same color as background but fully opaque
                borderWidth: 2, // thicker border
            },
            {
                label: 'defenses',
                data: dataset10,
                backgroundColor: 'rgba(255, 99, 132, 0.8)', // darker color
                borderColor: 'rgba(255, 99, 132, 1)', // same color as background but fully opaque
                borderWidth: 2, // thicker border
            },
            {
                label: 'clinch',
                data: dataset11,
                backgroundColor: 'rgba(0, 221, 23, 0.8)', // darker color
                borderColor: 'rgba(15, 122, 0, 0.92)', // same color as background but fully opaque
                borderWidth: 2, // thicker border
            },
        ],
    }


    return (
        <div className="flex flex-col md:flex-row flex-wrap justify-between mb-2">
            <div className="md:w-1/4 md:h-max h-max p-2 rounded-lg shadow-md  bg-white ">

                <Bar options={options} data={data} />
            </div>
            <div className="md:w-1/4 md:h-max h-max p-2 rounded-lg shadow-md  bg-white">

                <Bar options={options2} data={data2} />
            </div>
            <div className="md:w-1/4 md:h-max h-max p-2 rounded-lg shadow-md bg-white">

                <Bar options={options3} data={data3} />
            </div>
            <div className="md:w-1/4 md:h-max h-max p-2 rounded-lg shadow-md bg-white">

                <Bar options={options4} data={data4} />
            </div>
        </div>

    )
}

export default AttOgFightersBarChart
