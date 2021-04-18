import React, { Component } from 'react'
import GridItem from './GridItem'

class GridRow extends Component{
    constructor (props){
        super(props);
    }
    render() {
        return (
            <div className = "grid-row">
            {this.props.row.map((col, colIndex) => (
                <GridItem key={colIndex} rowIndex={this.props.rowIndex} col={col} colIndex = {colIndex} handlePlayerClick = {this.props.handlePlayerClick}/>
            ))}
            </div>
        )
    }
}
export default GridRow;