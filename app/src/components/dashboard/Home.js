import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import TicTacToe from '../games/TicTacToe'
import pongImg from "../img/pong.png";
import ticTacToeImg from "../img/ticTacToe.png"
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
        {/* <!-- Navigation --> */}
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg sticky-top">
            <a class="navbar-brand" href="#"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="home.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="listing.html">Games</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Genre
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="listing.html">Action</a>
                                <a class="dropdown-item" href="listing.html">Horror</a>
                                <a class="dropdown-item" href="listing.html">Shooting</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">About</a>
                    </li>
                </ul>
            </div>
        </nav>  
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
                        {/* <a href="/GameHub2.0/src/Snake/snake.html">
                            <img class="img-thumbnail img-responsive" src="/GameHub2.0/img/snake.png">
                        </a> */}
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
                            <img class="img-thumbnail img-responsive" src={ticTacToeImg}>
                            </img>
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
                            
                            <img class="img-thumbnail img-responsive" src={pongImg}>
                            </img>
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
                    </div>
                </div>
            </div>
        </div>
    </div>
      );
    }
  }
  
  export default Home;