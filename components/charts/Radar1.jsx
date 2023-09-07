import React, {useState, useEffect} from 'react'
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js'
import calculateData from './CalculateDataCharts'
import { Radar } from 'react-chartjs-2'

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
)

// Supposons que les rounds sont passés en props au composant
const RadarChart = ({ rounds }) => {


    const [calculatedData, setCalculatedData] = useState({
        att_fd_data: 0,
        att_od_data: 0,
        att_fg_data: 0,
        att_og_data: 0,
        def_fd_data: 0,
        def_od_data: 0,
        def_fg_data: 0,
        def_og_data: 0,
        cac_fd_data: 0,
        cac_od_data: 0,
        cac_fg_data: 0,
        cac_og_data: 0,
    })
    
    useEffect(() => {
        const newCalculatedData = calculateData(rounds);  // Appel de la fonction calculateData
        setCalculatedData(newCalculatedData);  // Mise à jour de l'état avec les nouvelles données calculées
      }, [rounds]);    

    // Préparer les données pour le graphique radar

    let roundLabels = [
        'Ouverte Droite',
        'Ouverte Gauche',
        'Fermée Droite',
        'Fermée Gauche',
    ]

    const commonOptions = {
        borderWidth: 1,
        fill: true,
        tension: 0.1
      };
      
      const attackOptions = {
        ...commonOptions,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      };
      

    // Maintenant, "roundLabels" est un tableau de labels comme ["Round 1", "Round 2", "Round 3", ...]

    const data = {
        labels: roundLabels,
        datasets: [
          {
            label: 'Attaques',
            data: [
              calculatedData.att_od_data,
              calculatedData.att_og_data,
              calculatedData.att_fd_data,
              calculatedData.att_fg_data
            ],
            ...attackOptions  // Utilisation des options communes
          },
          {
            label: 'Défenses',
            data: [
              calculatedData.def_od_data,
              calculatedData.def_og_data,
              calculatedData.def_fd_data,
              calculatedData.def_fg_data
            ],
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            ...commonOptions  // Utilisation des options communes
          },
          {
            label: 'Clinch',
            data: [
              calculatedData.cac_od_data,
              calculatedData.cac_og_data,
              calculatedData.cac_fd_data,
              calculatedData.cac_fg_data
            ],
            backgroundColor: 'rgba(255,205,86,0.2)',
            borderColor: 'rgba(255,205,86,1)',
            ...commonOptions  // Utilisation des options communes
          },
        ],
      };
      
    const data2 = {
        labels: roundLabels,
        datasets: [
            {
                label: 'Defense fermee droite',
                data: [calculatedData.def_fd_data],
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
            },
            {
                label: ' Defense fermés gauches',
                data: [calculatedData.def_fg_data],
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
            },
            {
                label: 'Defense ouverte droite',
                data: [calculatedData.def_od_data],
                backgroundColor: 'rgba(255,205,86,0.2)',
                borderColor: 'rgba(255,205,86,1)',
                borderWidth: 1,
            },
            {
                label: 'Defense ouverte gauche',
                data: [calculatedData.def_og_data],
                backgroundColor: 'rgba(255,205,86,0.2)',
                borderColor: 'rgba(255,205,86,1)',
                borderWidth: 1,
            },
            // ... et ainsi de suite pour chaque type d'action
        ],
    }
    const data3 = {
        labels: roundLabels,
        datasets: [
            {
                label: 'Clinch fermee droite',
                data: [calculatedData.cac_fd_data],
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
            },
            {
                label: ' Clinch fermés gauches',
                data: [calculatedData.cac_fg_data],
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
            },
            {
                label: 'Clinch ouverte droite',
                data: [calculatedData.cac_od_data],
                backgroundColor: 'rgba(255,205,86,0.2)',
                borderColor: 'rgba(255,205,86,1)',
                borderWidth: 1,
            },
            {
                label: 'Clinch ouverte gauche',
                data: [calculatedData.cac_og_data],
                backgroundColor: 'rgba(255,205,86,0.2)',
                borderColor: 'rgba(255,205,86,1)',
                borderWidth: 1,
            },
        ],
    }

    const options = {
        responsive: true,
        maintainAspectRatio: true, 
        plugins: {
            legend: {
                position: 'bottom',  // Change this from 'top' to 'bottom'
            },
            title: {
                display: true,
                text: 'Radar Chart',
            },
        },
        scales: {
            r: {
                beginAtZero: true,
                max: 30,
            },
        },
    };
    

    return (
        <div className="flex flex-col md:flex-row flex-wrap justify-between">
        <div className="md:w-1/3 p-2 rounded-lg shadow-md bg-white">
            <Radar data={data} options={options} />
        </div>
        <div className="md:w-1/3 p-2 rounded-lg shadow-md bg-white">
            <Radar data={data2} options={options} />
        </div>
        <div className="md:w-1/3 p-2 rounded-lg shadow-md bg-white">
            <Radar data={data3} options={options} />
        </div>
    </div>
    
    )
}

export default RadarChart
