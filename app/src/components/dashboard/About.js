import React, { Component } from "react";
import JeffersonImg from "../img/Jefferson.png";
import RyanImg from "../img/Ryan.png";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

class About extends Component {
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
            <div class="row">
                <div class="col-md-4">
                    <div class="image">
                        <img src={JeffersonImg}/>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="image">
                        <img src={RyanImg}/>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default About;