import Link from 'next/link'
import { useState, useEffect } from 'react'

import { Spinner } from 'components'
import { Layout } from 'components/fighters'
import { roundService } from 'services'

export default Index

function Index() {
    const [rounds, setRounds] = useState(null)

    useEffect(() => {
        roundService.getAll().then((x) => setRounds(x))
    }, [])

    function deleteRound(id) {
        setRounds(
            rounds.map((x) => {
                if (x.id === id) {
                    x.isDeleting = true
                }
                return x
            }),
        )
        roundService.delete(id).then(() => {
            setRounds((rounds) => rounds.filter((x) => x.id !== id))
        })
    }

    return (
        <Layout>
            <h1>rounds</h1>
            <Link
                href="/rounds/addRound"
                className="btn btn-sm btn-success mb-2"
            >
                Add Fight
            </Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th style={{ width: '30%' }}>Event Year</th>
                        <th style={{ width: '30%' }}>Event Type</th>
                        <th style={{ width: '30%' }}>Event Name</th>
                        <th style={{ width: '30%' }}>category</th>
                        <th style={{ width: '30%' }}>Weight category</th>
                        <th style={{ width: '30%' }}>Fighter 1</th>
                        <th style={{ width: '30%' }}>Fighter 2</th>
                        <th style={{ width: '30%' }}>Winner</th>
                        <th style={{ width: '10%' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {rounds &&
                        rounds.map((fight) => (
                            <tr key={fight.id}>
                                <td>{fight.eventyear}</td>
                                <td>{fight.eventtype}</td>
                                <td>{fight.eventname}</td>
                                <td>{fight.category}</td>
                                <td>{fight.weightCategory}</td>
                                <td>
                                    {fight.fighter1_id.firstName}{' '}
                                    {fight.fighter1_id.lastName}
                                </td>
                                <td>
                                    {fight.fighter2_id.firstName}{' '}
                                    {fight.fighter2_id.lastName}
                                </td>
                                <td>{fight.winner_id}</td>
                                <td style={{ whiteSpace: 'nowrap' }}>
                                    <Link
                                        href={`/rounds/edit/${fight.id}`}
                                        className="btn btn-sm btn-primary me-1"
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        href={`/rounds/round`}
                                        className="btn btn-sm btn-primary me-1"
                                    >
                                        Add round
                                    </Link>
                                    <button
                                        onClick={() => deleteFight(fight.id)}
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
                        ))}
                    {!rounds && (
                        <tr>
                            <td colSpan="4">
                                <Spinner />
                            </td>
                        </tr>
                    )}
                    {rounds && !rounds.length && (
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="p-2">No rounds To Display</div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </Layout>
    )
}
