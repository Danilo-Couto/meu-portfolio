import './App.css';
import { React, Component } from 'react';

class App extends Component {
  constructor(){
    super();

    this.state = {
      board: Array(9).fill(""),
      // board: ['','','','','','','','',''],   
      player: 'X',
      winner: '',     
    }
  }

  checkDraw = () => {
    const {board} = this.state;  
    if (board.every(elem => elem !== ''))
       
    this.setState({
      winner: 'Empate'
    })
  }

  checkWinner =() => {
    const {board, player } = this.state;  
    const winningComb = [
    [board[0], board[1], board[2]],
    [board[3], board[4], board[5]],
    [board[6], board[7], board[8]],
    [board[0], board[4], board[8]],
    [board[2], board[4], board[6]],
    [board[0], board[3], board[6]],
    [board[1], board[4], board[7]],
    [board[2], board[5], board[8]],
  ];

  winningComb.forEach((lines)=> {
    if (lines.every(elem => {
      return elem === player})) { 
        this.setState ({ winner: player })
      }
      this.checkDraw();
    }
  )
    this.setState({ player: player === 'O'? 'X' : 'O' })
}
  
  play = (index) => {
    const {player, winner, board} = this.state;  

    if (winner || board[index] !== '' ) {
      return null;
    }
    this.setState ({
      board: board.map((cell, cellIndex) =>
       ( index === cellIndex) ? player : cell
      ),
    },() => this.checkWinner(player)) // !IMPORTANTE!
  }

  reset = () => {
    this.setState ({
      board: Array(9).fill(""),
      player: 'O',
      winner: '',     
    })
  }

  render () {
    const { board, player, winner } = this.state;
    return (
      <main>
        <header> 
          <h1 className='title'> Jogo da Velha</h1>
          <h2 className='winner-message'> 
            <span className={winner}> 
            {winner ? `${winner} GANHOU!` : `Jogador da vez: ${player}`} 
            </span>
          </h2>
        </header>
          <div className={`board ${winner? 'game-over' : '' }`}>
          {board.map((cell, index)=> (
            <div 
              key={index} 
              className={`cell ${cell}`} 
              onClick={() => this.play(index)}            
            >
              {cell}
            </div>))}
          </div>
          {winner && 
          <footer>
            <button onClick = {this.reset} >
              Recomeçar Jogo
            </button>
          </footer>          
          }
      </main>
    )
  }
  
}

export default App;
// css: https://github.com/Danilo-Couto/sd-017-dojo-js-dom/tree/resposta
// ajuda do Gabriel Pinheiro, Tribo 16 B