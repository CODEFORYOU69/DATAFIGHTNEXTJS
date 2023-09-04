import Link from 'next/link'
import { useState, useEffect } from 'react'

import { Spinner } from 'components'
import { Layout } from 'components/fighters'
import { fighterService } from 'services'

export default Index

function Index() {
    const [fighters, setFighters] = useState(null)



    useEffect(() => {
        fighterService.getAll().then((x) => setFighters(x))
    }, [])

    function deleteFighter(id) {
        setFighters(
            fighters.map((x) => {
                if (x.id === id) {
                    x.isDeleting = true
                }
                return x
            }),
        )
        fighterService.delete(id).then(() => {
            setFighters((fighters) => fighters.filter((x) => x.id !== id))
        })
    }

    return (
        <Layout>
            <h1 className='mt-4'>Fighters</h1>
            <Link
                href="/fighters/addFighter"
                className="btn btn-sm btn-success mb-2"
            >
                Add Fighter
            </Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th style={{ width: '30%' }}>photo</th>
                        <th style={{ width: '30%' }}>First Name</th>
                        <th style={{ width: '30%' }}>Last Name</th>
                        <th style={{ width: '30%' }}>Sex</th>
                        <th style={{ width: '30%' }}>category</th>
                        <th style={{ width: '30%' }}>Weight category</th>
                        <th style={{ width: '30%' }}>Date of Birth</th>
                        <th style={{ width: '30%' }}>country</th>
                        <th style={{ width: '10%' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {fighters &&
                        fighters.map((fighter) => (
                            <tr key={fighter.id}>
                                <td>
                                    <img

                                    src={fighter?.photo} alt="fighter photo" />
                                    
                                    </td>
                                <td>{fighter.firstName}</td>
                                <td>{fighter.lastName}</td>
                                <td>{fighter.sex}</td>
                                <td>{fighter.category}</td>
                                <td>{fighter.weightCategory}</td>
                                <td>{fighter.birthDate}</td>
                                <td>{fighter.country}</td>
                                <td style={{ whiteSpace: 'nowrap' }}>
                                    <Link
                                        href={`/fighters/edit/${fighter.id}`}
                                        className="btn btn-sm btn-primary me-1"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() =>
                                            deleteFighter(fighter.id)
                                        }
                                        className="btn btn-sm btn-danger btn-delete-fighter"
                                        style={{ width: '60px' }}
                                        disabled={fighter.isDeleting}
                                    >
                                        {fighter.isDeleting ? (
                                            <span className="spinner-border spinner-border-sm"></span>
                                        ) : (
                                            <span>Delete</span>
                                        )}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    {!fighters && (
                        <tr>
                            <td colSpan="4">
                                <Spinner />
                            </td>
                        </tr>
                    )}
                    {fighters && !fighters.length && (
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="p-2">
                                    No Fighters To Display
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </Layout>
    )
}
