import React from 'react';
import { NavLink } from "react-router-dom";


export class MainBar extends React.Component{
    render() {
        return (
            <div className='mainbar' >
                                        
                <div className='mainbar-button-div'>

                    <div className='maintitle'  >
                        <div style={{textAlign:'center', width:'100%'}}>  RhP React </div>
                    </div>

                    <NavLink to="/" className={ ({ isActive }) => (isActive ? "mainbarbutton-active" : "mainbarbutton-inactive mainbarbutton-active")} > 
                            <div style={{textAlign:'center', width:'100%'}}>Play</div>
                    </NavLink>


                    <NavLink to="about" className={ ({ isActive }) => (isActive ? "mainbarbutton-active" : "mainbarbutton-inactive mainbarbutton-active")} > 
                        <div style={{textAlign:'center', width:'100%', height:'100%'}}>About</div>
                    </NavLink>

                </div>

            </div>
        );
    }
}