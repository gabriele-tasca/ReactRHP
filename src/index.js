import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import {styles} from "./styles";

import { Game } from './game'
import { RoomsList } from './RoomsList'



function randomRoomName () {
  return "room"+String(Math.floor(Math.random()*(999-100+1)+100));
}




class EnterRoomNamePanel extends React.Component {
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
      <div style={{justifyContent: 'center', padding: '0px', width: '100%', }}>

        <form onSubmit={this.handleSubmit}> 
          
          <div style={{padding: '10px', width: '100%', }}>
            <input 
              type="text" 
              value={this.state.value} 
              placeholder={this.props.placeholderText} 
              className='textField1'
              onChange={this.handleChange} />
          </div>

          <div style={{padding: '10px', width: '100%',  }}> 
            <input type="submit" value={this.props.text} className='button3'/>
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
      roomsArray: []
    };
    this.createRoom = this.createRoom.bind(this);
    this.joinRoom = this.joinRoom.bind(this);
    this.requestList = this.requestList.bind(this);
    this.readMessage = this.readMessage.bind(this);

    this.placeholderText = basePlaceholderText
    this.socket = null
  }

  componentDidMount() {
    // Create WebSocket connection.
    this.socket = new WebSocket('ws://localhost:9080');

    // Connection opened
    this.socket.addEventListener('open', this.requestList);

    // Listen for messages
    this.socket.addEventListener('message', this.readMessage);
  }

  componentWillUnmount() {

  }


  render() {
    if (this.state.phase == Phase.Home) {
      return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', height: '100%' }}>

          <div style={{ display: 'flex', justifyItems: 'center', alignItems: 'center', width: '30%', padding: '10px'}} 
                className='maintitle'>
            <b> Rhymepong React </b>
          </div>

          <div style={{ display: 'flex', justifyItems: 'center', alignItems: 'center',  width: '30%', }}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <div style={{textAlign: 'center', paddingBottom: '10px', }}>
                Create a room: <br/>
              </div>

              <EnterRoomNamePanel text="CREATE" placeholderText={this.placeholderText} startingText={startingRoomName()} handleSubmit={this.createRoom.bind(this)}/>
            </div>
          </div>

          <div style={{ display: 'flex', justifyItems: 'center', alignItems: 'center',  width: '30%',  }}>
            <RoomsList roomsArray={this.state.roomsArray} />
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

  requestList = (_event) => {
      this.socket.send('L: \n');
  }

  readMessage = (event) => {
    if (event.data.startsWith("L: ")) {
      var roomsArray = JSON.parse(event.data.substr(3).trim());
      
      this.setState({roomsArray: roomsArray})
      console.log('parsed as ', roomsArray);
    }
  }

  localCheckRoomName = (room_name) => {
    return (room_name != "");
  }

  createRoom = (room_name) => {
    if (this.localCheckRoomName(room_name) == true) {
      this.socket.send('Z: '+room_name+'\n');
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

