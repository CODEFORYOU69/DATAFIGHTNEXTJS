import React, { useState, useEffect } from 'react'
import {fighterService}  from '../../services'
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
            max: 20, // Define maximum value
        },
    },
    maintainAspectRatio: false, // Add this
    plugins: {
        legend: {
            position: 'top', // place legend on the right side of chart
        },
        title: {
            display: true,
            text: ' SITUATIONS ATTAQUES ',
        },
    },
}
export const options2 = {
    responsive: false,
    scales: {
        y: {
            beginAtZero: true,
            max: 20, // Define maximum value
        },
    },
    maintainAspectRatio: false, // Add this
    plugins: {
        legend: {
            position: 'top', // place legend on the right side of chart
        },
        title: {
            display: true,
            text: ' SITUATIONS DEFENSIVES ',
        },
    },
}
export const options3 = {
    responsive: false,
    maintainAspectRatio: false,
    width: 700,
    height: 700,
    animation: {
        duration: 2000, // durée de l'animation en millisecondes
        easing: 'easeInOutBounce', // type d'animation
    },
    scales: {
        y: {
            beginAtZero: true,
            max: 20, // Define maximum value
        },
    },
    maintainAspectRatio: false, // Add this
    plugins: {
        legend: {
            position: 'top', // place legend on the right side of chart
        },
        title: {
            display: true,
            text: ' SITUATIONS CLINCH ',
        },
    },
}
export const options4 = {
    responsive: false,
    scales: {
        y: {
            beginAtZero: true,
            max: 50, // Define maximum value
        },
    },
    maintainAspectRatio: false, // Add this
    plugins: {
        legend: {
            position: 'top', // place legend on the right side of chart
        },
        title: {
            display: true,
            text: ' tendances ',
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
    selectedFighter, // Ajouter la prop selectedFighter
}) => {

    const [fighter, setFighter] = useState(null)

    useEffect(() => {
        const fetchFighter = async () => {
            const fighterData = await fighterService.getById(selectedFighter)
            console.log("🚀 ~ file: FightersBarChart.jsx:119 ~ fetchFighter ~ fighterData:", fighterData)
            setFighter(fighterData)
        }
        fetchFighter()
    }, [selectedFighter])

    //get fighters from data prop


    const labels = ['att og', 'att od', 'att fg', 'att fd']
    const label = ['def og', 'def od', 'def fg', 'def fd']
    const labelcac = ['cac og', 'cac od', 'cac fg', 'cac fd']
    const labelgardes = ['og', 'od', 'fg', 'fd']

    const data = {
        labels,
        datasets: [
            {
                label: fighter?.name, // Utiliser le nom du fighter récupéré
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
                label: fighter?.name, // Utiliser le nom du fighter récupéré
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
                label: fighter?.name, // Utiliser le nom du fighter récupéré
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
        labels: labelcac,
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
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                    <div className="flex flex-col space-y-4">

        <Bar options={options} data={data} />
            <Bar options={options2} data={data2} />
            <Bar options={options3} data={data3} />
            <Bar options={options4} data={data4} />
            </div>  
        </div>
    )
}

export default AttOgFightersBarChart
