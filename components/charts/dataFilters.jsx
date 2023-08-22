
export default function assignRoundData(fightsData, selectedFighterId) {
    return (
        fightsData &&
        fightsData[0] &&
        fightsData.map((fight) => {
            const updatedFight = { ...fight }

            // Pour chaque combat, séparez les données du round en deux objets : un pour le combattant sélectionné et un pour l'autre combattant.
            updatedFight.rounds = fight.rounds.map((round) => {
                const selectedFighterData = {}
                console.log("🚀 ~ file: dataFilters.jsx:64 ~ updatedFight.rounds=fight.rounds.map ~ selectedFighterData:", selectedFighterData)

                const otherFighterData = {}
                console.log("🚀 ~ file: dataFilters.jsx:67 ~ updatedFight.rounds=fight.rounds.map ~ otherFighterData:", otherFighterData)

                for (let key in round) {
                    // Pour chaque clé dans le round, vérifiez si elle se termine par '_by_fighter1' ou '_by_fighter2'
                    if (key.endsWith('_by_fighter1')) {
                        const newKey = key.replace('_by_fighter1', '') // Enlevez le suffixe '_by_fighter1'
                        // Si le combattant sélectionné est 'fighter1', alors assignez la valeur à 'selectedFighterData', sinon à 'otherFighterData'
                        if (
                            fight.fighter1.toString() ===
                            selectedFighterId.toString()
                        ) {
                            selectedFighterData[newKey] = round[key]
                        } else {
                            otherFighterData[newKey] = round[key]
                        }
                    } else if (key.endsWith('_by_fighter2')) {
                        const newKey = key.replace('_by_fighter2', '') // Enlevez le suffixe '_by_fighter2'
                        // Si le combattant sélectionné est 'fighter2', alors assignez la valeur à 'selectedFighterData', sinon à 'otherFighterData'
                        if (fight.fighter1 === selectedFighterId) {
                            selectedFighterData[newKey] = round[key]
                        } else {
                            otherFighterData[newKey] = round[key]
                        }
                    } else {
                        // Pour les autres clés (qui ne se terminent pas par '_by_fighter1' ou '_by_fighter2'), ajoutez-les aux deux objets.
                        selectedFighterData[key] = round[key]
                        otherFighterData[key] = round[key]
                    }
                }

                // Return as a single round object, not a separate object
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

