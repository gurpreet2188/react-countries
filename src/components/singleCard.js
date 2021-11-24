import React, { useContext } from 'react';
import { Header } from './header';
import { Router, UrlKey } from '../App';
import { Link } from 'react-router-dom';

export function SCard({ n, d }) {
    const { setPage } = useContext(Router)
    let k = 0

    const handleBorders = (b) => {
        return d.map((m, i) => {
            if (m.alpha3Code.includes(b)) {
                var pos = d.indexOf(m)
                return <Link key={i} to={`/loc/${m.alpha3Code}`} onClick={(e) => { setPage(pos) }}>{m.name}</Link>
            }
        })
    }
    return (
        <>
            <Header />
            <div className="flag" style={{ backgroundImage: `url(${d[n].flag})` }}></div>
            <h3>{d[n].name}</h3>
            <p>Native Name: {d[n].nativeName}</p>
            <p>Population: {d[n].population}</p>
            <p>Region: {d[n].region}</p>
            <p>Sub Region: {d[n].subregion}</p>
            <p>Capital: {d[n].capital}</p>
            <p>Top Level Domain: {d[n].topLevelDomain}</p>
            <p>Currency: {d[n].currencies[0].code}</p>
            <p id="lang">Languages: </p>
            {d[n].languages.map((l, i) => {
                return <p htmlFor="lang" key={i}>{l.name}</p>
            })}
            {d[n].borders.map((b) => {
                return handleBorders(b)
            })}
        </>
    )
}

