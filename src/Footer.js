import React, { Component } from 'react'

export default class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.turn === "X" || this.props.turn === "O") {
            return (
                <div>
                    <h3>It's Player{this.props.turn}'s turn</h3>
                </div>
            )
        }else{
            return (
                <div>
                    <h3>{this.props.turn}</h3>
                </div>
            )
        }
    }
}