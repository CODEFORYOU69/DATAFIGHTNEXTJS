import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useForm, Controller } from 'react-hook-form'
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

    console.log('fighterprops', fighter)

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
    const { register, handleSubmit, control, reset, formState, watch } =
        useForm(formOptions)
    const { errors } = formState

    const selectedSex = watch('sex')
    const selectedAge = watch('category')
    const [selectedWeight, setSelectedWeight] = useState('')
    const availableWeights = getWeightCategories(selectedSex, selectedAge)

    async function onSubmit(data) {
        console.log('datasubmit', data)
        alertService.clear()
        try {
            // Merge selected values with form data
            const updatedData = {
                ...data,
                sex: selectedSex,
                category: selectedAge,
                weightCategory: selectedWeight,
            }

            console.log('updatedData', updatedData)
            // create or update user based on user prop
            let message
            if (fighter) {
                console.log('fighter.id', fighter.id)
                await fighterService.update(fighter.id, updatedData)
                message = 'Fighter updated'
            } else {
                await fighterService.createFighter(updatedData)
                message = 'Fighter added'
            }

            // redirect to user list with success message
            router.push('/fighters')
            alertService.success(message, true)
        } catch (error) {
            alertService.error(error)
            console.error(error)
        }
    }

    return (
        <form className="flex " onSubmit={handleSubmit(onSubmit)}>
            <div className=" ">
                <div className="mb-3">
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
                <div className="mb-3 ">
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

                <div className=" ">
                    <div className="mb-3">
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
                    <div className="mb-3 w-[50%]">
                        <label className="form-label">birthday</label>
                        <input
                            name="birthDate"
                            type="text"
                            {...register('birthDate')}
                            className={`form-control ${
                                errors.birthday ? 'is-invalid' : ''
                            }`}
                        />
                        <div className="invalid-feedback">
                            {errors.birthday?.message}
                        </div>
                    </div>
                    <div className="mb-3  ">
                        <div className="justify-center">
                            <div className="mb-3 row">
                                <label className="">Sex</label>
                                <Controller
                                    name="sex"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: 'Sex is required' }}
                                    render={({ field }) => (
                                        <SexSelect
                                            {...field} // Ajoutez ceci pour lier le champ à la valeur de l'état du composant
                                        />
                                    )}
                                />
                                <div className="invalid-feedback">
                                    {errors.sex?.message}
                                </div>
                            </div>
                            <div className="mb-3 row ">
                                <label className="form-label">
                                    Age Category
                                </label>
                                <Controller
                                    name="category"
                                    className="form-control w-8"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: 'Age Category is required',
                                    }}
                                    render={({ field }) => (
                                        <AgeSelect
                                            {...field} // Ajoutez ceci pour lier le champ à la valeur de l'état du composant
                                        />
                                    )}
                                />
                                <div className="invalid-feedback">
                                    {errors.category?.message}
                                </div>
                            </div>
                            <div className="mb-3  row">
                                <label className="form-label">
                                    Weight Category
                                </label>
                                <Controller
                                    name="weightCategory"
                                    control={control}
                                    rules={{
                                        required: 'Weight Category is required',
                                    }}
                                    render={({ field }) => (
                                        <WeightSelect
                                            {...field} // Ajoutez ceci pour lier le champ à la valeur de l'état du composant
                                            availableWeights={availableWeights}
                                            selectedWeight={field.value}
                                            onChange={(value) => {
                                                field.onChange(value)
                                                setSelectedWeight(value)
                                            }}
                                        />
                                    )}
                                />
                                <div className="invalid-feedback">
                                    {errors.weightCategory?.message}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-3 ">
                    <button
                        type="submit"
                        disabled={formState.isSubmitting}
                        className="btn btn-primary me-2 text-black"
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
                        className="btn btn-secondary text-black"
                    >
                        Reset
                    </button>
                    <Link href="/fighters" className="btn btn-link">
                        Cancel
                    </Link>
                </div>
            </div>
        </form>
    )
}
