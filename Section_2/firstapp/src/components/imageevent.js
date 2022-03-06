import "./imageevent.css";
import { useState } from "react";
const ImageEvent = () => {
    const img1="image1.jpg"
    const img2="image2.jpg"
    const img3="image3.jpg"
    const img4="image4.jpg"
    const img5="image5.jpg"
    const img6="image6.jpg"
    const [count, setCount] = useState(img1);
       

    const updateState=()=>
    {
        console.log(count);
        setCount(img2);
        
    }
    return(
        <div className="image1">
            <img  src={count} alt="" />
            

            <button onClick={updateState} className="btn btn-outline-primary">
                Click it
            </button>

        </div>


    );
    
};
export default ImageEvent;
