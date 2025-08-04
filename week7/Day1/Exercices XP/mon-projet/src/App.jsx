import UserFavoriteAnimals from './UserFavoriteAnimals.jsx';
import './App.css'
import Exercice3 from './Exercise3'
function App() { 
  const myelement = <h1>I Love JSX!</h1>; 
  const sum = 5 + 5; 
  const user = { 
    firstName: 'Bob', 
    lastName: 'Dylan', 
    favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey'] ,
  }; 
    const firstName = <h3>{user.firstName}</h3>
    const lastName = <h3>{user.lastName}</h3>;

  return ( 
    <div>
      Bonjour tout le monde ! 
      {myelement} 
      <p>React is {sum} times better with JSX</p> 
      
      {firstName} {lastName}
      
      <UserFavoriteAnimals favAnimals={user.favAnimals} />
      <Exercice3/>
    </div>
  ); 
} 

export default App;