import React, { Component } from 'react';
import '../TicTacToe/TicTacToe.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends Component {
  
  
  renderSquare(i) {
    return (<Square value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}/> );
  }

  render() {
    return (
      <div>

        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      myTurn: true,
    };
  }

  componentDidMount(){


    const displayClick = data => {
      const squares = this.state.squares.slice();
      const i = data.square_num;
      if (calculateWinner(squares) || squares[i]) {
      return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
      })
    }
  }


  
  handleClick(i) {

    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({

        squares: squares,
        xIsNext: !this.state.xIsNext,
        
    });
  }


  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;

    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div>
        <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="description" content />
          <meta name="author" content />
          <title>GameHub</title>
          {/* Bootstrap core CSS */}
          <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
          {/* Custom fonts for this template */}
          <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
          {/* Custom styles for this template */}
          <link href="./css/freelancer.min.css" rel="stylesheet" />
        <h1>Multiplayer Tic-Tac-Toe</h1> 

        <div className="game">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
              <h3>Score</h3>
            </div>
            <div class="col-md-2"></div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div className="game-board">

                <Board 
                      squares={this.state.squares}
                      onClick={(i) => this.handleClick(i)} />
              </div>
            </div>
          </div>
          <div className="game-info">
            <div>{status}</div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
export default Game;
