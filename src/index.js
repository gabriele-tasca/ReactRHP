import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { Game } from './game'
import { MainBar } from './MainBar'
import { About } from './about'
import { RoomSelect } from './RoomSelect'


import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Outlet,
  useNavigate
} from "react-router-dom";





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



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
      room_name: null,

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

      return (
           
        <BrowserRouter>

            <div className='bar-screen-div'>

              <MainBar/>

              <div className='mainscreen'>

                <Routes>

                  <Route path="/" element={ 
                    <RoomSelect roomsArray={this.state.roomsArray} handleSubmit={this.createRoom} />
                  }/>

                  <Route path="about" style={{height: '100%', width: '100%'}} element={ 
                    <About/>
                  }/>

                  <Route path="game" element={ <Outlet/> }>
                    <Route path=":roomName" element={ <Game/> }/>
                  </Route>

                  <Route
                        path="*"
                        element={
                            <div style={{display:'flex',justifyContent:'center',alignItems:'center', height:'100%', width:'100%'}}>
                              <div className='gridentrytop' >You followed an invalid link.</div>
                            </div>
                        }
                      />


                </Routes>

              </div>

            </div>

        </BrowserRouter>

        
      );


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
    // this.setState((state, props) => ({
    //   counter: state.roomsArray.push("fake room "+String(Math.floor(Math.random()*(999-100+1)+100))  )
    // }));

    if (this.localCheckRoomName(room_name) === true) {
      this.socket.send('Z: '+room_name+'\n');
      this.switchToGame(true, room_name);
    }
  }

  joinRoom (room_name) {
    if (this.localCheckRoomName(room_name) === true) {
      this.switchToGame(false, room_name)
    }
  }


  switchToGame = (created, room_name) => {
    // const navigate = useNavigate();
    // navigate("/game/cringe");
  }

  switchToHome = () => {
    this.setState({phase: Phase.Home, host: null});
  }


}

// ========================================

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);



