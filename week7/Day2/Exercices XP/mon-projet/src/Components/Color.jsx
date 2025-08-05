import React, { useState, useEffect } from 'react';

const color=()=>{
  const [favoriteColor, setFavoriteColor] = useState('red');

        useEffect(() => {
        alert('useEffect reached'); 
    }, []);
  const [color,setColor]=useState(true)
    const changeColor=()=>{
        if(color===true){
            setFavoriteColor('blue')
        }else{
            setFavoriteColor('red')
        }
        setColor(!color)
    }                     
    return(
        <>
            <h1 className="text-2xl mt-20 text-gray-900 font-bold">My favorite color is {favoriteColor}</h1>
            <button onClick={changeColor}>Changer Color</button>
        </>
    )
}

export default color;