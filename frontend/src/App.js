import React, {Component} from 'react';
import './App.css';
import Register from "./Register";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Header} from "./Header";
import Rent from "./Rent";
class App
extends
Component
{
    constructor(props)
    {
        super(props);
        this.state = {component:Register};
    }
    componentDidUpdate(){

    }

    render() {
        return (
            <Router>


                    <Route path="/" exact component={Header} />
                    <Route exact path="/register/" component={Header} />
                    <Route exact path="/rent/" component={Header} />
                    <Route exact path="/rent/" component={Rent} />
                    <Route exact path="/register/" component={Register}/>
            </Router>
        );
    }
}

export default App;
