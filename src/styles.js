// .button1 {
//     font-size: 30px
//   }

const TextMain = {
    fontSize: '30px',
    textAlign: 'center',

  }


const Button2 = {

      display: "inline-block",
      border: "0.1em solid #FFFFFF",
      margin: "0 0.3em 0.3em 0",
      borderRadius: "0.12em",
      boxSizing: "border-box",
      textDecoration: "none",
      fontFamily: "'Roboto',sans-serif",
      fontWeight: "300",
      color: "#FFFFFF",
      background: "#73AD21",
      textAlign: "center",
      transition: "all 0.2s"

    // "a_button1_hover": {
    //   "color": "#000000",
    //   "backgroundColor": "#FFFFFF"
    // },
    // "@media all and (max-width:30em)": {
    //   "__expression__": "all and (max-width:30em)",
    //   "a_button1": {
    //     "display": "block",
    //     "margin": "0.4em auto"
    //   }
    // }
}

const Button1 = {
    borderRadius: '25px',
    background: '#58a3f5',
    padding: '10px',
}
  
const Header = {
    padding: "10px 20px",
    textAlign: "center",
    color: "white",
    fontSize: "22px"
}
  
const ErrorMessage = {
    color: "white",
    fontSize: "13px"
}
  
export const styles = {
    Button1: Button1,
    Button2: Button2,
    Header: Header,
    ErrorMessage: ErrorMessage,
    TextMain: TextMain,
}