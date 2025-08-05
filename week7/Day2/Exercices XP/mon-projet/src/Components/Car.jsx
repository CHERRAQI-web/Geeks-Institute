import Garage from './Garage.jsx'
const car =({color,model})=>{
    const garSize={size:"small"}
    return(
        <> <h1>This car is  {color}  {model}</h1>
        <Garage {...garSize}/>
        </>
       
    )
}
export default car