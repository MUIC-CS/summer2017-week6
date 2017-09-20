import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
      chat: ['hello', 'world']
    }
  }
  render() {
    const {chat, message} = this.state
    return (
      <div>
        <div>
          <input type="text" value={message}/>
          <input type="button" value='Send'/>
        </div>
        <div>
          {chat.map(c => <p>{c}</p>)}
        </div>
      </div>
    )
  }
}

export default App;
