import Image from 'next/image'
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

  console.log(fighters)

  // Fonction pour gérer la soumission du formulaire de téléchargement de l'image
  const handleUploadPhoto = async (fighterId, formData) => {
    console.log('fighterId:handle', fighterId)
    console.log('formData:handle', formData)
    try {
      // Call the API to upload the photo
      const response = await fetch(
        `/api/fighters/uploadPhoto?fighterId=${fighterId}`,
        {
          method: 'PUT',
          body: formData,
        }
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
    console.log('fighterId:change', fighterId)
    console.log('file:change', file)
    const formData = new FormData()
    formData.append('photo', file)
    await handleUploadPhoto(fighterId, formData)
  }

  return (
    <div className="mt-3">
      <h5>Fighters:</h5>
      <div className="flex flex-row">
        {fighters.map(
          (fighter) => (
            console.log('fighter:', fighter), // Ajoutez cette ligne pour vérifier la valeur de fighter
            console.log('fighter._id:', fighter.id), // Ajoutez cette ligne pour vérifier la valeur de fighter._id
            (
              <div
                key={fighter.id}
                className="bg-white border-2 border-gray-300 p-5 rounded-md tracking-wide shadow-lg w-[100%] m-2"
              >
                <div className="flex  items-center mb-4 gap-48">
                  <div className="flex flex-row ">
                    <div className="flex flex-col ">
                      <h2 className="text-xl font-semibold">
                        {fighter.firstName} {fighter.lastName}
                      </h2>
                      <p className="text-gray-600 flex flex-nowrap">
                        {fighter.category} {fighter.sex}{' '}
                        {fighter.weightCategory}
                        kg
                      </p>
                      <ul>
                        <li>
                          <strong>Country:</strong> {fighter.country}
                        </li>
                        <li>
                          <strong>Birth Date:</strong>
                          <br /> {fighter.birthDate}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col gap-8">
                    <Image
                      alt="fighter"
                      src={fighter.photo || '/uploads/defaultPhoto.jpg'}
                      width={300}
                      height={300}
                      className="w-[100%] rounded border-2 border-gray-300"
                    />

                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id={`file-input-${fighter.id}`}
                      onChange={(e) => {
                        onChangeImage(fighter.id, e.target.files[0])
                        console.log('e.target.files[0]:', e.target.files[0])
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
          )
        )}
      </div>
    </div>
  )
}

export default FightersList
