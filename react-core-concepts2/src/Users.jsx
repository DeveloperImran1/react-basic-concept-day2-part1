import { useEffect, useState } from "react"

export default function Users(){
    const [users, setUser] =useState([]) ;    // initial value hisabe empty array niasi. karon API theke data load kore nia asle akta array pabo. Ar kono karone dota load na hole initialy empty array thakbe.
    useEffect( ()=>{    // aikhane useEffect( function , initial value hisabe array disi.)
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => setUser(data));  // aikhane console na kore,, data k setUser function er moddhe pathia dilam, tahole users variable er moddhe oi data gulo store hobe.
    } ,[])
    return(
        <div>
            <h3>User: {users.name}</h3>
        </div>
    )
}