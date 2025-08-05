import { useState } from "react";

const Phone=()=>{
    const [phone,setPhone]=useState({brand: "Samsung",
                            model: "Galaxy S20",
                            color: "black",
                            year: 2020})
    const [color,setColor]=useState(true)
    const changeColor=()=>{
          setPhone(prevPhone => ({
            ...prevPhone,  
            color: color ? 'red' : 'black' 
    }));
        setColor(!color)
    }                     
    return(
        <>
            <h1 className="text-2xl mt-20 text-gray-900 font-bold">My Phone is a {phone.brand}</h1>
            <p>It is a {phone.color}  {phone.model} from {phone.year}</p>
            <button onClick={changeColor}>Change Color</button>
        </>
    )
}

export default Phone;