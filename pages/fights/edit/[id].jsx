import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { Layout, AddEditFight } from 'components/fights'
import { Spinner } from 'components'
import { fightService, alertService } from 'services'

export default EditFight

function EditFight() {
    const router = useRouter()
    const [fight, setFight] = useState(null)

    useEffect(() => {
        const { id } = router.query
        if (!id) return

        // fetch user and set default form values if in edit mode
        fightService
            .getById(id)
            .then((x) => setFight(x))
            .catch(alertService.error)
    }, [router])

    return (
        <Layout>
            <h1>Edit Fight</h1>
            {fight ? <AddEditFight fight={fight} /> : <Spinner />}
        </Layout>
    )
}
