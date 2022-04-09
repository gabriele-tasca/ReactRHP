import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import {styles} from "./styles";

import { Game } from './game'


function randomRoomName () {
  return "room"+String(Math.floor(Math.random()*(999-100+1)+100));
}

// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:9080');

// Connection opened
socket.addEventListener('open', function (event) {
    socket.send('L: \n');
});

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});



class RoomNamePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.startingText}; // non-placeholder default text
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.state.value)
  }

  render() {
    return (
      <div style={{justifyContent: 'center', padding: '5px'}}>
        <form onSubmit={this.handleSubmit}> 
          <div style={{padding: '10px'}}> 
            <input type="submit" value={this.props.text} className='button3'/>
          </div>
          <div style={{padding: '10px'}}>
            <input 
              type="text" 
              value={this.state.value} 
              placeholder={this.props.placeholderText} 
              className='textField1'
              onChange={this.handleChange} />
          </div>
        </form>
      </div>

    );
  }
}

class Phase {
  // Create new instances of the same class as static attributes
  static Home = new Phase("home")
  static GameLobby = new Phase("gamelobby")
  static Game = new Phase("game")

  constructor(name) {
    this.name = name
  }
}


const basePlaceholderText = "room name";
// const PlaceholderTextAlert = "must not be empty"

function startingRoomName () {
  return randomRoomName();
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
      room_name: null,
      phase: Phase.Home,
      // phase: Phase.Game, // remove
      host: null,
    };
    this.createRoom = this.createRoom.bind(this);
    this.joinRoom = this.joinRoom.bind(this);

    this.placeholderText = basePlaceholderText
  }

  render() {
    if (this.state.phase == Phase.Home) {
      return (
        <div className="align-container">
          <div style={{border: 'solid', width: '100%', margin: '30px'}}> Mongrel Money </div>
          <div className="margin-container"  style={{margin: '20px'}}>
            <RoomNamePanel text="CREATE ROOM" placeholderText={this.placeholderText} startingText={startingRoomName()} handleSubmit={this.createRoom.bind(this)}/>
            <div style={{margin: '25px'}}></div>
            <RoomNamePanel text="JOIN ROOM"   placeholderText={this.placeholderText} handleSubmit={this.joinRoom.bind(this)} />
          </div>
        </div>
      );
    }
    else if (this.state.phase == Phase.Game || this.state.phase == Phase.GameLobby) {
        return (
          <Game quitCallback={this.switchToHome} />
        );
    }

  }

  localCheckRoomName = (room_name) => {
    return (room_name != "");
  }



  createRoom = (room_name) => {
    if (this.localCheckRoomName(room_name) == true) {
      socket.send('Z: '+room_name+'\n');
      // this.switchToGame(true);
    }
  }

  joinRoom (room_name) {
    if (this.localCheckRoomName(room_name) == true) {
      this.switchToGame(false)
    }
  }



  switchToGame = (created) => {
    if (created) {
      this.setState({phase: Phase.GameLobby, host: true});
    } else {
      this.setState({phase: Phase.GameLobby, host: false});
    }
  }

  switchToHome = () => {
    this.setState({phase: Phase.Home, host: null});
  }


}

// ========================================

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);

