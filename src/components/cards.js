import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FilterContext } from './base';
import { Router, UrlKey } from '../App';


export function Cards({ data, stat }) {

    const { filter } = useContext(FilterContext)
    const { search } = useContext(FilterContext)
    const { setPage } = useContext(Router)

    const loadCards = (n, i) => {
        return <Link key={i} className="card" to={`/loc/${data[i]?.alpha3Code}`} onClick={(e) => { setPage(i) }}>
            <div className="flag" style={{ backgroundImage: `url(${n.flag})` }}></div>
            <h3>{n.name}</h3>
            <p>Population: {n.population}</p>
            <p>Region: {n.region}</p>
            <p>Capital: {n.capital}</p>
        </Link>
    }

    if (stat) {
        if (filter === "all" && search === "") {
            return (
                data.map((n, i) => {
                    return loadCards(n, i)
                })
            )
        } else if (filter === "all" && search !== "") {
            return (
                data.map((n, i) => {
                    if (n.name.toLowerCase().includes(search.toLowerCase()) ||
                        n.region.toLowerCase().includes(search.toLowerCase()) ||
                        n.capital?.toLowerCase().includes(search.toLowerCase())) {
                        return loadCards(n, i)
                    }
                })
            )
        } else if (filter !== "all" && search === "") {
            return (
                data.map((n, i) => {
                    if (n.region.includes(filter)) {
                        return loadCards(n, i)

                    }
                })
            )
        } else if (filter !== "all" && search !== "") {
            return (
                data.map((n, i) => {
                    if (n.region.includes(filter)) {
                        if (n.name.toLowerCase().includes(search.toLowerCase()) ||
                            n.region.toLowerCase().includes(search.toLowerCase()) ||
                            n.capital?.toLowerCase().includes(search.toLowerCase())) {
                            return loadCards(n, i)
                        }
                    }
                })
            )
        }

    } else {
        return (
            <div>
                loading....
            </div>
        )
    }
}
