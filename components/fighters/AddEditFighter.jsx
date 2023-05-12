import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useForm, Controller, Control } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { fighterService, alertService } from 'services'
// FighterForm.js
import { AgeSelect } from './AgeSelect'
import { SexSelect } from './SexSelect'
import { WeightSelect } from './WeightSelect'
import { getWeightCategories } from './utilities'

export { AddEditFighter }

function AddEditFighter(props) {
    const fighter = props?.fighter
    const router = useRouter()

    const [selectedSex, setSelectedSex] = useState('')
    const [selectedAge, setSelectedAge] = useState('')
    const [selectedWeight, setSelectedWeight] = useState('')

    const availableWeights = getWeightCategories(selectedSex, selectedAge)

    // form validation rules

    const fighterValidationSchema = Yup.object().shape({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        sex: Yup.string().required('Sex is required'),
        country: Yup.string().required('Country is required'),
        birthDate: Yup.string().required('Birth Date is required'),
        category: Yup.string().required('Category is required'),
        weightCategory: Yup.string().required('Weight Category is required'),
    })

    const formOptions = { resolver: yupResolver(fighterValidationSchema) }

    // set default form values if in edit mode
    if (fighter) {
        formOptions.defaultValues = props.fighter
    }

    // get functions to build form with useForm() hook
    const { register, handleSubmit, control, reset, formState } =
        useForm(formOptions)
    const { errors } = formState

    async function onSubmit(data) {
        alertService.clear()
        try {
            // create or update user based on user prop
            let message
            if (fighter) {
                await fighterService.update(fighter.id, data)
                message = 'fighter updated'
            } else {
                await fighterService.createFighter(data)
                message = 'Fighter added'
            }

            // redirect to user list with success message
            router.push('/createfighter')
            alertService.success(message, true)
        } catch (error) {
            alertService.error(error)
            console.error(error)
        }
    }
    const handleSexChange = (event) => {
        setSelectedSex(event.target.value)
    }
    const handleCategoryChange = (event) => {
        setSelectedAge(event.target.value)
    }

    const handleWeightChange = (event) => {
        setSelectedWeight(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="mb-3 col">
                    <label className="form-label">First Name</label>
                    <input
                        name="firstName"
                        type="text"
                        {...register('firstName')}
                        className={`form-control ${
                            errors.firstName ? 'is-invalid' : ''
                        }`}
                    />
                    <div className="invalid-feedback">
                        {errors.firstName?.message}
                    </div>
                </div>
                <div className="mb-3 col">
                    <label className="form-label">Last Name</label>
                    <input
                        name="lastName"
                        type="text"
                        {...register('lastName')}
                        className={`form-control ${
                            errors.lastName ? 'is-invalid' : ''
                        }`}
                    />
                    <div className="invalid-feedback">
                        {errors.lastName?.message}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="mb-3 col">
                    <label className="form-label">Country</label>
                    <input
                        name="country"
                        type="text"
                        {...register('country')}
                        className={`form-control ${
                            errors.country ? 'is-invalid' : ''
                        }`}
                    />
                    <div className="invalid-feedback">
                        {errors.country?.message}
                    </div>
                </div>
                <div className="mb-3 col">
                    <label className="form-label">birthday</label>
                    <input
                        name="birthday"
                        type="text"
                        {...register('birthday')}
                        className={`form-control ${
                            errors.birthday ? 'is-invalid' : ''
                        }`}
                    />
                    <div className="invalid-feedback">
                        {errors.birthday?.message}
                    </div>
                </div>
                <div className="mb-3 col">
                    <label className="form-label">Age Category</label>
                    <Controller
                        name="category"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Age Category is required' }}
                        render={({ field }) => (
                            <AgeSelect
                                selectedAge={selectedAge}
                                handleAgeChange={handleCategoryChange}
                            />
                        )}
                    />
                    <div className="invalid-feedback">
                        {errors.category?.message}
                    </div>
                </div>

                <div className="mb-3 col">
                    <label className="form-label">Sex</label>
                    <Controller
                        name="sex"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Sex is required' }}
                        render={({ field }) => (
                            <SexSelect
                                selectedSex={field.value}
                                handleSexChange={field.onChange}
                            />
                        )}
                    />
                    <div className="invalid-feedback">
                        {errors.sex?.message}
                    </div>
                </div>

                <div className="mb-3 col">
                    <label className="form-label">Weight Category</label>
                    <Controller
                        name="weightCategory"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Weight Category is required' }}
                        render={({ field }) => (
                            <WeightSelect
                                selectedWeight={selectedWeight}
                                handleWeightChange={handleWeightChange}
                                availableWeights={availableWeights}
                            />
                        )}
                    />
                    <div className="invalid-feedback">
                        {errors.weightCategory?.message}
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
                <Link href="/fighters" className="btn btn-link">
                    Cancel
                </Link>
            </div>
        </form>
    )
}
