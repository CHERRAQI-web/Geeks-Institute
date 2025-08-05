import {useState} from 'react';
import Events from './Components/Events.jsx'
import Car from './Components/Car.jsx';
import Phone from './Components/Phone.jsx'
import Color from './Components/Color.jsx'
function App() {
  const carinfo = {name: "Ford", model: "Mustang"};
  const [color]=useState('red')
  return (
    <>
      <Car  color={color}  {...carinfo}/>
      <Events/>
      <Phone/>
      <Color/>
    </>
  )
}

export default App
