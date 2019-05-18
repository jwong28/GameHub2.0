import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import './App.css';

import TicTacToe from './components/games/TicTacToe';
import Snake from './components/games/Snake/snakeGame';
//import Pong from './components/games/Pong/pong';
import RockPaperScissors from './components/games/RockPaperScissors/rpsgame';
//import FlappyBird from './components/games/FlappyBird/flappyBird'
import axios from "axios"

import Home from "./components/dashboard/Home";
import About from "./components/dashboard/About";
import Scores from "./components/dashboard/Scores";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import { Provider } from "react-redux";
import store from "./store";

import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}
/* Changes from original tutorial
 *  - Here we import the tic-tac-toe game from a module
 *    so we import the folder, and use the name
 *    TicTacToe instead of the generic Game
 *    (actually we can use any name we like
 *     such as import Foo from './TicTacToe')
 */

class App extends Component {
  ///
  state = {
    data: [],
    id: 0,
    message: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null
  };

  // when component mounts, first thing it does is fetch all existing data in our db
  componentDidMount() {
    // this.getDataFromDb();
    // if (!this.state.intervalIsSet) {
    //   let interval = setInterval(this.getDataFromDb, 1000);
    //   this.setState({ intervalIsSet: interval });
    // }
  }

  // kill a process everytime we are done using it
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  // // just a note, here, in the front end, we use the id key of our data object 
  // // in order to identify which we want to Update or delete.
  // // for our back end, we use the object id assigned by MongoDB to modify 
  // // data base entries

  // // fetch data from our data base
  // getDataFromDb = () => {
  //   fetch("http://localhost:3001/api/getData")
  //     .then(data => data.json())
  //     .then(res => this.setState({ data: res.data }));
  // };

  // // our put method that uses our backend api
  // // to create new query into our data base
  // putDataToDB = message => {
  //   let currentIds = this.state.data.map(data => data.id);
  //   let idToBeAdded = 0;
  //   while (currentIds.includes(idToBeAdded)) {
  //     ++idToBeAdded;
  //   }

  //   axios.post("http://localhost:3001/api/putData", {
  //     id: idToBeAdded,
  //     message: message
  //   });
  // };


  // our delete method that uses our backend api 
  // to remove existing database information
  deleteFromDB = idTodelete => {
    let objIdToDelete = null;
    this.state.data.forEach(dat => {
      if (dat.id == idTodelete) {
        objIdToDelete = dat._id;
      }
    });

    axios.delete("http://localhost:3001/api/deleteData", {
      data: {
        id: objIdToDelete
      }
    });
  };


  // our update method that uses our backend api
  // to overwrite existing data base information
  updateDB = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    this.state.data.forEach(dat => {
      if (dat.id == idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post("http://localhost:3001/api/updateData", {
      id: objIdToUpdate,
      update: { message: updateToApply }
    });
  };

  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        <Provider store={store}>
          <Router>
            <div className="App">
              <Navbar />
              <Route exact path="/" component={Home} />
              <Route exact path="/About" component={About}/>
              <Route exact path="/Scores" component={Scores}/>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/Game/RockPaperScissors" component={RockPaperScissors} />
              {/*<Route exact path="/Game/FlappyBird" component={FlappyBird} />
              <Route exact path="/Game/Pong" component={Pong}/>*/}
              <Route exact path="/Game/TicTacToe" component={TicTacToe}/>
              <Route exact path="/Game/Snake" component={Snake}/>
              <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
            </div>
          </Router>
          {/* <div>
            <TicTacToe />
            <ul>
              {data.length <= 0
                ? "NO DB ENTRIES YET"
                : data.map(dat => (
                    <li style={{ padding: "10px" }} key={data.message}>
                      <span style={{ color: "gray" }}> id: </span> {dat.id} <br />
                      <span style={{ color: "gray" }}> data: </span>
                      {dat.message}
                    </li>
                  ))}
            </ul>
            <div style={{ padding: "10px" }}>
              <input
                type="text"
                onChange={e => this.setState({ message: e.target.value })}
                placeholder="add something in the database"
                style={{ width: "200px" }}
              />
              <button onClick={() => this.putDataToDB(this.state.message)}>
                ADD
              </button>
            </div>
            <div style={{ padding: "10px" }}>
              <input
                type="text"
                style={{ width: "200px" }}
                onChange={e => this.setState({ idToDelete: e.target.value })}
                placeholder="put id of item to delete here"
              />
              <button onClick={() => this.deleteFromDB(this.state.idToDelete)}>
                DELETE
              </button>
            </div>
            <div style={{ padding: "10px" }}>
              <input
                type="text"
                style={{ width: "200px" }}
                onChange={e => this.setState({ idToUpdate: e.target.value })}
                placeholder="id of item to update here"
              />
              <input
                type="text"
                style={{ width: "200px" }}
                onChange={e => this.setState({ updateToApply: e.target.value })}
                placeholder="put new value of the item here"
              />
              <button
                onClick={() =>
                  this.updateDB(this.state.idToUpdate, this.state.updateToApply)
                }
              >
                UPDATE
              </button>
            </div>
          </div> */}
        </Provider>
      </React.Fragment> 
    );
  }
}

export default App;
