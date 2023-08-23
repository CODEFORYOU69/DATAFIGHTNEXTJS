import React, { useEffect, useState } from 'react'
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
import { set } from 'mongoose'

export { AddEditFighter }



function AddEditFighter(props) {
    const fighter = props?.fighter
    const router = useRouter()

    const [fighters, setFighters] = useState([])

    useEffect(() => {
        setFighters(fighter)
    }, [fighter])



    const handleUploadPhoto = async (fighterId, formData) => {
        try {
            const response = await fighterService.uploadPhoto(fighterId, formData);

            // Reload fighters to update the photo display
            const updatedFighter = await fighterService.getById(fighterId);
            setFighters(updatedFighter);

        } catch (error) {
            console.error('Error while uploading the photo:', error);
        }
    }


    const onChangeImage = async (fighterId, file) => {
        const formData = new FormData()
        formData.append('photo', file)
        await handleUploadPhoto(fighterId, formData)
    }

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
        alertService.clear()
        try {
            // Merge selected values with form data
            const updatedData = {
                ...data,
                sex: selectedSex,
                category: selectedAge,
                weightCategory: selectedWeight,
                photo: fighters?.photo,
            }

            // create or update user based on user prop
            let message
            if (fighter) {

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
        <div className="flex flex-col md:flex-row justify-around ">
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-8">
                <img
                    alt="fighter"
                    src={
                        fighters?.photo ||
                        '/uploads/defaultPhoto.jpg'
                    }
                    className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 xl:w-64 xl:h-64 object-cover rounded border-2 border-gray-300"
                />

                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id={`file-input-${fighter?.id || 'new'}`}
                    onChange={(e) => {
                        if (fighter) {
                            onChangeImage(fighter.id, e.target.files[0])
                        }
                        e.target.value = null // Reset the file input value
                    }}
                />

                <label htmlFor={`file-input-${fighter?.id || 'new'}`} className="cursor-pointer">
                    <span className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded inline-block">
                        Change Image
                    </span>
                </label>

            </div>
            <form className="flex flex-col md:flex-row" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col ">
                    <div className="flex flex-col ">
                        <label className="form-label">First Name</label>
                        <input
                            name="firstName"
                            type="text"
                            {...register('firstName')}
                            className={`form-control w-full ${errors.firstName ? 'is-invalid' : ''
                                }`}
                        />
                        <div className="invalid-feedback">
                            {errors.firstName?.message}
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <label className="form-label">Last Name</label>
                        <input
                            name="lastName"
                            type="text"
                            {...register('lastName')}
                            className={`form-control w-full ${errors.lastName ? 'is-invalid' : ''
                                }`}
                        />
                        <div className="invalid-feedback">
                            {errors.lastName?.message}
                        </div>
                    </div>

                    <div className=" ">
                        <div className="flex flex-col ">
                            <label className="form-label">Country</label>
                            <input
                                name="country"
                                type="text"
                                {...register('country')}
                                className={`form-control ${errors.country ? 'is-invalid' : ''
                                    }`}
                            />
                            <div className="invalid-feedback">
                                {errors.country?.message}
                            </div>
                        </div>
                        <div className="flex flex-col ">
                            <label className="form-label">birthday</label>
                            <input
                                name="birthDate"
                                type="text"
                                {...register('birthDate')}
                                className={`form-control ${errors.birthday ? 'is-invalid' : ''
                                    }`}
                            />
                            <div className="invalid-feedback">
                                {errors.birthday?.message}
                            </div>
                        </div>
                        <div className="flex flex-col ">
                            <div className="justify-center">
                                <div className="flex flex-col ">
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
                                <div className="flex flex-col ">
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
                                <div className="flex flex-col mb-3 ">
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


                    <div className=" ">
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
        </div>
    )
}
