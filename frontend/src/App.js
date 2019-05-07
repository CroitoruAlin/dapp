import React, {Component} from 'react';
import './App.css';
import Register from "./Register";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Header} from "./Header";
import Rent from "./Rent";
import Reclaim from "./Reclaim";
import InfoRentedSpots from "./InfoRentedSpots";
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
                <Route exact path="/reclaim/" component={Header} />
                <Route exact path="/rent/" component={Rent} />
                    <Route exact path="/register/" component={Register}/>
                <Route exact path="/reclaim/" component={Reclaim} />
                <Route exact path={"/info"} component={Header}/>
                <Route exact path={"/info"} component={InfoRentedSpots}/>

            </Router>
        );
    }
}

export default App;
