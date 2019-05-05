import React, {Component} from "react";
import {parkingContract, transactionObject} from "./setup";
class Rent extends Component{


    constructor(props) {
        super(props);
        this.state = {client: {id: 0, firstname: "", lastname: "",noDays:0}};
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange4 = this.handleChange4.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this)

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input className="input-group-append" type="number" value={this.state.client.id}
                       onChange={this.handleChange1}/>
                <input className="input-group-append" type="text" value={this.state.client.firstname}
                       onChange={this.handleChange2}/>
                <input className="input-group-append" type="text" value={this.state.client.lastname}
                       onChange={this.handleChange3}/>
                <input className="input-group-append" type="number" value={this.state.client.noDays}
                       onChange={this.handleChange4}/>
                <input className="input-group-append" type="submit" value="Submit"/>
            </form>
        )
    }

    handleChange1(event) {
        let client = this.state.client;
        client.id = event.target.value;
        this.setState({client});
    }
    handleChange2(event){
        let client = this.state.client;
        client.firstname = event.target.value;
        this.setState({client});
    }
    handleChange3(event){
        let client = this.state.client;
        client.lastname = event.target.value;
        this.setState({client});
    }
    handleChange4(event){
        let client = this.state.client;
        client.noDays = event.target.value;
        this.setState({client});
    }
    handleSubmit(event){

        const result =parkingContract.rentASpot.sendTransaction(this.state.client.id,this.state.client.firstname,this.state.client.lastname,this.state.client.noDays,transactionObject);
        alert(result);
    }
}
export default Rent;