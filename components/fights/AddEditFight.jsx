import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { fightService, fighterService, alertService } from 'services'

export { AddEditFight }

function AddEditFight(props) {
    const fight = props?.fight
    const router = useRouter()

    // form validation rules

    const fightValidationSchema = Yup.object().shape({
        eventyear: Yup.number().required('Event Year is required'),
        eventtype: Yup.string().required('Event Type is required'),
        eventname: Yup.string().required('Event Name is required'),
        category: Yup.string().required('Category is required'),
        weightcat: Yup.number().required('Weight Category is required'),
        fighter1_id: Yup.string().required('Fighter 1 is required'),
        fighter2_id: Yup.string().required('Fighter 2 is required'),
    })
    const [fighters, setFighters] = useState([])
    useEffect(() => {
        fighterService.getAll().then((x) => setFighters(x))
    }, [])
    const formOptions = { resolver: yupResolver(fightValidationSchema) }

    // set default form values if in edit mode
    if (fight) {
        formOptions.defaultValues = props.fight
    }

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions)
    const { errors } = formState

    async function onSubmit(data) {
        alertService.clear()
        try {
            // create or update user based on user prop
            let message
            if (fight) {
                await fightService.update(fight.id, data)
                message = 'fight updated'
            } else {
                // add user id for new fights in createdBy field

                await fightService.createFight(data)
                message = 'Fight added'
            }

            // redirect to user list with success message
           
            router.push('/fights')
            
            alertService.success(message, true)
        } catch (error) {
            alertService.error(error.message)
            console.error(error)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="mb-3 col">
                    <label className="form-label">Event Year</label>
                    <input
                        name="eventyear"
                        type="text"
                        {...register('eventyear')}
                        className={`form-control ${errors.eventyear ? 'is-invalid' : ''
                            }`}
                    />
                    <div className="invalid-feedback">
                        {errors.eventyear?.message}
                    </div>
                </div>
                <div className="mb-3 col">
                    <label className="form-label">Type of Event</label>
                    <input
                        name="eventtype"
                        type="text"
                        {...register('eventtype')}
                        className={`form-control ${errors.eventtype ? 'is-invalid' : ''
                            }`}
                    />
                    <div className="invalid-feedback">
                        {errors.eventtype?.message}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="mb-3 col">
                    <label className="form-label">Event Name</label>
                    <input
                        name="eventname"
                        type="text"
                        {...register('eventname')}
                        className={`form-control ${errors.eventname ? 'is-invalid' : ''
                            }`}
                    />
                    <div className="invalid-feedback">
                        {errors.eventname?.message}
                    </div>
                </div>
                <div className="mb-3 col">
                    <label className="form-label">Category</label>
                    <input
                        name="category"
                        type="text"
                        {...register('category')}
                        className={`form-control ${errors.category ? 'is-invalid' : ''
                            }`}
                    />
                    <div className="invalid-feedback">
                        {errors.category?.message}
                    </div>
                </div>
                <div className="mb-3 col">
                    <label className="form-label">Weight Category</label>
                    <input
                        name="weightcat"
                        type="text"
                        {...register('weightcat')}
                        className={`form-control ${errors.weightcat ? 'is-invalid' : ''
                            }`}
                    />
                    <div className="invalid-feedback">
                        {errors.weightcat?.message}
                    </div>
                </div>
                <div className="mb-3 col">
                    <label className="form-label" htmlFor="fighter1Id">
                        Combattant 1 :
                    </label>

                    <select
                        className={`form-control ${errors.fighter1_id ? 'is-invalid' : ''
                            }`}
                        id="fighter1Id"
                        {...register('fighter1_id')}
                    >
                        <option value="">Sélectionnez un combattant</option>
                        {fighters.map((fighter) => (
                            <option key={fighter.id} value={fighter.id}>
                                {fighter.firstName} {fighter.lastName}
                            </option>
                        ))}
                    </select>
                    <div className="invalid-feedback">
                        {errors.fighter1_id?.message}
                    </div>
                </div>
                <div className="mb-3 col">
                    <label className="form-label" htmlFor="fighter2Id">
                        Combattant 2 :
                    </label>

                    <select
                        className={`form-control ${errors.fighter2_id ? 'is-invalid' : ''
                            }`}
                        id="fighter2Id"
                        {...register('fighter2_id')}
                    >
                        <option value="">Sélectionnez un combattant</option>
                        {fighters.map((fighter2) => (
                            <option key={fighter2._id} value={fighter2.id}>
                                {fighter2.firstName} {fighter2.lastName}
                            </option>
                        ))}
                    </select>
                    <div className="invalid-feedback">
                        {errors.fighter2_id?.message}
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <button
                    type="submit"
                    disabled={formState.isSubmitting}
                    className="btn btn-primary me-2"
                >
                    {formState.isSubmitting && (
                        <span className="spinner-border spinner-border-sm me-1"></span>
                    )}
                    Save
                </button>
                <button
                    onClick={() => reset(formOptions.defaultValues)}
                    type="button"
                    disabled={formState.isSubmitting}
                    className="btn btn-secondary"
                >
                    Reset
                </button>
                <Link href="/fights" className="btn btn-link">
                    Cancel
                </Link>
            </div>
        </form>
    )
}
