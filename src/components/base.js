import React, {useState,createContext} from 'react';
import '../styles/header.css'
import '../styles/search.css'
import '../styles/filter.css'
import '../styles/card.css'
import { Header } from './header';
import { Search } from './search';
import { Filter } from './filter';
import { Cards } from './cards';

export const FilterContext = createContext(null)

export function Base () {

    const [filter, setFilter] = useState("all")
    // const [search, setSearch] = useState("")

    return (
        <div>
            <Header/>
            <Search/>
            <FilterContext.Provider value={{filter, setFilter}}>
                <Filter/>
                <Cards/>
            </FilterContext.Provider>
           
        </div>
    )
}