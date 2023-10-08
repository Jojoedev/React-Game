import { useState } from "react";

const Backdrop = ({status, text}) =>{
    //const [status, setStatus] = useState(false)
    
    
    //setStatus(!status)

    return(
        <div>
            <h3 className={status ? 'green' : 'black'}> {text? 'Welcome to Data page': 'Read the instructions carefully.' }</h3>
        </div>

    );
}

export default Backdrop;