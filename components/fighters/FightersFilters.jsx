import React, { useState, useEffect } from 'react'
import { fighterService } from 'services'
import FightersList from './FightersList'

function FilterFighters() {
    const [fighters, setFighters] = useState([])

    useEffect(() => {
        fighterService.getAll().then((x) => setFighters(x))
    }, [])

    const [filters, setFilters] = useState({
        firstName: '',
        lastName: '',
        birthDate: '',
        sex: '',
        country: '',
        category: '',
        weightCategory: '',
    })

    const [data, setData] = useState(null)

    const handleInputChange = (event) => {
        setFilters({
            ...filters,
            [event.target.name]: event.target.value,
        })
    }

    const FilterTag = ({ filterName, onDelete }) => (
        <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {filterName}
            <button onClick={onDelete} className="ml-2 text-red-500">
                ×
            </button>
        </div>
    )

    const removeFilter = (filterName) => {
        setFilters((prevFilters) => {
            const newFilters = { ...prevFilters }
            delete newFilters[filterName]
            return newFilters
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        fighterService.fightersFilter(filters).then((x) => setData(x))
    }

    return (
        <div className="">
            <h1 className="text-3xl text-center font-bold mb-8">Stats</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex justify-center">
                    <label className="w-1/4">
                        firstName
                        <select
                            name="firstName"
                            value={filters.firstName}
                            onChange={handleInputChange}
                            className={`p-2 border rounded focus:outline-none ${filters.firstName
                                    ? 'border-green-500'
                                    : 'border-gray-300'
                                }`}
                        >
                            <option value="">Select a year</option>
                            {fighters &&
                                fighters[0] &&
                                fighters.map((fighter) => (
                                    <option
                                        key={fighter.id}
                                        value={fighter.firstName}
                                    >
                                        {fighter.firstName}
                                    </option>
                                ))}
                        </select>
                    </label>
                </div>

                <div className="grid grid-cols-4 gap-4 mx-auto w-3/4 ">
                    <label className="w-1/4">
                        Last Name
                        <select
                            name="lastName"
                            value={filters.lastName}
                            onChange={handleInputChange}
                            className={`p-2 border rounded focus:outline-none ${filters.lastName
                                    ? 'border-green-500'
                                    : 'border-gray-300'
                                }`}
                        >
                            <option value="">Select a type</option>
                            {fighters &&
                                fighters[0] &&
                                fighters.map((fighter) => (
                                    <option
                                        key={fighter.id}
                                        value={fighter.lastName}
                                    >
                                        {fighter.lastName}
                                    </option>
                                ))}
                        </select>
                    </label>
                    <label className="w-1/4">
                        birthDate
                        <select
                            name="birthDate"
                            value={filters.birthDate}
                            onChange={handleInputChange}
                            className={`p-2 border rounded focus:outline-none ${filters.birthDate
                                    ? 'border-green-500'
                                    : 'border-gray-300'
                                }`}
                        >
                            <option value="">Select an event</option>
                            {fighters &&
                                fighters[0] &&
                                fighters.map((fighter) => (
                                    <option
                                        key={fighter.id}
                                        value={fighter.birthDate}
                                    >
                                        {fighter.birthDate}
                                    </option>
                                ))}
                        </select>
                    </label>
                    <label className="w-1/4">
                        sex
                        <select
                            name="sex"
                            value={filters.sex}
                            onChange={handleInputChange}
                            className={`p-2 border rounded focus:outline-none ${filters.sex
                                    ? 'border-green-500'
                                    : 'border-gray-300'
                                }`}
                        >
                            <option value="">Select a gender</option>

                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </label>

                    <label className="w-1/4">
                        Country
                        <select
                            name="country"
                            value={filters.country}
                            onChange={handleInputChange}
                            className={`p-2 border rounded focus:outline-none ${filters.country
                                    ? 'border-green-500'
                                    : 'border-gray-300'
                                }`}
                        >
                            <option value="">Selectionnez un Pays</option>
                            {fighters &&
                                fighters[0] &&
                                fighters.map((fighter) => (
                                    <option
                                        key={fighter.id}
                                        value={fighter.country}
                                    >
                                        {fighter.country}
                                    </option>
                                ))}
                        </select>
                    </label>
                    <label className="w-1/4">
                        Category
                        <select
                            name="category"
                            value={filters.category}
                            onChange={handleInputChange}
                            className={`p-2 border rounded focus:outline-none ${filters.category
                                    ? 'border-green-500'
                                    : 'border-gray-300'
                                }`}
                        >
                            <option value="">Selectionnez un combattant</option>
                            {fighters &&
                                fighters[0] &&
                                fighters.map((fighter) => (
                                    <option
                                        key={fighter.id}
                                        value={fighter.category}
                                    >
                                        {fighter.category}
                                    </option>
                                ))}
                        </select>
                    </label>

                    <label className="w-1/4">
                        Weight
                        <select
                            name="weightCategory"
                            value={filters.weightCategory}
                            onChange={handleInputChange}
                            className={`p-2 border rounded focus:outline-none ${filters.weightCategory
                                    ? 'border-green-500'
                                    : 'border-gray-300'
                                }`}
                        >
                            <option value="">Selectionnez un poids</option>
                            {fighters &&
                                fighters[0] &&
                                fighters.map((fighter) => (
                                    <option
                                        key={fighter.id}
                                        value={fighter.weightCategory}
                                    >
                                        {fighter.weightCategory}
                                    </option>
                                ))}
                        </select>
                    </label>
                </div>
                <div className="my-4">
                    {Object.keys(filters).map(
                        (filterName) =>
                            filters[filterName] && (
                                <FilterTag
                                    key={filterName}
                                    filterName={filterName}
                                    onDelete={() => removeFilter(filterName)}
                                />
                            ),
                    )}
                </div>
                {/* Continuez à ajouter les autres lignes ici, en utilisant le même format */}
                <button
                    type="submit"
                    className="w-full py-2 px-4 rounded bg-green-500 text-white"
                >
                    Filter
                </button>
            </form>

            <div className="fighter-container">
                <FightersList fighters={data} />
            </div>
        </div>
    )
}

export default FilterFighters
