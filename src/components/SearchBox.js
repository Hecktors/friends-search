import React from 'react'

const SearchBox = ({searchField, searchChange}) => {
    return (
        <div className="">
            <input className="searchbox pa1 ba" type="search" value={searchField} onChange={searchChange} placeholder="search friend"/>
        </div>
    )
}

export default SearchBox