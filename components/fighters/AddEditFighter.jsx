import { useRouter } from 'next/router'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { fighterService, alertService } from 'services'

export { AddEditFighter }

function AddEditFighter(props) {
    const fighter = props?.fighter
    const router = useRouter()

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
    const { register, handleSubmit, reset, formState } = useForm(formOptions)
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
                    <label className="form-label">Sex</label>
                    <input
                        name="sex"
                        type="text"
                        {...register('sex')}
                        className={`form-control ${
                            errors.sex ? 'is-invalid' : ''
                        }`}
                    />
                    <div className="invalid-feedback">
                        {errors.sex?.message}
                    </div>
                </div>
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
                    <label className="form-label">Category</label>
                    <input
                        name="category"
                        type="text"
                        {...register('category')}
                        className={`form-control ${
                            errors.category ? 'is-invalid' : ''
                        }`}
                    />
                    <div className="invalid-feedback">
                        {errors.category?.message}
                    </div>
                </div>
                <div className="mb-3 col">
                    <label className="form-label">Weight Category</label>
                    <input
                        name="weightcategory"
                        type="text"
                        {...register('weightcategory')}
                        className={`form-control ${
                            errors.weightcategory ? 'is-invalid' : ''
                        }`}
                    />
                    <div className="invalid-feedback">
                        {errors.weightcategory?.message}
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
