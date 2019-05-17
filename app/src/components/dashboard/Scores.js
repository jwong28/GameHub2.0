import React, { Component } from "react";

export default class Scores extends Component{
    render(){
        return(
            <div class="container-fluid">
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg sticky-top">
            <a class="navbar-brand" href="#"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="home.html">Home</a>
                    </li>
                    <li class="nav-item active">
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
        <table>
            <tbody>
                <tr>
                    <th style="width:70%">
                        Game Name
                    </th>
                    <th>
                        High Score
                    </th>
                </tr>
                <tr class="even">
                    <td>
                        <a href="/GameHub2.0/src/Snake/snake.html">Snake</a>
                    </td>
                    <td>
                        0
                    </td>
                </tr>
                <tr class="odd">
                    <td>
                        <a href="/GameHub2.0/src/RockPaperScissors/rockpaperscissors.html">Rock Paper Scissors</a>
                    </td>
                    <td>
                        0
                    </td>
                </tr>
                <tr class="even">
                    <td>
                        <a href="index.html">Tic Tac Toe</a>
                    </td>
                    <td>
                        0
                    </td>
                </tr>
                <tr class="odd">
                    <td>
                        <a href="/GameHub2.0/src/CrossyRoad/crossyRoad.html">Crossy Road</a>
                    </td>
                    <td>
                        0
                    </td>
                </tr>
                <tr class="even">
                    <td>
                        <a href="/GameHub2.0/src/Pong/pong.html">Pong</a>
                    </td>
                    <td>
                        0
                    </td>
                </tr>
                <tr class="odd">
                    <td>
                        <a href="/GameHub2.0/src/FlappyBird/flappyBird.html">Flappy Bird</a>
                    </td>
                    <td>
                        0
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
        )
    }
}