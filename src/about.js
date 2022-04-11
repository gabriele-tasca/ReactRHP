import React from 'react';


export class About extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {value: this.props.startingText}; // non-placeholder default text
    }

    render() {
        return (
        <div style={{display:'flex', flexDirection: 'column', justifyContent:'center', alignContent:'center',}}>

            <div className='gridentry'> A React UI for a multiplayer web game </div>
            <div style={{height:'50px'}}></div>
            <div style={{display:'flex', flexDirection: 'row', justifyContent:'center', alignContent:'center',}} >
                <div className='gridentry'>Responsive UI adapts to the screen size</div>
                <div className='gridentry'>DOM routing allows to join rooms via direct link </div>
                <div className='gridentry'>The room list is updated in real time based on data provided by the WS server</div>

            </div>
        </div>
        );
    }
}