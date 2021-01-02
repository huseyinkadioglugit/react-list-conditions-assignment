import React from 'react';
import './App.css';
import { Component } from 'react';
import Validation from './Validation/Validation'
import Char from './Validation/Char'

class App extends Component {

  state = {
    userInput : ''
  }

inputChangedHandler = (event) => {
  this.setState({userInput: event.target.value})
}

deleteCharHandler = (index) => {
  const text = this.state.userInput.split('');
  text.splice(index,1);
  const updatedText = text.join('');
  this.setState({userInput:updatedText})

}

 render(){

  const  charList = this.state.userInput.split('').map((ch,index) => {
    return <Char 
    clicked= {() =>this.deleteCharHandler(index)}
    character={ch} 
    key={index}/>
  }); 

  return (
    <div className="App">
          <input
          type="text"
          onChange={this.inputChangedHandler} 
          value={this.state.userInput}/>
          <p>{this.state.userInput}</p>
          <Validation inputLength = {this.state.userInput}/>
          {charList}
        
    </div>
  );
 }
}

export default App;
