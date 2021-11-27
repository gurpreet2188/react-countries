import React, {useState,createContext} from 'react';
import '../styles/base.css'
import '../styles/header.css'
import '../styles/search.css'
import '../styles/filter.css'
import '../styles/card.css'
import { Header } from './header';
import { Search } from './search';
import { Filter } from './filter';
import { Cards } from './cards';

export const FilterContext = createContext(null)


export function Base ({data, stat}) {

    const [filter, setFilter] = useState("all")
    const [search, setSearch] = useState("")

   

    return (
        <div>
            <Header />
                <FilterContext.Provider value={{filter, setFilter, search, setSearch}}>
                    <Search/>
                    <Filter/>
                    <Cards data={data} stat={stat}/>
                </FilterContext.Provider>
        </div>
    )
}