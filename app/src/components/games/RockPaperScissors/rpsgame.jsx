import React from 'react';
import happy from '../../img/happy.png';
import sad from '../../img/sad.png';
import rock from '../../img/rock.png';
import paper from '../../img/paper.png';
import scissor from '../../img/scissor.png';

import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import "../../../stylesheets/rps.css";
import "../../../stylesheets/rps.css";
import * as util from './rps';


export default class rpsgame extends React.Component{
  constructor(props){
    super(props);
    this.state ={
        user: 0,
        comp: 0,
        compPick: paper,
    }
    this.randComputerChoice = this.randComputerChoice.bind(this);
    this.win = this.win.bind(this);
    this.lose = this.lose.bind(this);
    this.userChoice = this.userChoice.bind(this);
  }

randComputerChoice = () => {
    const choices = ['r','p','s'];
    const rand = Math.floor(Math.random()*3);
    this.changeImage(choices[rand]);
    return choices[rand];
}

changeImage = (compImage) =>{
  switch(compImage){
    case 'r':
      this.setState({compPick: rock});
    break;
    case 'p':
     this.setState({compPick: paper});
    break;
    case 's':
      this.setState({compPick: scissor});
    break;
  }
}

convertToWord = (letter) => {
    if(letter === "r") return "rock";
    if(letter === "p") return "paper";
    return "scissor";
}

win = (userChoice, computerChoice) => {
    this.setState({user: this.state.user+1});
  }

lose = (userChoice, computerChoice) => {
  this.setState({comp: this.state.comp+1});
}

draw = (userChoice, computerChoice) => {
}

userChoice = (choice) => {
    const computerChoice = this.randComputerChoice();
    console.log(choice);
    switch(choice+computerChoice){
        case "pr":
        case "sp":
        case "rs":
            this.win(choice,computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            this.lose(choice,computerChoice);
            break;
        case "pp":
        case "ss":
        case "rr":
            this.draw(choice,computerChoice);
            break;
    }
}

rockPick = () => {
  this.userChoice("r");
}

paperPick = () => {
  this.userChoice("p");
}

scissorPick = () => {
  this.userChoice("s");
}


  render(){
    return(
      <div>
      <meta charSet="utf-8" />
      <title>Rock Paper Scissors Game</title>
      <div className="container-fluid">
        <header>
          <h1>Rock Paper Scissors</h1>
        </header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="score-board">
                <div id="user" className="badge">User</div>
                <div id="computer" className="badge">Comp</div>
                <span id="user-score">{this.state.user}</span>:<span id="computer-score">{this.state.comp}</span>
                <div><img className="emotion" id="happy" src={happy} /></div>
                <div><img className="emotion" id="sad" src={sad} /></div>
              </div>
              <div className="result">
                <p>Good Luck!</p>
              </div>

              <div className="choices">
                <div className="choice" id="compChoice">
                  <img src={this.state.compPick}></img>
                </div>
              </div>
              <div className="choices">
                <button className="choice" id="Rock" onClick={this.rockPick}>
                  <img src={rock} />
                </button>
=                
                <button className="choice" id="Paper" onClick={this.paperPick}>
                  <img src={paper} />
                </button>
                <button className="choice" id="Scissor" onClick={this.scissorPick}>
                  <img src={scissor} />
                </button>
              </div>
            </div>
            {/* <div class="col-md-3">
                  <div class="image">
                      <img class="emotion" src="/GameHub2.0/img/happy.png" id="compHappy">
                      <img class="emotion" src="/GameHub2.0/img/sad.png" id="compSad">
                  </div>
              </div> */}
          </div>
        </div>
      </div>
    </div>

    )
  }
}