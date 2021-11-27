import React, { useContext } from 'react';
import { Header } from './header';
import { Router } from '../App';
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
            d.map((e) => {
                if (e.alpha3Code.includes(currentLoc)) {
                   return i = d.indexOf(e)
                }else {
                    return (<div> Error In Search</div>)
                }
            })
        }
    }


    const handleBorders = (b) => {
        return d.map((m, mi) => {
            if (m.alpha3Code?.includes(b)) {
                var pos = d.indexOf(m)
                return <Link key={mi} to={`/loc/${m.alpha3Code}`} onClick={() => { setPage(pos) }}><button className="button">{m.name}</button></Link>
            } else {
                return null
            }
        })
    }
    if (s) {
        return (
            <>
                <Header />
                <div className="s-card">
                    <Link to="/"> <button className="button bk-btn">Back</button> </Link>
                    <div className="flag s-card-flag" style={{ backgroundImage: `url(${d[i].flag})` }}></div>
                    <h3 className="card-title">{d[i].name}</h3>
                    <p className="value-title">Native Name: <span className="value">{d[i].nativeName}</span></p>
                    <p className="value-title">Population: <span className="value">{d[i].population}</span></p>
                    <p className="value-title">Region: <span className="value">{d[i].region}</span></p>
                    <p className="value-title">Sub Region: <span className="value">{d[i].subregion}</span></p>
                    <p className="value-title">Capital: <span className="value">{d[i].capital}</span></p>
                    <p className="value-title">Top Level Domain: <span className="value">{d[i].topLevelDomain}</span></p>
                    <div className="curr-flex">
                        <p className="value-title">Currency:</p>
                        {d[i].currencies?.map((c, ci) => {
                            return <p className="value" key={ci}>{c.code}</p>
                        })}
                    </div>

                    <div className="lang-flex">
                        <p className="value-title">Languages: </p>
                        {d[i].languages?.map((l, li) => {
                            return <p className="value" key={li}>{l.name}</p>
                        })}
                    </div>
                    <p className="value-title" >Border Countries:</p>
                    <div className="btn-flex">
                        {d[i].borders?.map((b) => {
                            return handleBorders(b)
                        })}
                    </div>
                </div>
            </>
        )
    } else {
        return (

            <div>Loading...</div>
        )
    }

}

