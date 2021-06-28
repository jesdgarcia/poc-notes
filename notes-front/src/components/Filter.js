import React from 'react'

const Filter = ({ handleFilter, placeholder }) => {
    return (
        <div>
            <input onChange={handleFilter} placeholder={placeholder || 'Filter user name'} />
        </div>
    )
}

export default Filter