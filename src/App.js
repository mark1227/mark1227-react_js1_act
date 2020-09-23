import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './act1.css';
import { render } from '@testing-library/react';

class App extends Component {

  state = { username: "Mako" };

  UpdateUsername = ( event ) => {
      this.setState({ username: event.target.value })
  };

  render(){

    const design = {
      border: 'solid blue 3px',
      width: '60%',
      // textalign: 'center',
      font: 'verdana',
      margin: '20px auto',
      padding: '20px',
      // boxshadow: '10px 5px 5px cornflowerblue'
    };

    return (
      <div style={design}>
      <UserInput changed = { this.UpdateUsername } value={ this.state.username }/>
      <UserOutput name= { this.state.username }  />
      </div>
    );
  }
}

const UserInput = ( props ) =>{
  return (
    <div className="In">
      <input type="text" 
        onChange = { props.changed }
        value = { props.value }
      />
    </div>
  );
}

const UserOutput = (props) =>{
  return (
    <div class="App">
      <p>Your username is { props.name }</p>
      <p>And you are Gwapo </p>
    </div>
  );
}

export default App;
