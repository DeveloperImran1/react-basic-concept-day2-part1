// -------------->> class 3

import { useState } from "react"

export default function Counter(){
    // const myArr = useState(0);   // aikhane useState(initial value); useState name akta buildin function ase jsx er jake call korle upore akta react er file import hobe. ar ai function er perameter a akta initial value dita hoi.

    // console.log(myArr);   //Output:  [0, ƒ]  --> aikhane result a akta array asbe jar element thakbe 2 ta. 1st element hobe useState a dewa initial value and 2nd elemnt hobe akta function.

    const [count, setCount] = useState(0);  // aikhane useState method k call koresi and initial value 0 kore disi. Than akta array pabo, jake distucturing kore niasi. Jar count = initial valueta 0 . and setount akta function.

    const handleAdd = () => {   // add button a click korle handleAdd function onclick a call hobe. Than newCount namer akta variabler moddhe ager jei initial value silo count er moddhe tar sathe 1 plus hoia,, newCount a store hobe. oi newCount value k setCount() function er perameter hisabe call kore dibo. 
        const newCount = count + 1;
        setCount(newCount)   // setCount function call hoia newCount er value count variable er value hisabe set kortese.
    }

    const handleSub = () =>{
        const newCount = count - 1;
        setCount(newCount)
    }
    return(
        // kono elemnt a style add korte elemnt a style attribute nia = second brack er moddhe object akare property and value dita hobe. ba return keyword er upore object akra style likah sudho object er nam ta {} second brack er moddhe dita hobe.
        <div style={{border: '2px solid red', padding: "5px"} }>  
            <h3>Counter: {count} </h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSub}>Sub</button>
        </div>
    )
}