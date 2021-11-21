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

   if(stat) {
       return (
       
        <div>
            dummy...
             {/* {console.log(data)} */}
            {/* {data.map((n, index) => {
                
                return <div key={index}>
                    <p>{n.name}</p>
                    <img src={n.flag}></img>
                </div>
            })} */}

        </div>
       )
   } else {
       return (
           <p>loading</p>
       )
   }
}