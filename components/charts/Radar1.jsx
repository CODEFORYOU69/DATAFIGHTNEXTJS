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
    console.log("🚀 ~ file: Radar1.jsx:41 ~ RadarChart ~ calculatedData:", calculatedData)
    
    // Créez des tableaux pour stocker les données de chaque round
    // Initialisation des variables à 0
    useEffect(() => {
let att_fd_data = 0;
("🚀 ~ file: Radar1.jsx:28 ~ RadarChart ~ att_fd_data:", calculatedData.att_fd_data)
let att_od_data = 0;
console.log("🚀 ~ file: Radar1.jsx:30 ~ RadarChart ~ att_od_data:", att_od_data)
let att_fg_data = 0;
let att_og_data = 0;
console.log("🚀 ~ file: Radar1.jsx:33 ~ RadarChart ~ att_og_data:", att_og_data)
let def_fd_data = 0;
let def_od_data = 0;
let def_fg_data = 0;
let def_og_data = 0;
let cac_fd_data = 0;
let cac_od_data = 0;
let cac_fg_data = 0;
let cac_og_data = 0;

// Parcourir les rounds et extraire les données
for (let round of rounds) {
    // Addition des valeurs pour chaque type d'action
    att_fd_data += round.att_fd_1_by_fighter1 + round.att_fd_1_by_fighter2 + round.att_fd_2_by_fighter1 + round.att_fd_2_by_fighter2 + round.att_fd_3_by_fighter1 + round.att_fd_3_by_fighter2 + round.att_fd_4_by_fighter1 + round.att_fd_4_by_fighter2 + round.att_fd_5_by_fighter1 + round.att_fd_5_by_fighter2;
    att_od_data += round.att_od_1_by_fighter1 + round.att_od_1_by_fighter2 + round.att_od_2_by_fighter1 + round.att_od_2_by_fighter2 + round.att_od_3_by_fighter1 + round.att_od_3_by_fighter2 + round.att_od_4_by_fighter1 + round.att_od_4_by_fighter2 + round.att_od_5_by_fighter1 + round.att_od_5_by_fighter2;
    att_fg_data += round.att_fg_1_by_fighter1 + round.att_fg_1_by_fighter2 + round.att_fg_2_by_fighter1 + round.att_fg_2_by_fighter2 + round.att_fg_3_by_fighter1 + round.att_fg_3_by_fighter2 + round.att_fg_4_by_fighter1 + round.att_fg_4_by_fighter2 + round.att_fg_5_by_fighter1 + round.att_fg_5_by_fighter2;
    att_og_data += round.att_og_1_by_fighter1 + round.att_og_1_by_fighter2 + round.att_og_2_by_fighter1 + round.att_og_2_by_fighter2 + round.att_og_3_by_fighter1 + round.att_og_3_by_fighter2 + round.att_og_4_by_fighter1 + round.att_og_4_by_fighter2 + round.att_og_5_by_fighter1 + round.att_og_5_by_fighter2;
    def_fd_data += round.def_fd_1_by_fighter2 + round.def_fd_2_by_fighter1 + round.def_fd_2_by_fighter2 + round.def_fd_3_by_fighter1 + round.def_fd_3_by_fighter2 + round.def_fd_4_by_fighter1 + round.def_fd_4_by_fighter2 + round.def_fd_5_by_fighter1 + round.def_fd_5_by_fighter2;
    def_od_data += round.def_od_1_by_fighter1 + round.def_od_1_by_fighter2 + round.def_od_2_by_fighter1 + round.def_od_2_by_fighter2 + round.def_od_3_by_fighter1 + round.def_od_3_by_fighter2 + round.def_od_4_by_fighter1 + round.def_od_4_by_fighter2 + round.def_od_5_by_fighter1 + round.def_od_5_by_fighter2;
    def_fg_data += round.def_fg_1_by_fighter1 + round.def_fg_1_by_fighter2 + round.def_fg_2_by_fighter1 + round.def_fg_2_by_fighter2 + round.def_fg_3_by_fighter1 + round.def_fg_3_by_fighter2 + round.def_fg_4_by_fighter1 + round.def_fg_4_by_fighter2 + round.def_fg_5_by_fighter1 + round.def_fg_5_by_fighter2;
    def_og_data += round.def_og_1_by_fighter1 + round.def_og_1_by_fighter2 + round.def_og_2_by_fighter1 + round.def_og_2_by_fighter2 + round.def_og_3_by_fighter1 + round.def_og_3_by_fighter2 + round.def_og_4_by_fighter1 + round.def_og_4_by_fighter2 + round.def_og_5_by_fighter1 + round.def_og_5_by_fighter2;
    cac_fd_data += round.cac_fd_1_by_fighter2 + round.cac_fd_2_by_fighter1 + round.cac_fd_2_by_fighter2 + round.cac_fd_3_by_fighter1 + round.cac_fd_3_by_fighter2 + round.cac_fd_4_by_fighter1 + round.cac_fd_4_by_fighter2 + round.cac_fd_5_by_fighter1 + round.cac_fd_5_by_fighter2;
    cac_od_data += round.cac_od_1_by_fighter1 + round.cac_od_1_by_fighter2 + round.cac_od_2_by_fighter1 + round.cac_od_2_by_fighter2 + round.cac_od_3_by_fighter1 + round.cac_od_3_by_fighter2 + round.cac_od_4_by_fighter1 + round.cac_od_4_by_fighter2 + round.cac_od_5_by_fighter1 + round.cac_od_5_by_fighter2;
    cac_fg_data += round.cac_fg_1_by_fighter1 + round.cac_fg_1_by_fighter2 + round.cac_fg_2_by_fighter1 + round.cac_fg_2_by_fighter2 + round.cac_fg_3_by_fighter1 + round.cac_fg_3_by_fighter2 + round.cac_fg_4_by_fighter1 + round.cac_fg_4_by_fighter2 + round.cac_fg_5_by_fighter1 + round.cac_fg_5_by_fighter2;
    cac_og_data += round.cac_og_1_by_fighter1 + round.cac_og_1_by_fighter2 + round.cac_og_2_by_fighter1 + round.cac_og_2_by_fighter2 + round.cac_og_3_by_fighter1 + round.cac_og_3_by_fighter2 + round.cac_og_4_by_fighter1 + round.cac_og_4_by_fighter2 + round.cac_og_5_by_fighter1 + round.cac_og_5_by_fighter2;



        
    }
    setCalculatedData({
        att_fd_data,
        att_od_data,
        att_fg_data,
        att_og_data,
        def_fd_data,
        def_od_data,
        def_fg_data,
        def_og_data,
        cac_fd_data,
        cac_od_data,
        cac_fg_data,
        cac_og_data,
    });
}, [rounds])

    // Préparer les données pour le graphique radar

    let roundLabels = [
        'Ouverte Droite',
        'Ouverte Gauche',
        'Fermée Droite',
        'Fermée Gauche',
    ]

    // Maintenant, "roundLabels" est un tableau de labels comme ["Round 1", "Round 2", "Round 3", ...]

    const data = {
        labels: roundLabels,
        datasets: [
            {
                label: 'Attaques',
                data: [
                    calculatedData.att_od_data,  // Ouverte Droite
                    calculatedData.att_og_data,  // Ouverte Gauche
                    calculatedData.att_fd_data,  // Fermée Droite
                    calculatedData.att_fg_data   // Fermée Gauche
                ],
                backgroundColor: 'rgba(75,192,192,0.2)',  // Couleur de remplissage
                borderColor: 'rgba(75,192,192,1)',  // Couleur de la bordure
                borderWidth: 1,  // Largeur de la bordure
                fill: true,  // Remplir l'intérieur
                tension: 0.1  // Lier les points avec une certaine tension (0 pour des lignes droites)
            },
            {
                label: ' defenses',
                data: [
                    calculatedData.def_od_data,  // Ouverte Droite
                    calculatedData.def_og_data,  // Ouverte Gauche
                    calculatedData.def_fd_data,  // Fermée Droite
                    calculatedData.def_fg_data   // Fermée Gauche
                ],
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                fill: true,  // Remplir l'intérieur
                tension: 0.1  // Lier les points avec une certaine tension (0 pour des lignes droites)
            },
            {
                label: 'clinch',
                data: [
                    calculatedData.cac_od_data,  // Ouverte Droite
                    calculatedData.cac_og_data,  // Ouverte Gauche
                    calculatedData.cac_fd_data,  // Fermée Droite
                    calculatedData.cac_fg_data   // Fermée Gauche
                ],
                backgroundColor: 'rgba(255,205,86,0.2)',
                borderColor: 'rgba(255,205,86,1)',
                borderWidth: 1,
                fill: true,  // Remplir l'intérieur
                tension: 0.1  // Lier les points avec une certaine tension (0 pour des lignes droites)
            },
        ],
    }
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
