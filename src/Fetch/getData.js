import { useEffect, useState } from "react"

export function GetData() {

    const [data, setData] = useState()
    const [stat, setStat]= useState(false)

    useEffect( () => {
        fetch("https://restcountries.com/v2/all").then(response => {
            return response.json()
        }).then(loaddata => {
            setData(loaddata)
            setStat(true)
        })

        
    }, [])

    return data, stat
}