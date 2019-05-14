import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import pongImg from "../img/pong.png";
import ticTacToeImg from "../img/ticTacToe.png";
import snakeImg from "../img/snake.png";
import rockPaperScissorsImg from "../img/rockPaperScissors.png";
import flappyBirdImg from "../img/flappyBird.png";
import crossyRoadImg from "../img/crossyRoad.png";
import home from "../../stylesheets/home.css"
// import Pong from "../games/Pong/pongReact";
// import pongContent from "../games/Pong/pong.html";
// var pongContent =require('../games/Pong/pong.html');
// import pongImng from "../img/pon"

class Home extends Component {
    componentDidMount () {
        var scripts = [
            "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js",
            "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
            "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
            "https://use.fontawesome.com/releases/v5.8.0/js/all.js"
        ];
        for (var index = 0; index < scripts.length; ++index) {
            var script = document.createElement('script');
            script.src = scripts[index];
            script.type='text/javascript';
            var done = false;
            script.onload = script.onreadystatechange = function() {
                if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
                    done = true;
                    //promptForUserEntries();
                }
            };  
            document.body.appendChild(script);
        }
            // const script = document.createElement("script");
            // script.src = ;
            // script.async = true;
            // document.body.appendChild(script);
    }
    
    render() {
      return (
        <div class="container-fluid">
        {/* <!-- Jumbotron --> */}
        <div class="jumbotron">
            <h1 class="display-4">Welcome to our Game Hub!</h1>
            <p class="lead">Developers Simon He and Jefferson Wong have brought traditional classic games right to the comfort of your own home! 
                            By providing a responsive and interactive design, you're able to play classic games with a click of your mouse. </p>
        </div>
        {/* <!-- Games Storage --> */}
        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body text-center">
                        <h5 class="card-title">Snake Game</h5>
                    </div>
                    <div class="image m-0">
                        <a href="/Snake">
                            <img class="img-thumbnail img-responsive" src={snakeImg}/>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body text-center">
                        <h5 class="card-title">Rock Paper Scissors</h5>
                    </div>
                    <div class="image m-0">
                        {/* <a href="/GameHub2.0/src/RockPaperScissors/rockpaperscissors.html">
                            <img class="img-thumbnail img-responsive" src="/GameHub2.0/img/rockPaperScissors.png">
                        </a> */}
                        <a href='/RockPaperScissors'>
                            <img class="img-thumbnail img-responsive" src={rockPaperScissorsImg}/>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body text-center">
                        <h5 class="card-title">Tic TacToe</h5>
                    </div>
                    <div class="image m-0">
                        {/* <TicTacToe/> */}
                        {/* <a href="/GameHub2.0/public/index.html">
                            <img class="img-thumbnail img-responsive" src="/GameHub2.0/img/ticTacToe.png">
                        </a> */}
                        {/* <a href="/GameHub2.0/public/index.html">
                        </a> */}
                        {/* <Link to={TicTacToe}> */}
                        {/* <Switch>
                            <Route exact path="/TicTacToe" component={TicTacToe}></Route>
                        </Switch> */}
                          {/* <Route>
                            <TicTacToe />
                        </Route> */}
                        <a href='/TicTacToe'>
                            <img class="img-thumbnail img-responsive" src={ticTacToeImg}/>
                        </a>
                        
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body text-center">
                        <h5 class="card-title">Flappy Bird</h5>
                    </div>
                    <div class="image m-0">
                        {/* <a href="/GameHub2.0/src/FlappyBird/flappyBird.html">
                            <img class="img-thumbnail img-responsive" src="/GameHub2.0/img/flappyBird.png">
                        </a> */}
                        <a href='/FlappyBird'>
                            <img class="img-thumbnail img-responsive" src={flappyBirdImg}/>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body text-center">
                        <h5 class="card-title">Pong Game</h5>
                    </div>
                    <div class="image m-0">
                        {/* <Pong/> */}
                            
                            {/* <div dangerouslySetInnerHTML={ {__html: pongContent} } /> */}
                            {/* <iframe src={pongContent }></iframe> */}
                            <a href="../games/Pong/pong.html">
                                <img class="img-thumbnail img-responsive" src={pongImg}/>
                            </a>
                            {/* <pongImg/> */}
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body text-center">
                        <h5 class="card-title">Crossy Road</h5>
                    </div>
                    <div class="image m-0">
                        {/* <a href="/GameHub2.0/src/CrossyRoad/crossyRoad.html">
                            <img class="img-thumbnail img-responsive" src="/GameHub2.0/img/crossyRoad.png">
                        </a> */}
                        <a href='/CrossyRoad'>
                            <img class="img-thumbnail img-responsive" src={crossyRoadImg}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
      );
    }
  }
  
  export default Home;