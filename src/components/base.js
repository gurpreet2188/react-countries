import React from 'react';
import '../styles/header.css'
import '../styles/search.css'
import '../styles/filter.css'
import '../styles/card.css'
import { Header } from './header';
import { Search } from './search';
import { Filter } from './filter';
import { Cards } from './cards';

export function Base () {

    return (
        <div>
            <Header/>
            <Search/>
            <Filter/>
            <Cards/>
        </div>
    )
}