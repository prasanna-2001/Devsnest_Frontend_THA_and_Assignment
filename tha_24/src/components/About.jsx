import { useState } from "react"
function About (){
    const [flag, setFlag] = useState(false);
    return(
        <div className="content">
            <h1>About: Public Route</h1>
        </div>
    )
}
export default About;