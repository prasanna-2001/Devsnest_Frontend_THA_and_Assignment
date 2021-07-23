import React, { useState } from "react";

function App(props) {
    const[state, setState] = useState("newstate");
    return(
        <div>
            <h1>{state}</h1>
            <button onClick={() => setState("prasanna")}>prasanna</button>
        </div>
    );
}




export default App;
