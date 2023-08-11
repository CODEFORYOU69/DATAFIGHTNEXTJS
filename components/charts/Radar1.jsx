import React from 'react'
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
    // Créez des tableaux pour stocker les données de chaque round
    let att_fd_data = []
    let att_od_data = []
    let att_fg_data = []
    let att_og_data = []
    let def_fd_data = []
    let def_od_data = []
    let def_fg_data = []
    let def_og_data = []
    let cac_fd_data = []
    let cac_od_data = []
    let cac_fg_data = []
    let cac_og_data = []

    // Parcourir les rounds et extraire les données
    for (let round of rounds) {
        att_fd_data.push(
            round.att_fd_1_by_fighter1,
            round.att_fd_1_by_fighter2,
            round.att_fd_2_by_fighter1,
            round.att_fd_2_by_fighter2,
            round.att_fd_3_by_fighter1,
            round.att_fd_3_by_fighter2,
            round.att_fd_4_by_fighter1,
            round.att_fd_4_by_fighter2,
            round.att_fd_5_by_fighter1,
            round.att_fd_5_by_fighter2,
        )
        att_od_data.concat(
            round.att_od_1_by_fighter1,
            round.att_od_1_by_fighter2,
            round.att_od_2_by_fighter1,
            round.att_od_2_by_fighter2,
            round.att_od_3_by_fighter1,
            round.att_od_3_by_fighter2,
            round.att_od_4_by_fighter1,
            round.att_od_4_by_fighter2,
            round.att_od_5_by_fighter1,
            round.att_od_5_by_fighter2,
        )
        att_fg_data.concat(
            round.att_fg_1_by_fighter1,
            round.att_fg_1_by_fighter2,
            round.att_fg_2_by_fighter1,
            round.att_fg_2_by_fighter2,
            round.att_fg_3_by_fighter1,
            round.att_fg_3_by_fighter2,
            round.att_fg_4_by_fighter1,
            round.att_fg_4_by_fighter2,
            round.att_fg_5_by_fighter1,
            round.att_fg_5_by_fighter2,
        )
        att_og_data.concat(
            round.att_og_1_by_fighter1,
            round.att_og_1_by_fighter2,
            round.att_og_2_by_fighter1,
            round.att_og_2_by_fighter2,
            round.att_og_3_by_fighter1,
            round.att_og_3_by_fighter2,
            round.att_og_4_by_fighter1,
            round.att_og_4_by_fighter2,
            round.att_og_5_by_fighter1,
            round.att_og_5_by_fighter2,
        )
        def_fd_data.push(
            round.def_fd_1_by_fighter2,
            round.def_fd_2_by_fighter1,
            round.def_fd_2_by_fighter2,
            round.def_fd_3_by_fighter1,
            round.def_fd_3_by_fighter2,
            round.def_fd_4_by_fighter1,
            round.def_fd_4_by_fighter2,
            round.def_fd_5_by_fighter1,
            round.def_fd_5_by_fighter2,
        )
        def_od_data.concat(
            round.def_od_1_by_fighter1,
            round.def_od_1_by_fighter2,
            round.def_od_2_by_fighter1,
            round.def_od_2_by_fighter2,
            round.def_od_3_by_fighter1,
            round.def_od_3_by_fighter2,
            round.def_od_4_by_fighter1,
            round.def_od_4_by_fighter2,
            round.def_od_5_by_fighter1,
            round.def_od_5_by_fighter2,
        )
        def_fg_data.concat(
            round.def_fg_1_by_fighter1,
            round.def_fg_1_by_fighter2,
            round.def_fg_2_by_fighter1,
            round.def_fg_2_by_fighter2,
            round.def_fg_3_by_fighter1,
            round.def_fg_3_by_fighter2,
            round.def_fg_4_by_fighter1,
            round.def_fg_4_by_fighter2,
            round.def_fg_5_by_fighter1,
            round.def_fg_5_by_fighter2,
        )
        def_og_data.concat(
            round.def_og_1_by_fighter1,
            round.def_og_1_by_fighter2,
            round.def_og_2_by_fighter1,
            round.def_og_2_by_fighter2,
            round.def_og_3_by_fighter1,
            round.def_og_3_by_fighter2,
            round.def_og_4_by_fighter1,
            round.def_og_4_by_fighter2,
            round.def_og_5_by_fighter1,
            round.def_og_5_by_fighter2,
        )
        cac_fd_data.push(
            round.cac_fd_1_by_fighter2,
            round.cac_fd_2_by_fighter1,
            round.cac_fd_2_by_fighter2,
            round.cac_fd_3_by_fighter1,
            round.cac_fd_3_by_fighter2,
            round.cac_fd_4_by_fighter1,
            round.cac_fd_4_by_fighter2,
            round.cac_fd_5_by_fighter1,
            round.cac_fd_5_by_fighter2,
        )
        cac_od_data.concat(
            round.cac_od_1_by_fighter1,
            round.cac_od_1_by_fighter2,
            round.cac_od_2_by_fighter1,
            round.cac_od_2_by_fighter2,
            round.cac_od_3_by_fighter1,
            round.cac_od_3_by_fighter2,
            round.cac_od_4_by_fighter1,
            round.cac_od_4_by_fighter2,
            round.cac_od_5_by_fighter1,
            round.cac_od_5_by_fighter2,
        )
        cac_fg_data.concat(
            round.cac_fg_1_by_fighter1,
            round.cac_fg_1_by_fighter2,
            round.cac_fg_2_by_fighter1,
            round.cac_fg_2_by_fighter2,
            round.cac_fg_3_by_fighter1,
            round.cac_fg_3_by_fighter2,
            round.cac_fg_4_by_fighter1,
            round.cac_fg_4_by_fighter2,
            round.cac_fg_5_by_fighter1,
            round.cac_fg_5_by_fighter2,
        )
        cac_og_data.concat(
            round.cac_og_1_by_fighter1,
            round.cac_og_1_by_fighter2,
            round.cac_og_2_by_fighter1,
            round.cac_og_2_by_fighter2,
            round.cac_og_3_by_fighter1,
            round.cac_og_3_by_fighter2,
            round.cac_og_4_by_fighter1,
            round.cac_og_4_by_fighter2,
            round.cac_og_5_by_fighter1,
            round.cac_og_5_by_fighter2,
        )

        // ... et ainsi de suite pour chaque type d'action
    }

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
                label: 'Attaques fermee droite',
                data: att_fd_data,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
            },
            {
                label: ' attaques fermés gauches',
                data: att_fg_data,
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
            },
            {
                label: 'attaques ouverte droite',
                data: att_od_data,
                backgroundColor: 'rgba(255,205,86,0.2)',
                borderColor: 'rgba(255,205,86,1)',
                borderWidth: 1,
            },
            {
                label: 'attaques ouverte gauche',
                data: att_og_data,
                backgroundColor: 'rgba(255,205,86,0.2)',
                borderColor: 'rgba(255,205,86,1)',
                borderWidth: 1,
            },
            // ... et ainsi de suite pour chaque type d'action
        ],
    }
    const data2 = {
        labels: roundLabels,
        datasets: [
            {
                label: 'Defense fermee droite',
                data: def_fd_data,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
            },
            {
                label: ' Defense fermés gauches',
                data: def_fg_data,
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
            },
            {
                label: 'Defense ouverte droite',
                data: def_od_data,
                backgroundColor: 'rgba(255,205,86,0.2)',
                borderColor: 'rgba(255,205,86,1)',
                borderWidth: 1,
            },
            {
                label: 'Defense ouverte gauche',
                data: def_og_data,
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
                data: cac_fd_data,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
            },
            {
                label: ' Clinch fermés gauches',
                data: cac_fg_data,
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
            },
            {
                label: 'Clinch ouverte droite',
                data: cac_od_data,
                backgroundColor: 'rgba(255,205,86,0.2)',
                borderColor: 'rgba(255,205,86,1)',
                borderWidth: 1,
            },
            {
                label: 'Clinch ouverte gauche',
                data: cac_og_data,
                backgroundColor: 'rgba(255,205,86,0.2)',
                borderColor: 'rgba(255,205,86,1)',
                borderWidth: 1,
            },
            // ... et ainsi de suite pour chaque type d'action
        ],
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Radar Chart',
            },
        },
        scales: {
            r: {
                beginAtZero: true,
            },
        },
    }

    return (
        <div className="header flex flex-row flex-wrap">
            <Radar data={data} options={options} />
            <Radar data={data2} options={options} />
            <Radar data={data3} options={options} />
        </div>
    )
}

export default RadarChart
