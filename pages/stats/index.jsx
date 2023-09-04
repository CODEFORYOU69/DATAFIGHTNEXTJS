
import React, { useState, useEffect, useRef } from 'react'
import { fightService, fighterService } from 'services'
import ChartsDash from 'components/charts/ChartsDash'


const StatsPage = () => {
    const [fighters, setFighters] = useState([])
    const [fights, setFights] = useState([])
    const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
    const chartRef = useRef(null);
    
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

    console.log("filters", filters)
    const [data, setData] = useState(null)
    const handleInputChange = (event) => {
        setFilters({
            ...filters,
            [event.target.name]: event.target.value,
        })
    }

    const FilterTag = ({ filterName, onDelete }) => (
        <div className="inline-block bg-gray-400 rounded w-1/2 px-3 py-1 text-sm font-semibold text-BLACK-700 mr-2 mb-2">
            {filterName}
            <button onClick={onDelete} className="ml-1 text-red-500 ">
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
        chartRef.current.scrollIntoView({ behavior: 'smooth' });


    }
    console.log("data", data)



    return (
        <div className='flex flex-col'>
            <div className={`fixed top-0 left-0 w-screen md:h-screen md:w-1/4 bg-gray-200 p-4 transform transition-transform ease-in-out duration-300 ${isFilterPanelOpen ? 'translate-x-0  min-h-[52rem]' : '-translate-x-3/4 h-52'} `}>

                <button
                    onClick={() => setIsFilterPanelOpen(!isFilterPanelOpen)}
                    className="absolute top-1/2 right-12 w-6 h-6 transform-x-1/2 z-10 transition-transform ease-in-out duration-300"
                >
                    {isFilterPanelOpen ?
                        <label>
                            <img src="/uploads/yeux-fermes.jpg" alt="Fermer les filtres" />
                            Hide filters
                        </label>
                        :
                        <label>
                            <img src="/uploads/oeil.jpg" alt="Ouvrir les filtres" />
                            Show filters
                        </label>
                    }
                </button>
                <h2 className="pt-12 text-2xl font-bold">Filters</h2>
                <div className="flex flex-col my-4">
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
            </div>
            <div className="flex flex-col w-full pt-20 pb-12 ml-0 md:ml-28 px-2 md:pl-10  mb-12 ">
                <h1 className="text-3xl text-center font-bold mb-8">Stats</h1>
                <form onSubmit={handleSubmit} className=" flex flex-col ">
                    <label>
                        Year
                    </label>
                    <select
                        name="eventyear"
                        value={filters.eventyear}
                        onChange={handleInputChange}
                        className={`w-full p-2 border rounded focus:outline-none ${filters.eventyear
                            ? 'border-green-500'
                            : 'border-gray-300'
                            }w-full md:w-1/2`}
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

                    <label>
                        EVENT
                    </label>
                    <select
                        name="eventtype"
                        value={filters.eventtype}
                        onChange={handleInputChange}
                        className={`p-2 border rounded focus:outline-none ${filters.eventtype
                            ? 'border-green-500'
                            : 'border-gray-300'
                            }w-full md:w-1/2`}
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

                    <label >
                        Name
                    </label>
                    <select
                        name="eventname"
                        value={filters.eventname}
                        onChange={handleInputChange}
                        className={`p-2 border rounded focus:outline-none ${filters.eventname
                            ? 'border-green-500'
                            : 'border-gray-300'
                            }w-full md:w-1/2`}
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

                    <label>
                        Sex
                    </label>
                    <select
                        name="sex"
                        value={filters.sex}
                        onChange={handleInputChange}
                        className={`p-2 border rounded focus:outline-none ${filters.sex
                            ? 'border-green-500'
                            : 'border-gray-300'
                            }w-full md:w-1/2`}
                    >
                        <option value="">Select a gender</option>

                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>



                    <label>
                        Fighter 1
                    </label>
                    <select
                        name="fighter1"
                        value={filters.fighter1}
                        onChange={handleInputChange}
                        className={`p-2 border rounded focus:outline-none ${filters.fighter1
                            ? 'border-green-500'
                            : 'border-gray-300'
                            }w-full md:w-1/2`}
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



                    <label>
                        Fighter 2
                    </label>
                    <select
                        name="fighter2"
                        value={filters.fighter2}
                        onChange={handleInputChange}
                        className={`p-2 border rounded focus:outline-none ${filters.fighter2
                            ? 'border-green-500'
                            : 'border-gray-300'
                            }w-full md:w-1/2`}
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



                    <label>
                        Country
                    </label>
                    <select
                        name="country"
                        value={filters.country}
                        onChange={handleInputChange}
                        className={`p-2 border rounded focus:outline-none ${filters.country
                            ? 'border-green-500'
                            : 'border-gray-300'
                            }w-full md:w-1/2`}
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


                    <label>
                        Category
                    </label>
                    <select
                        name="category"
                        value={filters.category}
                        onChange={handleInputChange}
                        className={`p-2 border rounded focus:outline-none ${filters.category
                            ? 'border-green-500'
                            : 'border-gray-300'
                            }w-full md:w-1/2`}
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


                    <label>
                        Weight
                    </label>
                    <select
                        name="weightcat"
                        value={filters.weightcat}
                        onChange={handleInputChange}
                        className={`p-2 border rounded focus:outline-none ${filters.weightcat
                            ? 'border-green-500'
                            : 'border-gray-300'
                            }w-full md:w-1/2`}
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


                    <button
                        type="submit"
                        className=" py-2 px-4 rounded bg-green-500 text-white w-full md:w-1/2"
                    >
                        Filter
                    </button>

                </form>
                <div className="flex  flex-col gap-4">
                    <div className="flex flex-col border border-r-red-600" ref={chartRef}>
                        <ChartsDash
                            data={data}
                            selectedFighters={[filters.fighter1, filters.fighter2]}
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default StatsPage
