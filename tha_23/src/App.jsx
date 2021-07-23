// import React, { useState } from "react";

// function App(props) {
//     const[state, setState] = useState("newstate");
//     return(
//         <div>
//             <h1>{state}</h1>
//             <button onClick={() => setState("prasanna")}>Change</button>
//         </div>
//     );
// }




// export default App;


import './index.css';
import {useArray} from './useArray'
import {useState} from 'react'
function App() {
  const todos = useArray(["DEVSNEST THA23","college webinar","aur to kuch ni"]);
  const [item,setItem] = useState(null);
  return (
    <div className="App">
    <div><h1>offooo...  ONE  MORE TODO</h1></div>  
      <input value = {item} onChange={(e)=>{setItem(e.target.value); console.log(item);}} className="ip"></input>
      <button className="addbtn" onClick={(e)=>{
        todos.add(item);
        setItem("")
      }}>Add</button>
      <ul>
      {
        todos.values.map((todo,index) => {
           return (
           <li key={index}>{todo} <button onClick={()=>{todos.delete(index)}} className="originallist">delete</button></li>
           )
        })
      }
      </ul>
      <button onClick={()=>{todos.clear()}}>Clear</button>
    </div>
  );
}

export default App;