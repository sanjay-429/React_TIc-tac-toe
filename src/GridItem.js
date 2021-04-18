import React, { Component } from 'react'

class GridItem extends Component {
    constructor (props){
        super(props);
    }
    render(){
        return (
            <div className = "grid-item" onClick={()=>
            {this.props.handlePlayerClick(this.props.rowIndex, this.props.colIndex)}}>
                {this.props.col}
            </div>
        )
    };
}
export default GridItem;