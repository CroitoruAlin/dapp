import React, {Component} from 'react';
import {parkingContract, transactionObject} from "./setup";

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {parking: {id: 0, description: "", pricePerDay: 0}};
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this)

    }

    render() {
        return (
            <div className="container border mt-3 p-2">
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                <input className="input-group-append form-control" id="description" type="text" value={this.state.parking.description} onChange={this.handleChange2}/>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price/Day(in wei)</label>
                <input id="price" className="input-group-append form-control" type="number" value={this.state.parking.pricePerDay}
                       onChange={this.handleChange3}/>
                </div>
                <input className="btn-success" type="submit" value="Submit"/>
            </form>
            </div>
        )
    }


    handleChange2(event) {
        let parking = this.state.parking;
        parking.description = event.target.value;
        this.setState({parking});
    }

    handleChange3(event) {
        let parking = this.state.parking;
        parking.pricePerDay = event.target.value;
        this.setState({parking});
    }

    handleSubmit() {


        parkingContract.addSpot.sendTransaction(this.state.parking.description, this.state.parking.pricePerDay, transactionObject);
        alert("registration was successful");

    }
}

export default Register;