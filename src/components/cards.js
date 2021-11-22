import React, { useEffect, useState, useContext } from 'react';
import { FilterContext } from './base';

export function Cards() {

    const [data, setData] = useState()
    const [stat, setStat] = useState(false)
    const {filter} = useContext(FilterContext)
   

    useEffect(() => {
        fetch("https://restcountries.com/v2/all").then(response => {
            return response.json()
        }).then(loaddata => {
            setData(loaddata)
            setStat(true)
        })


    }, [])

    const loadCards = (n, i) => {
        return <div key={i} className="card">
                        <div className="flag" style={{backgroundImage:`url(${n.flag})`}}></div>
                        <h3>{n.name}</h3>
                        <p>Population: {n.population}</p>
                        <p>Region: {n.region}</p>
                        <p>Capital: {n.capital}</p>
        </div>
    }

    if (stat) {
        if(filter === "all") {
            return (
                data.map((n, i) => {
                    return loadCards(n,i)
                })
            )
        } else {
            return (
                data.map((n, i) => {
                    if(n.region.includes(filter)) {
                        return loadCards(n,i)

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
