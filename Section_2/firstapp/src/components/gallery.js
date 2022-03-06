import "./gallery.css";
import { useState } from "react";


const Gallery = () => {
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
        setCount( <img  src={img5} alt="" />);
        setCount(img3);
        setCount(img4);
        setCount(img5);
    }
   
    return(
        <div className="image">
            <button onClick={updateState} className="btn btn-outline-primary">
                Click it
            </button>
            <img  src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" /><br></br>
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />


        </div>

    );
    
};

export default Gallery;
