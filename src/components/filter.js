import React, { useContext, useState } from 'react';
import { FilterContext } from './base';

export function Filter() {
    
    const {setFilter} = useContext(FilterContext)
    const selected = (e) => {
        setFilter(e.currentTarget.value)
    }

    return (
        <div>
            <div className="filter">
                <select className="dropdown" onChange={(e)=>{selected(e)}}>
                    <option selected value="">Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                    <option value="all">Show All</option>
                </select>
            </div>
        </div>

    )
}