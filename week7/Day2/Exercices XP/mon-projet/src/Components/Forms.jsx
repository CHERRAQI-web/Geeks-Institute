import { useState } from "react"

const Forms=()=>{
    const[username,setUsername]=useState('');
      const [header, setHeader] = useState('');
     const handleChange = (e) => {
        setUsername(e.target.value);
    }
    const handleBlur=()=>{
        if (username !== '') {
           setHeader(`Hello ${username}`)
        }
           
    }
        
    const mySubmitHandler =()=>{
        alert(`you are submiting ${username}`)
    }
        
    return(
        <> 
                

        <form className="px-[100px] mb-[100px]" onSubmit={mySubmitHandler}>
             {header && <h1 className="text-2xl mt-20 text-gray-900 font-bold">{header}</h1>}
            <h1 className="text-2xl mt-20 text-gray-900 font-bold">Hello {username}</h1>

            <label>Entrer your name</label><br></br>
            <input className="border border-black-500 " value={username} type="text" name="user" onChange={handleChange} onBlur={handleBlur}/>
            <button>Submit</button>
        </form>
            
        
        </>
    )
}
export default Forms