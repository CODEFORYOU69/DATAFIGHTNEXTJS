import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { Layout, AddEditRound } from 'components/rounds'
import { Spinner } from 'components'
import { alertService, roundService } from 'services'

export default EditRound

function EditRound() {
    const router = useRouter()
    const [round, setRound] = useState(null)

    useEffect(() => {
        const { id } = router.query
        if (!id) return

        // fetch user and set default form values if in edit mode
        roundService
            .getById(id)
            .then((x) => setRound(x))
            .catch(alertService.error)
    }, [router])

    return (
        <Layout>
            <h1>Edit Round</h1>
            {round ? <AddEditRound Round={round} /> : <Spinner />}
        </Layout>
    )
}
