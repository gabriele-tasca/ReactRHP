import React from 'react';

export class RoomsList extends React.Component {
  
    render() {
        return (
            <div style={{ width: '100%', margin: '30px', overflowY: 'scroll',   height: '80%', display: 'flex', flexDirection: 'column', alignContent: 'center', }}> 
            
            <div style={{ display: 'flex', justifyContent: 'center'}}> 
                open rooms:
            </div>


            {arrayItems(["poggers", "mongrel", "mongrel", "mongrel", "mongrel", "mongrel", "mongrel", "mongrel", "mongrel", "mongrel", "mongrel", "mongrel", "mongrel", "mongrel", "mongrel", "mongrel", "mongrel", "mongrel", "mongrel", "mongrel", "mongrel", "mongrel", "mongrel", "mongrel", "mongrel"])}

            </div>

        );
    }
  
}
  

function arrayItems(array) {
    return array.map((name) =>
    <div key={name} style={{ display: 'flex', justifyContent: 'center'}}> 
        {name}
        <button> JOIN</button>
    </div>
  );
}


export class RoomPanel extends React.Component {
    render() {
        return (
            <div key={this.props.name} style={{ display: 'flex', justifyContent: 'center'}}> 
            {this.props.name}
            <button className='button3'> JOIN</button>
        </div>

        );
    }
  
}