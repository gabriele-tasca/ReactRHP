import React from 'react';

export class RoomsList extends React.Component {
  
    render() {
        return (

        <div style={{ padding: '10px', display: 'flex', justifyItems: 'center', alignItems: 'center',  width: '100%', transition: 'all 0.15s'
    }}>
            <div style={{display: 'flex', flexDirection: 'column',   width: '100%', transition: 'all 0.15s' }}>
              <div style={{textAlign: 'center', paddingBottom: '10px', transition: 'all 0.15s'}}>
                Join a room: <br/>
              </div>

                {/* {arrayItems(this.props.roomsArray)} */}
                {/* {arrayItems(["a","b","e","g","ry","wu","wertu",])} */}
                {/* {arrayItems(["a","b","e","g","ry","wu","wertu","e5","6uiq","a5y","ey","w5u","w4u","w4","6u4","wuw","5uw","45u"])} */}
                {arrayItems(["a","b","e","g","ry","wu","wertu","e5","6uiq","a5y","ey","w5u","w4u","w4","6u4","wuw","5uw","45u"])}
            </div>
        </div>

        );
    }
  
}
  

function arrayItems(array) {
    if (array.length != 0) {
        return array.map((name) =>
        <RoomPanel key={name} name={name}/>
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
        this.timer = null
    }

    componentDidMount() {

        this.timer = setTimeout(this.appear, 1);

    }

    render() {
        return (

            <button className='listbutton' style={this.state.reveal? {opacity: '100'}:{opacity: '0'}}>
                {this.props.name} 
            </button>

        );
    }

    appear = () => {

        this.setState({reveal: true})
        clearTimeout(this.timer); // remove timer

    };
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