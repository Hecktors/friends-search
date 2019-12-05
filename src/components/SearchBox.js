import React from 'react'

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className="">
            <input className="searchbox pa1 ba" type="search" value={searchfield} onChange={searchChange} placeholder="search friend"/>
        </div>
    )
}

export default SearchBox