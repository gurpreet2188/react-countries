import { useContext, useEffect } from "react"
import { Data } from "../App"

export function GetData() {

    const { setData, setStat } = useContext(Data)

    useEffect(() => {
        fetch("https://restcountries.com/v2/all").then(response => {
            return response.json()
        }).then(loaddata => {
            setData(loaddata)
            setStat(true)
        })
    }, [])

    return (
        <></>
    )
}