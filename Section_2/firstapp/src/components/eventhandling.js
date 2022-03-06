import { useState } from "react";

const EventHandling = () => {
    let c=1;
    const [count, setCount] = useState(1);

    const doTask=()=> {
        c++;
       
        console.log("Button was clicked");
        console.log("Another line");
        console.log(c);
    };
    const updateState=()=>
    {
        console.log(count);
        setCount(5);
    }
    const handleChange=()=>{
        console.log("input box value was changed!");



        
    };
    return (
        <div className="container mt-5">
            <h1>Event Handling</h1>
            <button onClick={doTask} className="btn btn-outline-primary">
                click it
            </button>

            <button onClick={updateState} className="btn btn-outline-primary">
                press it
            </button>
            <h1 className="display-4">{c}</h1>
            <h1 className="display-1">{count}</h1>



            <input className="form-control mt-5" onChange={handleChange}/>
            
        </div>
    );
    
};
export default EventHandling;
