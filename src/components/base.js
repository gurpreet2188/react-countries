import React from 'react';
import '../styles/header.css'
import '../styles/search.css'
import '../styles/filter.css'
import { Header } from './header';
import { Search } from './search';
import { Filter } from './filter';

export function Base () {

    return (
        <div>
            <Header/>
            <Search/>
            <Filter/>
        </div>
    )
}