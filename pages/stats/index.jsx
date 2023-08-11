import React, { useState, useEffect } from 'react'
import { fightService, fighterService } from 'services'
import ChartsDash from 'components/charts/ChartsDash'

const StatsPage = () => {
    const [fighters, setFighters] = useState([])
    const [fights, setFights] = useState([])
    const [photoData, setPhotoData] = useState([])

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

    // Supposons que "data" est le tableau de combats que vous recevez

    const handleInputChange = (event) => {
        setFilters({
            ...filters,
            [event.target.name]: event.target.value,
        })
    }

    console.log('filters', filters)
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

        fightService.filterFights(filters).then((x) => setData(x))
        // const response = await axios.get('/api/fights', {
        //     params: filters,
        // })

        // setData(response.data)
    }

    // get the number of fight if fighter1 ||or fighter2|| or both are true

    // search photo from fighter if filter.fighter1 === true and filter.fighter1 === data[0].fighter1._id get data[0].fighter1.photo else get data[0].fighter2.photo
    const getPhoto = () => {
        if (!data || !filters.fighter1 || !filters.fighter2) {
            return []
        } else if (data.length > 1) {
            if (filters.fighter1 === data[0].fighter1._id) {
                return [
                    data[0].fighter1.photo,
                    data[0].fighter1.firstName,
                    data[0].fighter1.lastName,
                ]
            } else {
                return [
                    data[0].fighter2.photo,
                    data[0].fighter2.firstName,
                    data[0].fighter2.lastName,
                ]
            }
        } else {
            if (filters.fighter1 === data[0].fighter1._id) {
                return [
                    data[0].fighter1.photo,
                    data[0].fighter1.firstName,
                    data[0].fighter1.lastName,
                ]
            } else {
                return [
                    data[0].fighter2.photo,
                    data[0].fighter2.firstName,
                    data[0].fighter2.lastName,
                ]
            }
        }
    }

    useEffect(() => {
        setPhotoData(getPhoto())
    }, [data, filters])
    console.log('photoData', photoData)

    return (
        <div className="pt-20 pb-10 m-5 ">
            <h1 className="text-3xl text-center font-bold mb-8">Stats</h1>
            <form onSubmit={handleSubmit} className="space-y-4 ">
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

            <div className="flex conatainer h-60 border border-r-red-600 gap-4">
                <div className="flex flex-row ">
                    <div className="flex flex-col">
                        {getPhoto().length > 0 && (
                            <>
                                <h2 className="text-2xl font-bold">
                                    Fighter Selected
                                </h2>
                                <p className="text-xl font-bold">
                                    {photoData[1]} {photoData[2]}
                                </p>
                                <img
                                    className="w-40 h-40 rounded"
                                    src={photoData[0]}
                                    alt=""
                                />
                            </>
                        )}
                    </div>
                </div>
                <div className="flex flex-col border border-r-red-600">
                    <div className="flex  justify-center items-center">
                        <p className=" flex flex-col text-lg font-bold ">
                            Current filters:
                            {filters.fighter1 || ''} {filters.fighter2 || ''}
                            {filters.eventyear || ''} {filters.country || ''}
                            {filters.category || ''}
                            {filters.weightcat || ''}
                            {filters.sex || ''}
                            {filters.eventname || ''}
                            {filters.eventtype || ''}
                        </p>
                    </div>
                    <ChartsDash
                        data={data}
                        selectedFighters={filters.fighter1}
                    />
                </div>
            </div>
        </div>
    )
}

export default StatsPage
