import React from 'react'
import FilterTables from '../components/FilterTables'

const Home = () => {
    return (
        <React.Fragment>
            <div className="w-full max-w-[1440px] mx-auto my-5">
                <h1 className="font-bold text-2xl text-gray-800">Users Data Table</h1>
                <h3 className="mt-1 font-normal text-md text-gray-800">Data Table for Random Users. Visualize JSON Data into Tables</h3>
                <FilterTables />
            </div>
        </React.Fragment>
    )
}

export default Home