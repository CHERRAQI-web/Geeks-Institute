import { useState } from "react"
const Events=()=>{
    const [click,setclick]=useState('')

    const clickMe=(event)=>{
        setclick(event.key)
        alert("I was clicked")
    }
    const [key,setkey]=useState('')
    const handleKeyDown=(event)=>{
        setkey(event.key)
        alert(`The Entrer key was pressed , your input is: ${event.key}`)
    }
 const [isToggleOn, setIsToggleOn] = useState(true);
     const [on,setOn]=useState('ON')
    const changeVariable=()=>{
        if(isToggleOn===true){
            setOn('OFF');
        }else{
            setOn('ON')
        }
            setIsToggleOn(!isToggleOn);

    }
    return(
        <>
            <button onClick={clickMe}>Click Me</button>
            <input type="text" onKeyDown={handleKeyDown}/>

            <label>Partie III</label>
            <button onClick={changeVariable}>{on}</button>
        </>
        
    )
}

export default Events