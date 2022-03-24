import React from 'react'

const ColumnFilters = ({ column }) => {
    const { filtersValue, setFilter } = column
    return (
        <React.Fragment>
            <div className="my-1">
                Search : <input placeholder='Search something here' className='text-gray-800 py-2 px-4 border border-green-500 rounded-sm ml-2' value={filtersValue} onChange={(event) => setFilter(event.target.value)} />
            </div>
        </React.Fragment>
    )
}

export default ColumnFilters