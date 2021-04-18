import React, { Component } from 'react'
import Header from './Header'
import GridRow from './GridRow'
import Footer from './Footer'
import FooterButton from './FooterButton'

class App extends Component {
  constructor(props){
    super()
    this.state = {
      gameState : [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ],
      playerTurn : 'X',
      gameActive : true,
      count: 0
    }
  }

  winningCondition = () => {
    const {gameState, playerTurn} = this.state
    if(gameState[0][0] === playerTurn) {
      if(gameState[0][1] === playerTurn && gameState[0][2] === playerTurn) return true
      if(gameState[1][0] === playerTurn && gameState[2][0] === playerTurn) return true
      if(gameState[1][1] === playerTurn && gameState[2][2] === playerTurn) return true
    }

    if(gameState[2][2] === playerTurn) {
      if(gameState[0][2] === playerTurn && gameState[1][2] === playerTurn) return true
      if(gameState[2][0] === playerTurn && gameState[2][1] === playerTurn) return true
    }

    if(gameState[1][1] === playerTurn) {
      if(gameState[1][0] === playerTurn && gameState[1][2] === playerTurn) return true
      if(gameState[0][1] === playerTurn && gameState[2][1] === playerTurn) return true
      if(gameState[2][0] === playerTurn && gameState[0][2] === playerTurn) return true
    }
    return false
  }

  handlePlayerClick = (rowIndex, colIndex) => {
    if(this.state.gameActive && this.state.gameState[rowIndex][colIndex] === "") {
      let copiedGameState = [...this.state.gameState]
      copiedGameState[rowIndex][colIndex] = this.state.playerTurn
      this.setState({gameState : copiedGameState, count : this.state.count + 1})
      if(this.winningCondition()) {
        this.state.gameActive = false;
        this.setState({playerTurn : this.state.playerTurn === "X" ? "Congratulations PlayerX Wins!" : "Congratulations PlayerO Wins!"})
      }
      if(this.state.count === 8 && this.state.gameActive) {
        this.state.gameActive = false;
        this.setState({playerTurn : "Game Draw!"})
      }
      this.state.playerTurn = this.state.playerTurn === "X" ? "O" : "X";
    }
  }

  reload = () => {
    window.location.reload();
  }

  render() {
    return (
      <div className="container">
        <Header />
        <div id="board">
          {this.state.gameState.map((row, rowIndex) => {
            return <GridRow key={rowIndex} row={row} rowIndex={rowIndex} handlePlayerClick={this.handlePlayerClick} />
          })}
        </div>
        <Footer turn={this.state.playerTurn} />
        <FooterButton reload={this.reload} />
      </div>
    )
  }
}

export default App