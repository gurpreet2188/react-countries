import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FilterContext } from './base';
import { Router} from '../App';


export function Cards({ data, stat }) {

    const { filter } = useContext(FilterContext)
    const { search } = useContext(FilterContext)
    const { setPage } = useContext(Router)

    const loadCards = (n, i) => {
        return <Link key={i} className="card" to={`/loc/${data[i]?.alpha3Code}`} onClick={(e) => { setPage(i) }}>
            <div className="flag" style={{ backgroundImage: `url(${n.flag})` }}></div>
            <h3 className="card-title">{n.name}</h3>
            <p className="value-title">Population: <span className="value">{n.population}</span></p>
            <p className="value-title">Region: <span className="value">{n.region}</span></p>
            <p className="value-title">Capital: <span className="value">{n.capital}</span></p>
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
                    }else {
                        return <div> Error In Search</div>
                    }
                })
            )
        } else if (filter !== "all" && search === "") {
            return (
                data.map((n, i) => {
                    if (n.region.includes(filter)) {
                        return loadCards(n, i)

                    }else {
                        return <div> Error In Search</div>
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
                        }else {
                            return <div> Error In Search</div>
                        }
                    }else {
                        return <div> Error In Search</div>
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
