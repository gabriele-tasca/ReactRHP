import React from 'react';
import { ReactComponent as IconAutorenew } from './icons/autorenew_black_24dp.svg';
import { ReactComponent as IconBolt } from './icons/bolt_black_24dp.svg';
import { ReactComponent as IconRoute } from './icons/fork_left_black_24dp.svg';

export class About extends React.Component {

    render() {
        return (
        <div style={{display:'flex', flexDirection: 'column', justifyContent:'center', alignContent:'center', overflowY:'auto' }}>
            <div style={{display:'flex', justifyContent:'center', alignContent:'center', overflowY:'auto' }} >

                <div className='gridentrytop'> A React UI for a multiplayer web game </div>
            </div>
            <div style={{height:'50px'}}></div>
            <div style={{display:'flex', alignItems:'flex-start', flexDirection: 'row', justifyContent:'center', alignContent:'center', flexWrap:'wrap', }} >

                <GridEntry icon={<IconAutorenew/>} text={'Responsive UI adapts to the screen size'}/>
                <GridEntry icon={<IconRoute/>} text={'DOM routing allows to join rooms via direct link'}/>
                <GridEntry icon={<IconBolt/>} text={'The room list is synced to the server in real time'}/>

                {/* <div className='gridentry'>Responsive UI adapts to the screen size</div>

                <div className='gridentry'>DOM routing allows to join rooms via direct link </div>

                <div className='gridentry'>The room list is updated in real time based on data provided by the WS server</div> */}


            </div>
        </div>
        );
    }
}

export class GridEntry extends React.Component {
    render() {
        return (

            <div className='gridentry' style={{display:'flex', flexDirection: 'column', justifyContent:'center', alignContent:'center' }}>
            <div > {this.props.icon} </div>
            <div style={{height:'10px'}}></div>
            <div > {this.props.text} </div>
        </div>
        );
    }
}