import React, { useState, useEffect } from 'react'
import { fighterService } from 'services'

const port = process.env.PORT || 'http://localhost:3000/'
function FightersList() {
    const [fighters, setFighters] = useState([])

    useEffect(() => {
        fighterService.getAll().then((data) => {
            setFighters(data)
        })
    }, [])


    // Fonction pour gérer la soumission du formulaire de téléchargement de l'image
    const handleUploadPhoto = async (fighterId, formData) => {
       
        try {
            const response = await fetch(
                `/api/fighters/uploadPhoto?fighterId=${fighterId}`,
                {
                    method: 'PUT',
                    body: formData,
                },
            )

            if (!response.ok) {
                throw new Error('Error while uploading the photo')
            }

            // Reload fighters to update the photo display
            const updatedFighters = await fighterService.getAll()
            setFighters(updatedFighters)
        } catch (error) {
            console.error('Error while uploading the photo:', error)
        }
    }

    const onChangeImage = async (fighterId, file) => {
        
        const formData = new FormData()
        formData.append('photo', file)
        await handleUploadPhoto(fighterId, formData)
    }

    return (
        <div className="mt-3">
            <h5>Fighters:</h5>
            <div className="flex flex-row flex-wrap w-[100%]">
                {fighters.map(
                    (fighter) => (
                        (
                            <div
                                key={fighter.id}
                                className="bg-white border-2 border-gray-300 p-5 rounded-md tracking-wide shadow-lg w-[100%] m-2"
                            >
                                <div className="flex flex-wrap  items-center mb-4 gap-48">
                                    <div className="flex flex-row ">
                                        <div className="flex flex-col ">
                                            <h2 className="text-xl font-semibold">
                                                {fighter.firstName}{' '}
                                                {fighter.lastName}
                                            </h2>
                                            <p className="text-gray-600 flex flex-nowrap">
                                                {fighter.category} {fighter.sex}{' '}
                                                {fighter.weightCategory}
                                                kg
                                            </p>
                                            <ul>
                                                <li>
                                                    <strong>Country:</strong>{' '}
                                                    {fighter.country}
                                                </li>
                                                <li>
                                                    <strong>Birth Date:</strong>
                                                    <br /> {fighter.birthDate}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row flex-wrap items-center gap-8">
                                        <img
                                            alt="fighter"
                                            src={
                                                fighter.photo ||
                                                '/uploads/defaultPhoto.jpg'
                                            }
                                            className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 xl:w-64 xl:h-64 object-cover rounded border-2 border-gray-300"
                                        />

                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            id={`file-input-${fighter.id}`}
                                            onChange={(e) => {
                                                onChangeImage(
                                                    fighter.id,
                                                    e.target.files[0],
                                                )
                                               
                                                e.target.value = null // Reset the file input value
                                            }}
                                        />
                                        <label
                                            htmlFor={`file-input-${fighter.id}`}
                                            className="cursor-pointer"
                                        >
                                            <span className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded inline-block">
                                                Change Image
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        )
                    ),
                )}
            </div>
        </div>
    )
}

export default FightersList
