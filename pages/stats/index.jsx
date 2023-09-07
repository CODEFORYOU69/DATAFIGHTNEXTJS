
import React, { useState, useEffect, useRef } from 'react'
import { fightService, fighterService } from 'services'
import ChartsDash from 'components/charts/ChartsDash'
import AutoComplete from 'components/fights/Autocomplete'


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

    const [data, setData] = useState(null)
    console.log("🚀 ~ file: index.jsx:34 ~ StatsPage ~ data:", data)

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




    return (
        <div className='flex flex-col  p-3 items-center'>
            <div className={`fixed top-0 left-0  w-screen md:h-screen md:w-1/4 bg-gray-200 p-4 transform transition-transform ease-in-out duration-300 ${isFilterPanelOpen ? 'translate-x-0  min-h-[48rem]' : '-translate-x-3/4 h-40'} `}>

                <button
                    onClick={() => setIsFilterPanelOpen(!isFilterPanelOpen)}
                    className="absolute top-1/2 right-12 w-6 h-6 transform-x-1/2 z-10 transition-transform ease-in-out duration-300"
                >
                    {isFilterPanelOpen ?
                        <label className='text-xs'>
                            <img src="/uploads/yeux-fermes.jpg" alt="Fermer les filtres" />
                            Hide filters
                        </label>
                        :
                        <label className='text-xs'>
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
                <h2 className="text-2xl text-center font-bold mb-8">Select your Filters</h2>
                <form onSubmit={handleSubmit} className=" flex flex-col items-center ">
                    <label>
                        Year
                    </label>
                    <AutoComplete
                        className={`w-full p-2 border rounded focus:outline-none ${filters.eventyear
                            ? 'border-green-500'
                            : 'border-gray-300'
                            }w-full md:w-1/2`}
                        options={fights.map((fight) => fight.eventyear)}
                        value={filters.eventyear}
                        onChange={(name, value) =>
                            setFilters({ ...filters, [name]: value })
                        }
                        name="eventyear"
                    />


                    <label>
                        EVENT
                    </label>
                    <AutoComplete
                        options={fights.map((fight) => fight.eventtype)}

                        name="eventtype"
                        value={filters.eventtype}
                        onChange={(name, value) =>
                            setFilters({ ...filters, [name]: value })
                        }
                        className={`p-2 border rounded focus:outline-none ${filters.eventtype
                            ? 'border-green-500'
                            : 'border-gray-300'
                            }w-full md:w-1/2`}
                    />


                    <label >
                        Name
                    </label>
                    <AutoComplete
                        options={fights.map((fight) => fight.eventname)}

                        name="eventname"
                        value={filters.eventname}
                        onChange={(name, value) =>
                            setFilters({ ...filters, [name]: value })
                        }
                        className={`p-2 border rounded focus:outline-none ${filters.eventname
                            ? 'border-green-500'
                            : 'border-gray-300'
                            }w-full md:w-1/2`}
                    />


                    <label>
                        Sex
                    </label>
                    <AutoComplete
                        options={fighters.map((fighter) => fighter.sex)}

                        name="sex"
                        value={filters.sex}
                        onChange={(name, value) =>
                            setFilters({ ...filters, [name]: value })
                        }
                        className={`p-2 border rounded focus:outline-none ${filters.sex
                            ? 'border-green-500'
                            : 'border-gray-300'
                            }w-full md:w-1/2`}
                    />

                    <label>
                        Fighter 1
                    </label>
                    <AutoComplete
                        options={fighters.map((fighter) => ({
                            label: fighter.firstName + ' ' + fighter.lastName,
                            value: fighter.id,
                        }))}
                        name="fighter1"
                        value={filters.fighter1}
                        onChange={(name, value) => setFilters({ ...filters, [name]: value })}
                        className={`p-2 border rounded focus:outline-none ${filters.fighter1
                            ? 'border-green-500'
                            : 'border-gray-300'
                            }w-full md:w-1/2`}
                    />
                    <label>
                        Fighter 2
                    </label>
                    <AutoComplete
                        options={fighters.map((fighter) => ({
                            label: fighter.firstName + ' ' + fighter.lastName,
                            value: fighter.id,
                        }))}
                        name="fighter2"
                        value={filters.fighter1}
                        onChange={(name, value) => setFilters({ ...filters, [name]: value })}
                        className={`p-2 border rounded focus:outline-none ${filters.fighter2
                            ? 'border-green-500'
                            : 'border-gray-300'
                            }w-full md:w-1/2`}
                    />

                    <label>
                        Country
                    </label>
                    <AutoComplete
                        options={fights.map((fight) => fight.country)}

                        name="country"
                        value={filters.country}
                        onChange={(name, value) =>
                            setFilters({ ...filters, [name]: value })
                        }
                        className={`p-2 border rounded focus:outline-none ${filters.country
                            ? 'border-green-500'
                            : 'border-gray-300'
                            }w-full md:w-1/2`}
                    />

                    <label>
                        Category
                    </label>
                    <AutoComplete
                        options={fights.map((fight) => fight.category)}

                        name="category"
                        value={filters.category}
                        onChange={(name, value) =>
                            setFilters({ ...filters, [name]: value })
                        }
                        className={`p-2 border rounded focus:outline-none ${filters.category
                            ? 'border-green-500'
                            : 'border-gray-300'
                            }w-full md:w-1/2`}
                    />

                    <label>
                        Weight
                    </label>
                    <AutoComplete
                        options={fights.map((fight) => fight.weightcat)}

                        name="weightcat"
                        value={filters.weightcat}
                        onChange={(name, value) =>
                            setFilters({ ...filters, [name]: value })
                        }
                        className={`p-2 border rounded focus:outline-none ${filters.weightcat
                            ? 'border-green-500'
                            : 'border-gray-300'
                            }w-full md:w-1/2 pb-2`}
                    />


                    <button
                        type="submit"
                        className=" mt-2 py-2 px-4 rounded bg-green-500 text-white w-full md:w-1/4"
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
