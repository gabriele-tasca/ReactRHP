import React from 'react';
import './index.css';

import {
  useParams,
//   useNavigate,
} from "react-router-dom";



// export class Game extends React.Component {
//     // constructor(props) {
//     //   super(props);
//     //   this.handleQuitClick = this.handleQuitClick.bind(this);
//     //   this.tick = this.tick.bind(this);
//     //   this.state = {ballX: 0, ballY: 10}

//     // }

//     // componentDidMount() {
//     //   this.timerID = setInterval( () => this.tick(), 33.33 );

//     //   this.canvas = document.getElementById('canvas');
//     //   this.canvas.width = 100;
//     //   // this.canvas.height = window.innerHeight;

//     //   this.ctx = this.canvas.getContext('2d');

//     // }

//     // componentWillUnmount() {
//     //   clearInterval(this.timerID);
//     // }

//     // tick() {
//     //   // this.setState({
//     //   //     frame: 1000
//     //   // });

//     //   // var old = this.ballStyle.getPropertyValue("top").replace("px", "");
      
//     //   this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

//     //   this.state.ballY += 2
//     //   drawCircle(this.ctx, 50, this.state.ballY, 30, "darkblue")
//     // }

//     // enterText(text) {
//     //   console.log(text)
//     // }

//     render() {
//       return (

        
//       <div style={{display:'flex',justifyContent:'center',alignItems:'center', height:'100%', width:'100%'}}>
//         <div>
//           Game Placeholder Screen<br/>
//           <RoomNameDisplay/>
//         </div>
//       </div>


//       );
//     }
  
//     handleQuitClick() {
//       this.props.quitCallback()
//     }
//   }

export function Game() {
  var params = useParams();
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center', height:'100%', width:'100%'}}>
      <div>
        Game Placeholder Screen<br/>
        Room name: {params.roomName}
      </div>
    </div>
  );
}





// class ChatBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''}; // non-placeholder default text
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }
//   handleSubmit(event) {
//     event.preventDefault();
//     // do checks here and not up, probably
//     this.props.passTextUp(this.state.value)
//     this.setState({value:''}); // clear text in bar
//   }

//   render() {
//     return (
//       <div style={{display: 'flex', justifyContent: 'center', padding: '5px', width: '100%'}}>
//         <form onSubmit={this.handleSubmit}> 


//             <input 
//               type="text" 
//               value={this.state.value} 
//               placeholder='type here...'
//               className='textField1'
//               style={{width: '100%'}}
//               onChange={this.handleChange} 
//             />

//         </form>
//       </div>
//     );
//   }
// }





// function drawCircle(ctx, x, y, radius, fill) {
//   ctx.beginPath()
//   ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
//   if (fill) {
//     ctx.fillStyle = fill
//     ctx.fill()
//   }
// }





// {/* <div style={{ display: 'flex', flexDirection: 'column', width: '100%'}}>

//   <div style={{margin: '5px', display: 'flex', height: '80%'}}>

//     <div style={{width: '82%', border: 'solid'}}>
//       <canvas id="canvas" style={{position: 'absolute', border: 'solid'}} ></canvas>

//     </div>


//     <div style={{margin: '5px', padding: '5px', width: '16%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
//       <button className='button3' onClick={this.handleQuitClick}> QUIT </button>
//       <button className='button3' onClick={this.handleQuitClick}> QUIT </button>
//     </div>

//   </div>

//   <div style={{ display: 'flex', justifyContent: 'center', height: '20%', width: '100%'}}>
//     <ChatBar passTextUp={this.enterText}/>
//   </div> 


// </div>*/}