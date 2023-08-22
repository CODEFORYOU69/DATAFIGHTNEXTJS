import Link from 'next/link'
import { useState, useEffect } from 'react'

import { Spinner } from 'components'
import { Layout } from 'components/fighters'
import { fightService } from 'services'

export default Index

function Index() {
    const [fights, setFights] = useState(null)

    useEffect(() => {
        fightService.getAll().then((x) => setFights(x))
    }, [])
    // for each fight  determine the winner in winner_id field if two same id  set this id in fight wineer  of the current fight

    const fightWinner = fights
        ? fights.map((fight) => {
            if (!fight.winner_id || fight.winner_id.length < 2) {
                return 'finish the fight'
            } else if (
                fight.winner_id[0].id !== fight.winner_id[1].id &&
                fight.winner_id.length === 3
            ) {
                return fight.winner_id[2]
            } else return fight.winner_id[0]
        })
        : []

    function deleteFight(id) {
        setFights(
            fights.map((x) => {
                if (x.id === id) {
                    x.isDeleting = true
                }
                return x
            }),
        )
        fightService.delete(id).then(() => {
            setFights((fights) => fights.filter((x) => x.id !== id))
        })
    }

    return (
        <Layout>
            <div className="">
                <h1>Fights</h1>
                <div className="md:hidden ">
                    <p className='text-red-600 inline'>Add Round is only available on tablet or desktop devices.</p>
                </div>
                <Link
                    href="/fights/addFight"
                    className="btn btn-sm btn-success mb-2"
                >
                    Add Fight
                </Link>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th style={{ width: '30%' }}>Created By</th>
                            <th style={{ width: '30%' }}>Event Year</th>
                            <th style={{ width: '30%' }}>Event Type</th>
                            <th style={{ width: '30%' }}>Event Name</th>
                            <th style={{ width: '30%' }}>category</th>
                            <th style={{ width: '30%' }}>Weight category</th>
                            <th style={{ width: '30%' }}>Fighter 1</th>
                            <th style={{ width: '30%' }}>Fighter 2</th>
                            <th style={{ width: '30%' }}>Round Saved</th>
                            <th style={{ width: '30%' }}>Winner</th>
                            <th style={{ width: '10%' }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {fights &&
                            fights.map((fight, index) => {
                                const filteredFightWinner = fightWinner.filter(
                                    (winner) => {
                                        return (
                                            winner &&
                                            typeof winner === 'object' &&
                                            (winner.id === fight.fighter1_id.id ||
                                                winner.id === fight.fighter2_id.id)
                                        )
                                    },
                                )
                                const winnerIndex =
                                    index < fightWinner.length ? index : -1
                                return (
                                    <tr key={fight.id}>
                                        <td>
                                            {fight.createdBy.firstName}{' '}
                                            {fight.createdBy.lastName}
                                        </td>
                                        <td>{fight.eventyear}</td>
                                        <td>{fight.eventtype}</td>
                                        <td>{fight.eventname}</td>
                                        <td>{fight.category}</td>
                                        <td>{fight.weightcat}</td>
                                        <td>
                                            {fight.fighter1_id.firstName}{' '}
                                            {fight.fighter1_id.lastName}
                                        </td>
                                        <td>
                                            {fight.fighter2_id.firstName}{' '}
                                            {fight.fighter2_id.lastName}
                                        </td>
                                        <td>{fight.rounds.length}</td>
                                        <td>
                                            {winnerIndex >= 0 ? (
                                                typeof fightWinner[winnerIndex] ===
                                                    'object' ? (
                                                    <div>
                                                        {
                                                            fightWinner[winnerIndex]
                                                                .firstName
                                                        }{' '}
                                                        {
                                                            fightWinner[winnerIndex]
                                                                .lastName
                                                        }
                                                    </div>
                                                ) : (
                                                    fightWinner[winnerIndex]
                                                )
                                            ) : (
                                                'finish the fight'
                                            )}
                                        </td>
                                        <td style={{ whiteSpace: 'nowrap' }}>
                                            <Link
                                                href={`/fights/edit/${fight.id}`}
                                                className="btn btn-sm btn-primary me-1"
                                            >
                                                Edit
                                            </Link>
                                            <Link
                                                href={`/addround/addRound?fightId=${fight.id}`}
                                                className="btn btn-sm btn-primary me-1 hidden md:block"
                                            >
                                                Add round
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    deleteFight(fight.id)
                                                }
                                                className="btn btn-sm btn-danger btn-delete-fight"
                                                style={{ width: '60px' }}
                                                disabled={fight.isDeleting}
                                            >
                                                {fight.isDeleting ? (
                                                    <span className="spinner-border spinner-border-sm"></span>
                                                ) : (
                                                    <span>Delete</span>
                                                )}
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        {!fights && (
                            <tr>
                                <td colSpan="4">
                                    <Spinner />
                                </td>
                            </tr>
                        )}
                        {fights && !fights.length && (
                            <tr>
                                <td colSpan="4" className="text-center">
                                    <div className="p-2">No Fights To Display</div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}
