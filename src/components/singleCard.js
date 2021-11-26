import React, { useContext, useEffect, useState } from 'react';
import { Header } from './header';
import { Router} from '../App';
import { Link, useLocation } from 'react-router-dom';

export function SCard({ n, d, s }) {

    const { setPage } = useContext(Router)

    let i = -1
    let loc = useLocation()
    let currentLoc = loc.pathname.slice(-3)

    if (n !== undefined) {
        i = n
    }
    else {
        if (s) {
            console.log(d[0].flag)
            d.map((e) => {
                if (e.alpha3Code.includes(currentLoc)) {
                    i = d.indexOf(e)
                }
            })
        }
    }
   
    
    const handleBorders = (b) => {
        return d.map((m, i) => {
            if (m.alpha3Code.includes(b)) {
                var pos = d.indexOf(m)
                return <Link key={i} to={`/loc/${m.alpha3Code}`} onClick={(e) => { setPage(pos) }}>{m.name}</Link>
            }
        })
    }
    if (s) {
        return (
            <>
                <Header />

                <div className="flag" style={{ backgroundImage: `url(${d[i].flag})` }}></div>
                <h3>{d[i].name}</h3>
                <p>Native Name: {d[i].nativeName}</p>
                <p>Population: {d[i].population}</p>
                <p>Region: {d[i].region}</p>
                <p>Sub Region: {d[i].subregion}</p>
                <p>Capital: {d[i].capital}</p>
                <p>Top Level Domain: {d[i].topLevelDomain}</p>
               
                {d[i].currencies?.map((c) => {
                    return  <p>Currency: {c.code}</p>
                })}
                <p id="lang">Languages: </p>
                {d[i].languages?.map((l, i) => {
                    return <p htmlFor="lang" key={i}>{l.name}</p>
                })}
                {d[i].borders?.map((b) => {
                    return handleBorders(b)
                })}
            </>
        )
    } else {
        return (

            <div>Loading...</div>
        )
    }

}

