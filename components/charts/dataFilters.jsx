export default function assignRoundData(fightsData, selectedFighterId) {
    console.log("🚀 ~ file: dataFilters.jsx:2 ~ assignRoundData ~ fightsData:", fightsData)
    console.log("Selected Fighter ID:", selectedFighterId);

    return (
        fightsData &&
        fightsData.map((fight) => {
            console.log("Fighter 1 ID:", fight.fighter1);
            console.log("Fighter 2 ID:", fight.fighter2);

            const updatedFight = { ...fight }
            updatedFight.rounds = fight.rounds.map((round) => {
                const selectedFighterData = {}
                const otherFighterData = {}

                for (let key in round) {
                    if (key.endsWith('_by_fighter1')) {
                        const newKey = key.replace('_by_fighter1', '')
                        if (fight?.fighter1_id === selectedFighterId[0]) {
                            console.log('fighter1??', fight.fighter1_id)
                            console.log("Assigning to selectedFighterData:", newKey, round[key]);
                            selectedFighterData[newKey] = round[key]
                        } else {
                            console.log("Assigning to otherFighterData:", newKey, round[key]);
                            otherFighterData[newKey] = round[key]
                        }
                    } else if (key.endsWith('_by_fighter2')) {
                        const newKey = key.replace('_by_fighter2', '')
                        if (fight?.fighter2_id === selectedFighterId[0]) {
                            console.log("Assigning to selectedFighterData:", newKey, round[key]);
                            selectedFighterData[newKey] = round[key]
                        } else {
                            console.log("Assigning to otherFighterData:", newKey, round[key]);
                            otherFighterData[newKey] = round[key]
                        }
                    } else {
                        selectedFighterData[key] = round[key]
                        otherFighterData[key] = round[key]
                    }
                }

                return {
                    round: round,
                    selectedFighterData: selectedFighterData,
                    otherFighterData: otherFighterData,
                }
            })

            return updatedFight
        })
    )
}
