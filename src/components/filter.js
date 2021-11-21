import React from 'react';

export function Filter () {

    return (
        <div className="filter">
            <select className="dropdown">
                <option selected>Filter by Region</option>
                <option>Africa</option>
                <option>America</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>Oceania</option>
            </select>
        </div>
    )
}