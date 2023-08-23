import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { Layout } from 'components/fighters'
import { fightService, alertService, fighterService } from 'services'

Modal.setAppElement('#__next')

export default AddFight

function AddFight() {
    const router = useRouter()

    const validationSchema = Yup.object().shape({
        eventyear: Yup.number().required('Event Year is required'),
        eventtype: Yup.string().required('Event Type is required'),
        eventname: Yup.string().required('Event Name is required'),
        category: Yup.string().required('Category is required'),
        weightcat: Yup.number().required('Weight Category is required'),
        fighter1_id: Yup.string().required('Fighter 1 is required'),
        fighter2_id: Yup.string().required('Fighter 2 is required'),
    })
    const formOptions = { resolver: yupResolver(validationSchema) }

    const { register, handleSubmit, formState } = useForm(formOptions)
    const { errors } = formState
    //get fighters from api
    const [fighters, setFighters] = useState([])
    useEffect(() => {
        fighterService.getAll().then((x) => setFighters(x))
    }, [])
    //fight object to send to api

    const [isModalOpen, setIsModalOpen] = useState(false)

    function onSubmit(fight) {
        return fightService
            .createFight(fight)
            .then(() => {
                alertService.success('Fight added successfully', true)
                router.push('/addfight/addFight')
            })
            .catch(alertService.error)
    }

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    return (
        <Layout>
            <div className=''>
                <button onClick={openModal} className="btn btn-primary">
                    Add Fight
                </button>

                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    contentLabel="Add Fight"
                >
                    <div className="flex flex-col card w-[50%]">
                        <h4 className="card-header">Add Fight</h4>
                        <div className="flex flex-col card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex flex-col form-group">
                                    <label htmlFor="eventYear">
                                        Année de l'événement :
                                    </label>
                                    <input
                                        type="number"
                                        id="eventYear"
                                        {...register('eventyear')}
                                    />

                                    <label htmlFor="eventType">
                                        Type d'événement :
                                    </label>

                                    <input
                                        type="text"
                                        id="eventType"
                                        {...register('eventtype')}
                                    />

                                    <label htmlFor="eventName">
                                        Nom de l'événement :
                                    </label>

                                    <input
                                        type="text"
                                        id="eventName"
                                        {...register('eventname')}
                                    />

                                    <label htmlFor="category">Catégorie :</label>

                                    <input
                                        type="text"
                                        id="category"
                                        {...register('category')}
                                    />

                                    <label htmlFor="weightCat">
                                        Catégorie de poids :
                                    </label>

                                    <input
                                        type="number"
                                        id="weightCat"
                                        {...register('weightcat')}
                                    />

                                    <label htmlFor="fighter1Id">
                                        Combattant 1 :
                                    </label>

                                    <select
                                        id="fighter1Id"
                                        {...register('fighter1_id')}
                                    >
                                        <option value="">
                                            Sélectionnez un combattant
                                        </option>
                                        {fighters.map((fighter) => (
                                            <option
                                                key={fighter._id}
                                                value={fighter.id}
                                            >
                                                {fighter.firstName}{' '}
                                                {fighter.lastName}
                                            </option>
                                        ))}
                                    </select>

                                    <label htmlFor="fighter2Id">
                                        Combattant 2 :
                                    </label>

                                    <select
                                        id="fighter2Id"
                                        {...register('fighter2_id')}
                                    >
                                        <option value="">
                                            Sélectionnez un combattant
                                        </option>
                                        {fighters.map((fighter) => (
                                            <option
                                                key={fighter._id}
                                                value={fighter.id}
                                            >
                                                {fighter.firstName}{' '}
                                                {fighter.lastName}
                                            </option>
                                        ))}
                                    </select>

                                    <label htmlFor="winnerId">Gagnant :</label>

                                    <select
                                        id="winner_id"
                                        {...register('winner_id')}
                                    >
                                        <option value="">
                                            Sélectionnez un combattant
                                        </option>
                                        {fighters.map((fighter) => (
                                            <option
                                                key={fighter._id}
                                                value={fighter._id}
                                            >
                                                {fighter.name}
                                            </option>
                                        ))}
                                    </select>
                                    <button
                                        disabled={formState.isSubmitting}
                                        className="btn btn-primary"
                                    >
                                        {formState.isSubmitting && (
                                            <span className="spinner-border spinner-border-sm me-1"></span>
                                        )}
                                        Add Fight
                                    </button>
                                    <button
                                        onClick={closeModal}
                                        className="btn btn-link"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Modal>
            </div>
        </Layout>
    )
}
