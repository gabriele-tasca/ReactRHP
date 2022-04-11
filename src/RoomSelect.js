import React from 'react'
import { RoomsList } from './RoomsList'
import { EnterRoomNamePanel } from './EnterRoomNamePanel'


import {

    useNavigate
  } from "react-router-dom";
  
  

export function RoomSelect (props) {
        const navigate = useNavigate();


        return (

        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%', height: '100%',
        flexWrap:'wrap' }}>
        

            <div style={{ display: 'flex', justifyItems: 'center', alignItems: 'center', width:'100%', maxWidth: '500px', }}>
                <div style={{display: 'flex', flexDirection: 'column', width:'100%'}}>

                <div style={{textAlign: 'center', paddingBottom: '10px', }}>
                    Create a room: <br/>
                </div>

                <EnterRoomNamePanel text="CREATE" placeholderText={props.placeholderText} startingText={randomRoomName()} handleSubmit={props.handleSubmit} navigateFunc={navigate}/>
                
                </div>
            </div>

            <div style={{ display: 'flex', justifyItems: 'center', alignItems: 'center', width:'100%', maxWidth: '500px', paddingRight:'10px' }}>
                <RoomsList roomsArray={props.roomsArray} />
            </div>

        </div>



        );
    }

// function switchToGame() {
//     const navigate = useNavigate();

//     navigate("/game/cringe");
// }


function randomRoomName () {
    return "room"+String(Math.floor(Math.random()*(999-100+1)+100));
  }