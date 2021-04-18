import React, { Component } from 'react';
import './index.css';

export default class FooterButton extends Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <button  onClick={this.props.reload}>Restart</button>
        )
    }
}