export default function assignRoundData(fightsData, selectedFighterId) {
    

    return (
        fightsData &&
        fightsData.map((fight) => {
      

            const updatedFight = { ...fight }
            updatedFight.rounds = fight.rounds.map((round) => {
                const selectedFighterData = {}
                const otherFighterData = {}

                for (let key in round) {
                    if (key.endsWith('_by_fighter1')) {
                        const newKey = key.replace('_by_fighter1', '')
                        if (fight?.fighter1_id === selectedFighterId[0]) {
                            
                            selectedFighterData[newKey] = round[key]
                        } else {
                            otherFighterData[newKey] = round[key]
                        }
                    } else if (key.endsWith('_by_fighter2')) {
                        const newKey = key.replace('_by_fighter2', '')
                        if (fight?.fighter2_id === selectedFighterId[0]) {
                            selectedFighterData[newKey] = round[key]
                        } else {
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
