import React from 'react'

const GlobalFilters = ({ filter, setFilter }) => {
    return (
        <React.Fragment>
            <div className="my-8">
                Search : <input placeholder='Search something here' className='py-2 px-4 border border-green-500 rounded-sm ml-2' value={filter} onChange={(event) => setFilter(event.target.value)} />
            </div>
        </React.Fragment>
    )
}

export default GlobalFilters