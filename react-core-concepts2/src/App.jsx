import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {
  function handleClick(){
    alert("Button clicked")
  }
  const handleClick2 = ()=> {
    alert("Button 2 clicked");
  }
  const handleClick4 = (number) =>{
    alert(number+5)
  }

  // ------------------>> Class 3 - Basic 
  // function useState(num){
  //   function updateNum(value){
  //     num = value;
  //   }
  //   return [num, updateNum];   // aikhane useState function er perameter a asa num and updateNum namer akta function k array hisabe return kore.
  // }
  // const [count, setCount] = useState(5);    // useState function k call korle akta array return pabo, jake distucturing kora hoiase.

  return (
    <>

      <h3>React Core Concepts 2</h3>
      {/* <button onclick = "handleClick()">Click me</button>      aivabe jsx a kaj korbena */}
      {/* html file a click event and jsx file a click event a different holo: 1. onClick a C capital letter hoi. and {second brack er moddhe event name likhta hoi.} */}
      <button onClick={handleClick} >Click me</button>  
      <button onClick={handleClick2} >Click 2</button>
      {/* abar button a onClick = {aikhanei function likha jai} */}
      <button onClick={() => alert("Click 3")}>Click 3</button>

      {/* <button onClick={handleClick4(9)}>Click Four</button>   aivabe kora jabena. karon jsx a automatic call hoia jabe. */}
      {/* so jokhon kono function er perameter dita hobe,, oi function k event a call korar somoi onclick a arekta arrow function nia , oi function er vitore call kore dita hobe. */}
      <button onClick={()=> handleClick4(3)} >Click 4</button>


      {/* ----------------->> Class 3,4,5 */}

      <Counter></Counter>
      <Team></Team>
      <Users></Users>
      <Friends></Friends>
    </>
  )
}

export default App
