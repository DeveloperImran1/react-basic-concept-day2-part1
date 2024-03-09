// --------------------->> Class 4

import { useState } from "react"

export default function Team() {
    const [team, setTeam] = useState(11);

    const styleObj = {
        border: "2px solid purple",
        borderRadius: '10px',
        margin: "10px"
    }

    function addMember() {
        // team = team + 1;     aivabe team er value change kora jabena. karon aikhane team immutable. so funtion er maddhome change korte hobe.
        const newTeam = team + 1;
        setTeam(newTeam)
    }
    function removeMember(){
        const newTeam = team - 1;
        setTeam(newTeam)
    }
    return (
        <div style={styleObj}>
            <h2>Team: {team}</h2>
            <button onClick={addMember}>Add Member</button>
            <button onClick={removeMember}>Remove Member</button>
        </div>
    )   
}