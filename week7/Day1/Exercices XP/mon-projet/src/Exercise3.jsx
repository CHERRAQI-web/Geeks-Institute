import React, { Component } from 'react';
import './Exercice.css';

export default class Exercice3 extends Component {
    

  render() {  
     const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
    const header= (<h1 style={{backgroundColor: 'lightblue',color: 'red',...style_header}}>This is a Header</h1>)
    const parag = <p className="para">This is a paragraph</p>;
    const lien=<a>liens</a>
    const form=(<form><h1>This is a Form </h1><label>Entrer Your name :</label><input type='text'></input><button type="submit">Submit</button></form>)
    const image=<img src="../public/react.png"></img>
    const list=<ul><li>Element1</li><li>Element2</li><li>Element3</li></ul>
    return(
        <> 
            {header}
            {parag}
            {lien}
            {form}
            {image}
            {list}
        </>
       
    )
  }
}