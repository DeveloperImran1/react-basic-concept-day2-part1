//---------------------> Class 6
import { useEffect, useState } from 'react';
// import './Friends.css';
import Friend from './Friend';
export default function Friends() {

    const [friends, setFriends] = useState([]);   // initialy empty array nilam.. karon api theke data load korle akta array pabo. Buy defaul data na pale problem hobena.

    useEffect( ()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setFriends(data));    // api theke jei data pabo ta setFriends function er perameter a pathia dilam. oi function abar friends variable er value hisabe oi data k store korbe.
    } , [])
    return(
        <div style={{border:'2px solid tomato', borderRadius:"10px", padding:"10px"}}>
            <h3>Friends: {friends.length}</h3>

            {     // dynamically data loop korar joonno second bracket er moddhe rakhte hoi.
                friends.map( friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}



/**
 * 1. state to hold data 
 * 2. use effect with dependency array
 * 3. use fetch to load data
 * 4. set loaded data to the setFriends
 * 5. display data on the component
 */