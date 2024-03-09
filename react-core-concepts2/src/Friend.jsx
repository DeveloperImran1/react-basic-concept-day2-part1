// -------------->> Class 6

export default function Friend({friend}){
    const {name, email} = friend;   // friend object er name and email property k distucturing koreo use kora jeto.
    return(
        <div style={{    border: "2px solid tomato",
        margin: "10px",
        borderRadius: "10px"}}>
            <h3>Name: {name} </h3>
            <h3>Email: {email} </h3>
        </div>
    )
}