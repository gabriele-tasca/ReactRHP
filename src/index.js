import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// import {styles} from "./styles";

import { Game } from './game'
import { RoomsList } from './RoomsList'
import { EnterRoomNamePanel } from './EnterRoomNamePanel'

import { BrowserRouter } from "react-router-dom";

function randomRoomName () {
  return "room"+String(Math.floor(Math.random()*(999-100+1)+100));
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
    if (this.state.phase === Phase.Home) {
      return (
          <BrowserRouter>

          <div style={{display: 'flex', flexDirection: 'row', }}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', width:'17%'}} className='mainbar' >
            
              <div className='maintitle'  >
                Rhymepong React
              </div>
                
              <div style={{padding: '5px'}}>

                <div>
                  <Link to="/expenses">Expenses</Link>
                  <button className='mainbarbutton'> Play </button>
                </div>

                <div>
                  <button className='mainbarbutton'> About </button>
                </div>
              </div>

            </div>


            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%', height: '100%' }}>
              
              {/* <div style={{ display: 'flex', justifyItems: 'center', alignItems: 'center', width: '30%', padding: '10px'}} 
                    className='maintitle'>
                <b> Rhymepong React </b>
              </div> */}

              <div style={{ display: 'flex', justifyItems: 'center', alignItems: 'center',  width: '45%', }}>
                <div style={{display: 'flex', flexDirection: 'column', width:'100%'}}>

                  <div style={{textAlign: 'center', paddingBottom: '10px', }}>
                    Create a room: <br/>
                  </div>

                  <EnterRoomNamePanel text="CREATE" placeholderText={this.placeholderText} startingText={startingRoomName()} handleSubmit={this.createRoom} />
                
                </div>
              </div>

              <div style={{ display: 'flex', justifyItems: 'center', alignItems: 'center',  width: '45%', paddingRight:'10px' }}>
                <RoomsList roomsArray={this.state.roomsArray} />
              </div>
            </div>

          </div>
        </BrowserRouter>
      );
    }
    else if (this.state.phase === Phase.Game || this.state.phase === Phase.GameLobby) {
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
    return (room_name !== "");
  }

  createRoom = (room_name) => {
    this.setState((state, props) => ({
      counter: state.roomsArray.push("fake room "+String(Math.floor(Math.random()*(999-100+1)+100))  )
    }));

    // if (this.localCheckRoomName(room_name) === true) {
    //   this.socket.send('Z: '+room_name+'\n');
    //   // this.switchToGame(true);
    // }
  }

  joinRoom (room_name) {
    if (this.localCheckRoomName(room_name) === true) {
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

