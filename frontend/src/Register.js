import React, {Component} from 'react';
import {parkingContract, transactionObject} from "./setup";

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {parking: {id: 0, description: "", pricePerDay: 0}};
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this)

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input className="input-group-append" type="number" value={this.state.parking.id}
                       onChange={this.handleChange1}/>
                <input className="input-group-append" type="text" value={this.state.parking.description}
                       onChange={this.handleChange2}/>
                <input className="input-group-append" type="number" value={this.state.parking.pricePerDay}
                       onChange={this.handleChange3}/>
                <input className="input-group-append" type="submit" value="Submit"/>
            </form>
        )
    }

    handleChange1(event) {
        let parking = this.state.parking;
        parking.id = event.target.value;
        this.setState({parking});
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
        alert(this.state.parking.id);
        if (!parkingContract.isRegistered(this.state.parking.id)) {
            parkingContract.registerNewParking.sendTransaction(this.state.parking.id, this.state.parking.pricePerDay, this.state.parking.description, transactionObject);

            alert("registration was successful");
        } else {
            alert("Failed, probably a parking spot with this id already exist");
        }
    }
}

export default Register;