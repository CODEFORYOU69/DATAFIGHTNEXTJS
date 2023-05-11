import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { fightService, fighterService } from 'services'

const StatsPage = () => {
    const [fighters, setFighters] = useState([])
    const [fights, setFights] = useState([])

    console.log('fighters', fighters)

    useEffect(() => {
        fighterService.getAll().then((x) => setFighters(x))
    }, [])
    useEffect(() => {
        fightService.getAll().then((x) => setFights(x))
    }, [])

    const [filters, setFilters] = useState({
        eventyear: '',
        eventtype: '',
        eventname: '',
        sex: '',
        fighter1: '',
        fighter2: '',
        country: '',
        category: '',
        weightcat: '',
    })

    const [data, setData] = useState(null)

    console.log('datafilter', data)
    const handleInputChange = (event) => {
        setFilters({
            ...filters,
            [event.target.name]: event.target.value,
        })
    }

    console.log('filters', filters)

    const handleSubmit = async (event) => {
        event.preventDefault()

        fightService.filterFights(filters).then((x) => setData(x))
        // const response = await axios.get('/api/fights', {
        //     params: filters,
        // })

        // setData(response.data)
    }

    return (
        <div className="pt-20">
            <h1 className="text-3xl text-center font-bold mb-8">Stats</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex justify-center">
                    <label className="w-1/4">
                        Year
                        <select
                            name="eventyear"
                            value={filters.eventyear}
                            onChange={handleInputChange}
                            className={`p-2 border rounded focus:outline-none ${
                                filters.eventyear
                                    ? 'border-green-500'
                                    : 'border-gray-300'
                            }`}
                        >
                            <option value="">Select a year</option>
                            {fights &&
                                fights[0] &&
                                fights.map((fight) => (
                                    <option
                                        key={fight.id}
                                        value={fight.eventyear}
                                    >
                                        {fight.eventyear}
                                    </option>
                                ))}
                        </select>
                    </label>
                </div>

                <div className="grid grid-cols-4 gap-4 mx-auto w-3/4 ">
                    <label className="w-1/4">
                        EVENT
                        <select
                            name="eventtype"
                            value={filters.eventtype}
                            onChange={handleInputChange}
                            className={`p-2 border rounded focus:outline-none ${
                                filters.eventtype
                                    ? 'border-green-500'
                                    : 'border-gray-300'
                            }`}
                        >
                            <option value="">Select a type</option>
                            {fights &&
                                fights[0] &&
                                fights.map((fight) => (
                                    <option
                                        key={fight.id}
                                        value={fight.eventtype}
                                    >
                                        {fight.eventtype}
                                    </option>
                                ))}
                        </select>
                    </label>
                    <label className="w-1/4">
                        Name
                        <select
                            name="eventname"
                            value={filters.eventname}
                            onChange={handleInputChange}
                            className={`p-2 border rounded focus:outline-none ${
                                filters.eventname
                                    ? 'border-green-500'
                                    : 'border-gray-300'
                            }`}
                        >
                            <option value="">Select an event</option>
                            {fights &&
                                fights[0] &&
                                fights.map((fight) => (
                                    <option
                                        key={fight.id}
                                        value={fight.eventname}
                                    >
                                        {fight.eventname}
                                    </option>
                                ))}
                        </select>
                    </label>
                    <label className="w-1/4">
                        Sex
                        <select
                            name="sex"
                            value={filters.sex}
                            onChange={handleInputChange}
                            className={`p-2 border rounded focus:outline-none ${
                                filters.sex
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
                        Fighter 1
                        <select
                            name="fighter1"
                            value={filters.fighter1}
                            onChange={handleInputChange}
                            className={`p-2 border rounded focus:outline-none ${
                                filters.fighter1
                                    ? 'border-green-500'
                                    : 'border-gray-300'
                            }`}
                        >
                            <option value="">Selectionnez un combattant</option>
                            {fighters &&
                                fighters[0] &&
                                fighters.map((fighter) => (
                                    <option key={fighter.id} value={fighter.id}>
                                        {fighter.firstName} {fighter.lastName}
                                    </option>
                                ))}
                        </select>
                    </label>

                    <label className="w-1/4">
                        Fighter 2
                        <select
                            name="fighter2"
                            value={filters.fighter2}
                            onChange={handleInputChange}
                            className={`p-2 border rounded focus:outline-none ${
                                filters.fighter2
                                    ? 'border-green-500'
                                    : 'border-gray-300'
                            }`}
                        >
                            <option value="">Selectionnez un combattant</option>
                            {fighters &&
                                fighters[0] &&
                                fighters.map((fighter) => (
                                    <option key={fighter.id} value={fighter.id}>
                                        {fighter.firstName} {fighter.lastName}
                                    </option>
                                ))}
                        </select>
                    </label>
                    <label className="w-1/4">
                        Country
                        <select
                            name="country"
                            value={filters.country}
                            onChange={handleInputChange}
                            className={`p-2 border rounded focus:outline-none ${
                                filters.country
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
                            className={`p-2 border rounded focus:outline-none ${
                                filters.category
                                    ? 'border-green-500'
                                    : 'border-gray-300'
                            }`}
                        >
                            <option value="">Selectionnez un combattant</option>
                            {fights &&
                                fights[0] &&
                                fights.map((fight) => (
                                    <option
                                        key={fight.id}
                                        value={fight.category}
                                    >
                                        {fight.category}
                                    </option>
                                ))}
                        </select>
                    </label>

                    <label className="w-1/4">
                        Weight
                        <select
                            name="weightcat"
                            value={filters.weightcat}
                            onChange={handleInputChange}
                            className={`p-2 border rounded focus:outline-none ${
                                filters.weightcat
                                    ? 'border-green-500'
                                    : 'border-gray-300'
                            }`}
                        >
                            <option value="">Selectionnez un poids</option>
                            {fights &&
                                fights[0] &&
                                fights.map((fight) => (
                                    <option
                                        key={fight.id}
                                        value={fight.weightcat}
                                    >
                                        {fight.weightcat}
                                    </option>
                                ))}
                        </select>
                    </label>
                </div>
                {/* Continuez à ajouter les autres lignes ici, en utilisant le même format */}
                <button
                    type="submit"
                    className="w-full py-2 px-4 rounded bg-green-500 text-white"
                >
                    Filter
                </button>
            </form>

            {/* Affichez vos graphiques ici, en utilisant les données filtrées. Vous pouvez utiliser la bibliothèque de graphiques de votre choix. */}
        </div>
    )
}

export default StatsPage
