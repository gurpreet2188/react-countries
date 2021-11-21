import React, { useEffect, useState } from 'react';


export function Cards() {

    const [data, setData] = useState()
    const [stat, setStat] = useState(false)

    useEffect(() => {
        fetch("https://restcountries.com/v2/all").then(response => {
            return response.json()
        }).then(loaddata => {
            setData(loaddata)
            setStat(true)
        })


    }, [])

    if (stat) {
        return (
            data.map((n, i) => {
                return <div key={i} className="card">
                    <div className="flag" style={{backgroundImage:`url(${n.flag})`}}></div>
                    <h3>{n.name}</h3>
                    <p>Population: {n.population}</p>
                    <p>Region: {n.region}</p>
                    <p>Capital: {n.capital}</p>
                </div>
            })

        )
    } else {
        return (
            <div>
                loading....
            </div>
        )
    }


}