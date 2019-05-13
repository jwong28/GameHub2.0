import React, { Component } from "react";
import pongjs from "./pong";
import compRect from "./compRect";
import playerRect from "./playerRect";
import { userScore } from "./userScore";


class pongReact extends Component {
    constructor() {
        super();
        this.state = {
            user: " ",
          score : 0
        };
    }

    componentDidMount () {
        var scripts = [
            "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js",
            "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
            "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
            "https://use.fontawesome.com/releases/v5.8.0/js/all.js",
            "https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/p5.js",
            pongjs,
            compRect,
            playerRect,
            userScore
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
            
    }

    render() {
      return (
        <React.Fragment>
        {/* <Helmet>
        <title>Pong Game</title>
        <script src=></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
        <script src="https://use.fontawesome.com/releases/v5.8.0/js/all.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/p5.js"></script>
        {/* <script scr="pong.js"></script> }
        <script src="./pong.js"></script>
        <script src="./playerRect.js"></script>
        <script src="./compRect.js"></script>
        <script src="./pongBall.js"></script>
        <script src="./userScore.js"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        </link>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        </link>
        <link rel="stylesheet" href="./../../../../public/main.css">
        </link>
        </Helmet>
        <body> */}
            <div class="container-fluid">
                {/* <!-- Navigation --> */}
                <nav class="navbar navbar-dark bg-dark navbar-expand-lg sticky-top">
                    <a class="navbar-brand" href="#"></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="/GameHub2.0/public/home.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/GameHub2.0/public/listing.html">Games</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Genre
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="/GameHub2.0/public/listing.html">Action</a>
                                        <a class="dropdown-item" href="/GameHub2.0/public/listing.html">Horror</a>
                                        <a class="dropdown-item" href="/GameHub2.0/public/listing.html">Shooting</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/GameHub2.0/public/about.html">About</a>
                            </li>
                        </ul>
                    </div>
                </nav> 
                <header>
                    <h1>Pong Game</h1>
                </header>
                <div class="row">
                    <div class="col-md-12">
                        <div id="playArea"></div>
                    </div>
                </div>
            </div>
        {/* </body> */}
        </React.Fragment>
      );
    }
}

export default pongReact;