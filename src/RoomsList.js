import React from 'react';

export class RoomsList extends React.Component {
  
    render() {
        return (
            <div style={{ width: '100%', margin: '30px', overflowY: 'scroll',   height: '80%', display: 'flex', flexDirection: 'column', alignContent: 'center', }}> 
            
            <div style={{ display: 'flex', justifyContent: 'center'}}> 
                open rooms:
            </div>

            {arrayItems(["poggers", "mongrel1", "mongrel2", "mongrel3", "mongrel4", "mongrel5", ])}

            </div>

        );
    }
  
}
  

function arrayItems(array) {
    return array.map((name) =>
        <RoomPanel key={name} name={name}/>
  );
}


export class RoomPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hover: false}
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    render() {
        return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px'}} 
        onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} > 
            {this.props.name} 
            <div style={{width: '5%'}}/>
            <HideableButton className='button3small' hidden={!this.state.hover} text='JOIN'/>  
        </div>

        );
    }

    handleMouseEnter() {
        this.setState({hover: true})
    }
    handleMouseLeave() {
        this.setState({hover: false})
    }
}


export class HideableButton extends React.Component {

    render() {
        return (
            <button 
            className='button3small' 
            style={this.props.hidden? {opacity: '0'}:undefined}  
            > 
                {this.props.text} 
            </button>
            );
    }

}