import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { useState, useEffect } from "react";


function App() {
    const [place, setPlace] = useState("");
    const[placeData, setPlaceData] = useState(null);
    useEffect(() =>{
        fetch("https://api.weatherapi.com/v1/current.json?key=685111fed7134cc5894122615211308&q=Mumbai")
        .then(res => res.json())
        .then(data => {
            setPlaceData(data);
        });
    }, [])


    return <div className = "App">
        <div className="container">
            <div className="row">
                <div className="col-12 form">
                    <input type="text" value={place} onChange={(e) =>{
                        setPlace(e.target.value);
                    }}/>
                    <button className="btn btn-primary">Submit</button>
                </div>

                <div className="offset-md-4 col-12 col-md-4 weather">
                    <div className="card">
                        {placeData}
                    </div>
                </div>
            </div>
        </div>
        {/* {place} to test*/}

    </div>;
}

export default App;