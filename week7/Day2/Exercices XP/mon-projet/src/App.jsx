import {useState} from 'react';
import Events from './Components/Events.jsx'
import Car from './Components/Car.jsx';
import Phone from './Components/Phone.jsx'
import Color from './Components/Color.jsx'
import LineComponent from './Components/Line.jsx'
import Forms from './Components/Forms.jsx'



function App() {
  const carinfo = {name: "Ford", model: "Mustang"};
  const [color]=useState('red')
  return (
    <>
      <Car  color={color}  {...carinfo}/>
      <Events/>
      <Phone/>
      <Color/>
      <LineComponent />
      <h1 className="text-2xl mt-20 text-gray-900 font-bold">Exercices XP Gold</h1>
      <Forms/>
    </>
  )
}

export default App
