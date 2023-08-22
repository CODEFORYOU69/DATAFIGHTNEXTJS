import React, { useState } from 'react'
import Modal from 'react-modal'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import FightersList from 'components/fighters/FightersList'

import { Layout } from 'components/fighters'
import { fighterService, alertService } from 'services'

Modal.setAppElement('#__next')

export default CreateFighter

function CreateFighter() {
  const router = useRouter()

  // form validation rules
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    sex: Yup.string().required('Sex is required'),
    country: Yup.string().required('Country is required'),
    birthDate: Yup.string().required('Birth Date is required'),
    category: Yup.string().required('Category is required'),
    weightCategory: Yup.string().required('Weight Category is required'),
  })
  const formOptions = { resolver: yupResolver(validationSchema) }

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions)
  const { errors } = formState

  function onSubmit(fighter) {
    return fighterService
      .createFighter(fighter)
      .then(() => {
        alertService.success('Fighter creation successful', true)
        router.push('/addfighter/addFighter')
      })
      .catch(alertService.error)
  }

  const [isModalOpen, setIsModalOpen] = useState(false)

  // Functions to open and close the modal
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <Layout>
      {/* Add Fighter button */}
      <button onClick={openModal} className="btn btn-primary">
        Add Fighter
      </button>
      <FightersList />

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Create Fighter"
      >
        <div className="card w-[50%]">
          <h4 className="card-header">Create Fighter</h4>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input
                  name="firstName"
                  type="text"
                  {...register('firstName')}
                  className={`form-control ${errors.firstName ? 'is-invalid' : ''
                    }`}
                />
                <div className="invalid-feedback">
                  {errors.firstName?.message}
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input
                  name="lastName"
                  type="text"
                  {...register('lastName')}
                  className={`form-control ${errors.lastName ? 'is-invalid' : ''
                    }`}
                />
                <div className="invalid-feedback">
                  {errors.lastName?.message}
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Sex</label>
                <select
                  name="sex"
                  {...register('sex')}
                  className={`form-control ${errors.sex ? 'is-invalid' : ''}`}
                >
                  <option value="">Select Sex</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <div className="invalid-feedback">{errors.sex?.message}</div>
              </div>
              <div className="mb-3">
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
              <div className="mb-3">
                <label className="form-label">Birth Date</label>
                <input
                  name="birthDate"
                  type="date"
                  {...register('birthDate')}
                  className={`form-control ${errors.birthDate ? 'is-invalid' : ''
                    }`}
                />
                <div className="invalid-feedback">
                  {errors.birthDate?.message}
                </div>
              </div>
              <div className="mb-3">
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
              <div className="mb-3">
                <label className="form-label">Weight Category</label>
                <input
                  name="weightCategory"
                  type="text"
                  {...register('weightCategory')}
                  className={`form-control ${errors.weightCategory ? 'is-invalid' : ''
                    }`}
                />
                <div className="invalid-feedback">
                  {errors.weightCategory?.message}
                </div>
              </div>
              <button
                disabled={formState.isSubmitting}
                className="btn btn-primary"
              >
                {formState.isSubmitting && (
                  <span className="spinner-border spinner-border-sm me-1"></span>
                )}
                Create Fighter
              </button>
              <button onClick={closeModal} className="btn btn-link">
                Cancel
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </Layout>
  )
}
