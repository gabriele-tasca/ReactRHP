import React from 'react';


export class About extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {value: this.props.startingText}; // non-placeholder default text
    }

    render() {
        return (
        <div className='gridcontainer' >
            <div>Mongrels</div>
            <div>Mongrels</div>
            <div>Mongrels</div>
            <div>Mongrels</div>
        </div>
        );
    }
}