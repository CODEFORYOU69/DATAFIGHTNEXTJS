import React, { useState, useEffect } from 'react'
import NumberFightBarChart from './Bar'
import RadarChart from './Radar1'
import assignRoundData from './dataFilters'

import AttOgFightersBarChart from './FightersBarChart'


const ChartsDash = ({
    data,
    dataset2,
    options,
    options2,
    options3,
    options4,
    label,
    selectedFighters,
}) => {

    const [updatedFightsData, setUpdatedFightsData] = useState([])



    useEffect(() => {
        const updatedData = assignRoundData(data, selectedFighters)
        setUpdatedFightsData(updatedData)
    }, [data, selectedFighters])


    let allRounds = []
    let datafighter = []

    updatedFightsData &&
        updatedFightsData[0] &&
        updatedFightsData.forEach((fight) => {
            datafighter = datafighter.concat(fight.rounds)
        })


    data &&
        data[0] &&
        data.forEach((fight) => {
            allRounds = allRounds.concat(fight.rounds)
        })
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
    let att_fd_data1 = []
    let att_od_data1 = []
    let att_fg_data1 = []
    let att_og_data1 = []
    let def_fd_data1 = []
    let def_od_data1 = []
    let def_fg_data1 = []
    let def_og_data1 = []
    let cac_fd_data1 = []
    let cac_od_data1 = []
    let cac_fg_data1 = []
    let cac_og_data1 = []
    let att_fd_data2 = []
    let att_od_data2 = []
    let att_fg_data2 = []
    let att_og_data2 = []
    let def_fd_data2 = []
    let def_od_data2 = []
    let def_fg_data2 = []
    let def_og_data2 = []
    let cac_fd_data2 = []
    let cac_od_data2 = []
    let cac_fg_data2 = []
    let cac_og_data2 = []

    for (let round of datafighter) {
        // Attaque fermee droite par fighterseleced
        att_fd_data1.push(
            round.selectedFighterData.att_fd_1,
            round.selectedFighterData.att_fd_2,
            round.selectedFighterData.att_fd_3,
            round.selectedFighterData.att_fd_4,
            round.selectedFighterData.att_fd_5,
        )
        // Attaque ouverte droite par fighterseleced
        att_od_data1.push(
            round.selectedFighterData.att_od_1,
            round.selectedFighterData.att_od_2,
            round.selectedFighterData.att_od_3,
            round.selectedFighterData.att_od_4,
            round.selectedFighterData.att_od_5,
        )
        // Attaque fermee gauche par fighterseleced
        att_fg_data1.push(
            round.selectedFighterData.att_fg_1,
            round.selectedFighterData.att_fg_2,
            round.selectedFighterData.att_fg_3,
            round.selectedFighterData.att_fg_4,
            round.selectedFighterData.att_fg_5,
        )
        // Attaque ouverte gauche par fighterseleced
        att_og_data1.push(
            round.selectedFighterData.att_og_1,
            round.selectedFighterData.att_og_2,
            round.selectedFighterData.att_og_3,
            round.selectedFighterData.att_og_4,
            round.selectedFighterData.att_og_5,
        )
        // Defense fermee droite par fighterseleced
        def_fd_data1.push(
            round.selectedFighterData.def_fd_1,
            round.selectedFighterData.def_fd_2,
            round.selectedFighterData.def_fd_3,
            round.selectedFighterData.def_fd_4,
            round.selectedFighterData.def_fd_5,
        )
        // Defense ouverte droite par fighterseleced
        def_od_data1.push(
            round.selectedFighterData.def_od_1,
            round.selectedFighterData.def_od_2,
            round.selectedFighterData.def_od_3,
            round.selectedFighterData.def_od_4,
            round.selectedFighterData.def_od_5,
        )
        // Defense fermee gauche par fighterseleced
        def_fg_data1.push(
            round.selectedFighterData.def_fg_1,
            round.selectedFighterData.def_fg_2,
            round.selectedFighterData.def_fg_3,
            round.selectedFighterData.def_fg_4,
            round.selectedFighterData.def_fg_5,
        )
        // Defense ouverte gauche par fighterseleced
        def_og_data1.push(
            round.selectedFighterData.def_og_1,
            round.selectedFighterData.def_og_2,
            round.selectedFighterData.def_og_3,
            round.selectedFighterData.def_og_4,
            round.selectedFighterData.def_og_5,
        )
        // clinch
        cac_fd_data1.push(
            round.selectedFighterData.cac_fd_1,
            round.selectedFighterData.cac_fd_2,
            round.selectedFighterData.cac_fd_3,
            round.selectedFighterData.cac_fd_4,
            round.selectedFighterData.cac_fd_5,
        )
        cac_od_data1.push(
            round.selectedFighterData.cac_od_1,
            round.selectedFighterData.cac_od_2,
            round.selectedFighterData.cac_od_3,
            round.selectedFighterData.cac_od_4,
            round.selectedFighterData.cac_od_5,
        )
        cac_fg_data1.push(
            round.selectedFighterData.cac_fg_1,
            round.selectedFighterData.cac_fg_2,
            round.selectedFighterData.cac_fg_3,
            round.selectedFighterData.cac_fg_4,
            round.selectedFighterData.cac_fg_5,
        )
        cac_og_data1.push(
            round.selectedFighterData.cac_fg_1,
            round.selectedFighterData.cac_fg_2,
            round.selectedFighterData.cac_fg_3,
            round.selectedFighterData.cac_fg_4,
            round.selectedFighterData.cac_fg_5,
        )
    }
    for (let round of datafighter) {
        // Attaque fermee droite par fighterseleced
        att_fd_data2.push(
            round.otherFighterData.att_fd_1,
            round.otherFighterData.att_fd_2,
            round.otherFighterData.att_fd_3,
            round.otherFighterData.att_fd_4,
            round.otherFighterData.att_fd_5,
        )
        // Attaque ouverte droite par fighterseleced
        att_od_data2.push(
            round.otherFighterData.att_od_1,
            round.otherFighterData.att_od_2,
            round.otherFighterData.att_od_3,
            round.otherFighterData.att_od_4,
            round.otherFighterData.att_od_5,
        )
        // Attaque fermee gauche par fighterseleced
        att_fg_data2.push(
            round.otherFighterData.att_fg_1,
            round.otherFighterData.att_fg_2,
            round.otherFighterData.att_fg_3,
            round.otherFighterData.att_fg_4,
            round.otherFighterData.att_fg_5,
        )
        // Attaque ouverte gauche par fighterseleced
        att_og_data2.push(
            round.otherFighterData.att_og_1,
            round.otherFighterData.att_og_2,
            round.otherFighterData.att_og_3,
            round.otherFighterData.att_og_4,
            round.otherFighterData.att_og_5,
        )
        // Defense fermee droite par fighterseleced
        def_fd_data2.push(
            round.otherFighterData.def_fd_1,
            round.otherFighterData.def_fd_2,
            round.otherFighterData.def_fd_3,
            round.otherFighterData.def_fd_4,
            round.otherFighterData.def_fd_5,
        )
        // Defense ouverte droite par fighterseleced
        def_od_data2.push(
            round.otherFighterData.def_od_1,
            round.otherFighterData.def_od_2,
            round.otherFighterData.def_od_3,
            round.otherFighterData.def_od_4,
            round.otherFighterData.def_od_5,
        )
        // Defense fermee gauche par fighterseleced
        def_fg_data2.push(
            round.otherFighterData.def_fg_1,
            round.otherFighterData.def_fg_2,
            round.otherFighterData.def_fg_3,
            round.otherFighterData.def_fg_4,
            round.otherFighterData.def_fg_5,
        )
        // Defense ouverte gauche par fighterseleced
        def_og_data2.push(
            round.otherFighterData.def_og_1,
            round.otherFighterData.def_og_2,
            round.otherFighterData.def_og_3,
            round.otherFighterData.def_og_4,
            round.otherFighterData.def_og_5,
        )
        // clinch
        cac_fd_data2.push(
            round.otherFighterData.cac_fd_1,
            round.otherFighterData.cac_fd_2,
            round.otherFighterData.cac_fd_3,
            round.otherFighterData.cac_fd_4,
            round.otherFighterData.cac_fd_5,
        )
        cac_od_data2.push(
            round.otherFighterData.cac_od_1,
            round.otherFighterData.cac_od_2,
            round.otherFighterData.cac_od_3,
            round.otherFighterData.cac_od_4,
            round.otherFighterData.cac_od_5,
        )
        cac_fg_data2.push(
            round.otherFighterData.cac_fg_1,
            round.otherFighterData.cac_fg_2,
            round.otherFighterData.cac_fg_3,
            round.otherFighterData.cac_fg_4,
            round.otherFighterData.cac_fg_5,
        )
        cac_og_data2.push(
            round.otherFighterData.cac_fg_1,
            round.otherFighterData.cac_fg_2,
            round.otherFighterData.cac_fg_3,
            round.otherFighterData.cac_fg_4,
            round.otherFighterData.cac_fg_5,
        )
    }

    // Parcourir les rounds et extraire les données
    for (let round of allRounds) {
        // Attaque fermee droite par fighter1 et fighter2
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

        // Attaque ouverte droite par fighter1 et fighter2
        att_od_data.push(
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

        // Attaque fermee gauche par fighter1 et fighter2
        att_fg_data.push(
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
        // Attaque fermee gauche par fighter1

        // Attaque ouverte gauche par fighter1 et fighter2
        att_og_data.push(
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
        // Attaque ouverte gauche par fighter1
        // Defense fermee droite par fighter1 et fighter2
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
        // Defense fermee droite par fighter1

        // Defense ouverte droite par fighter1 et fighter2
        def_od_data.push(
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
        // Defense ouverte droite par fighter1
        // Defense fermee gauche par fighter1 et fighter2
        def_fg_data.push(
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
        // Defense fermee gauche par fighter1

        // Defense ouverte gauche par fighter1 et fighter2
        def_og_data.push(
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

        cac_od_data.push(
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

        cac_fg_data.push(
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

        cac_og_data.push(
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
    }
    // add all the data of the array to get the total of each type of attack

    let sum_att_od_data1 = att_od_data1.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    )

    let sum_att_fd_data1 = att_fd_data1.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    )

    let sum_att_og_data1 = att_og_data1.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    )

    let sum_att_fg_data1 = att_fg_data1.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    )

    let sum_def_od_data1 = def_od_data1.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    )

    let sum_def_fd_data1 = def_fd_data1.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    )
    let sum_def_og_data1 = def_og_data1.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    )

    let sum_def_fg_data1 = def_fg_data1.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    )
    let sum_att_od_data2 = att_od_data2.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    )

    let sum_att_fd_data2 = att_fd_data2.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    )

    let sum_att_og_data2 = att_og_data2.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    )

    let sum_att_fg_data2 = att_fg_data2.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    )

    let sum_def_od_data2 = def_od_data2.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    )

    let sum_def_fd_data2 = def_fd_data2.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    )
    let sum_def_og_data2 = def_og_data2.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    )

    let sum_def_fg_data2 = def_fg_data2.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    )
    let sum_att_od_data = att_od_data.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    )

    let sum_att_fd_data = att_fd_data.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    )

    let sum_att_og_data = att_og_data.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    )

    let sum_att_fg_data = att_fg_data.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    )

    let sum_def_od_data = def_od_data.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    )

    let sum_def_fd_data = def_fd_data.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    )
    let sum_def_og_data = def_og_data.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    )

    let sum_def_fg_data = def_fg_data.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    )

    let sum_cac_od_data = cac_od_data.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    )

    let sum_cac_fd_data = cac_fd_data.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    )

    let sum_cac_og_data = cac_og_data.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    )

    let sum_cac_fg_data = cac_fg_data.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    )
    let sum_cac_od_data1 = cac_od_data1.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    )

    let sum_cac_fd_data1 = cac_fd_data1.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    )

    let sum_cac_og_data1 = cac_og_data1.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    )

    let sum_cac_fg_data1 = cac_fg_data1.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    )
    let sum_cac_od_data2 = cac_od_data2.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    )

    let sum_cac_fd_data2 = cac_fd_data2.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    )

    let sum_cac_og_data2 = cac_og_data2.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    )

    let sum_cac_fg_data2 = cac_fg_data2.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    )

    let arrayofSumAtt = []
    let arrayofSumDef = []
    let arrayofSumCac = []
    let arrayOfSumAtt1 = []
    let arrayOfSumAtt2 = []
    let arrayOfSumDef1 = []
    let arrayOfSumDef2 = []
    let arrayOfSumCac1 = []
    let arrayOfSumCac2 = []
    arrayofSumAtt.push(
        sum_att_og_data,
        sum_att_od_data,
        sum_att_fg_data,
        sum_att_fd_data,
    )
    arrayofSumDef.push(
        sum_def_og_data,
        sum_def_od_data,
        sum_def_fg_data,
        sum_def_fd_data,
    )
    arrayofSumCac.push(
        sum_cac_og_data,
        sum_cac_od_data,
        sum_cac_fg_data,
        sum_cac_fd_data,
    )
    arrayOfSumAtt1.push(
        sum_att_og_data1,
        sum_att_od_data1,
        sum_att_fg_data1,
        sum_att_fd_data1,
    )
    arrayOfSumAtt2.push(
        sum_att_og_data2,
        sum_att_od_data2,
        sum_att_fg_data2,
        sum_att_fd_data2,
    )
    arrayOfSumDef1.push(
        sum_def_og_data1,
        sum_def_od_data1,
        sum_def_fg_data1,
        sum_def_fd_data1,
    )
    arrayOfSumDef2.push(
        sum_def_og_data2,
        sum_def_od_data2,
        sum_def_fg_data2,
        sum_def_fd_data2,
    )
    arrayOfSumCac1.push(
        sum_cac_og_data1,
        sum_cac_od_data1,
        sum_cac_fg_data1,
        sum_cac_fd_data1,
    )
    arrayOfSumCac2.push(
        sum_cac_og_data2,
        sum_cac_od_data2,
        sum_cac_fg_data2,
        sum_cac_fd_data2,
    )
    
    const numberOfFightFiltered = data && data.length


    const labels = ['Number of fight']

    const dataset1 = [numberOfFightFiltered]
    return (
        <div className="flex flex-col  justify-center items-center mt-10">
            <h1 className="text-center">Dashboard</h1>

            <NumberFightBarChart
                labels={labels}
                dataset1={dataset1}
                dataset2={dataset2}
                options={options}
            />
            <AttOgFightersBarChart
                label={label}
                dataset3={arrayOfSumAtt1}
                dataset4={arrayOfSumAtt2}
                dataset5={arrayOfSumDef1}
                dataset6={arrayOfSumDef2}
                dataset7={arrayOfSumCac1}
                dataset8={arrayOfSumCac2}
                dataset9={arrayofSumAtt}
                dataset10={arrayofSumDef}
                dataset11={arrayofSumCac}
                options2={options2}
                options3={options3}
                options4={options4}
                selectedFighters={selectedFighters}
                data={data}
            />

        </div>
    )

}

export default ChartsDash
