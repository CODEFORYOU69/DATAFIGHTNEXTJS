import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Layout, AddEditFighter } from 'components/fighters';
import { Spinner } from 'components';
import { fighterService, alertService } from 'services';

export default EditFighter;

function EditFighter() {
    const router = useRouter();
    const [fighter, setFighter] = useState(null);

    useEffect(() => {
        const { id } = router.query;
        if (!id) return;

        // fetch user and set default form values if in edit mode
        fighterService.getById(id)
            .then(x => setFighter(x))
            .catch(alertService.error)
    }, [router]);

    return (
        <Layout>
            <h1>Edit Fighter</h1>
            {fighter ? <AddEditFighter fighter={fighter} /> : <Spinner />}
        </Layout>
    );
}