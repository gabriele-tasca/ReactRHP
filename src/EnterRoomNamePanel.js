import React from 'react';

export class EnterRoomNamePanel extends React.Component {
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
      this.props.navigateFunc("/game/"+ this.state.value)
    }
  
    render() {
      return (
        <div style={{justifyContent: 'center', padding: '0px', width: '100%',}}>
  
          <form onSubmit={this.handleSubmit} style={{padding: '10px',}}> 
        
            <div style={{paddingRight:'10px', paddingLeft:'10px',paddingBottom:'10px', width:'100%'}}>
              <input 
                type="text" 
                value={this.state.value} 
                placeholder={this.props.placeholderText} 
                className='textField1'
                onChange={this.handleChange} />
            </div>
  
            <div style={{marginRight:'30px', paddingLeft:'10px', paddingTop:'10px', width:'100%'}}> 
              <input type="submit" value={this.props.text} 
              className='button3'
              />
            </div>
  
          </form>
        </div>
      );
    }
}