import React from 'react';

import {HOME} from './index'


export class RoomsList extends React.Component {
  
    render() {
        return (

        <div style={{  display: 'flex', justifyItems: 'center', alignItems: 'center',  width: '100%', height: '100%',  transition: 'all 1s' ,
    }}>
            
            <div style={{  width:'100%', maxHeight:'90%', overflowY:'auto', padding: '10px', transition: 'all 1s' ,}}> 

                    <div style={{display: 'flex', flexDirection: 'column',   width: '100%', transition: 'all 1s' ,
                    
                    }}>

                        <div style={{textAlign: 'center', paddingBottom: '10px', transition: 'all 1s'}}>
                            Join a room: <br/>
                        </div>

                        {arrayItems( this.props.roomsArray, this.props.navigateFunc )}
                        {/* {arrayItems(["a","b","e","g","ry","wu","wertu","e5","6uiq","a5y","ey","w5u","w4u","w4","6u4","wuw","5uw","45u"])} */}
                    </div>

            </div>

        </div>

        );
    }
  
}
  

function arrayItems(array, navigateFunc) {
    if (array.length !== 0) {
        return array.map((name) =>
        <RoomPanel key={name} name={name} navigateFunc={navigateFunc}/>
        );
    } else {
        return (
            <div className='secondarytext'>No rooms open, please create one.</div>
        );
    }
}


export class RoomPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {reveal: false}
        this.appear = this.appear.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.timer = null
    }

    componentDidMount() {

        this.timer = setTimeout(this.appear, 1);

    }

    render() {
        return (

            <button className='listbutton' onClick={this.handleClick} style={this.state.reveal? {opacity: '100'}:{opacity: '0'}}>
                {this.props.name} 
            </button>

        );
    }

    handleClick () {
        this.props.navigateFunc(HOME+"game/"+ this.props.name)
    }

    appear = () => {
        this.setState({reveal: true})
        clearTimeout(this.timer); // remove timer
    };
}

