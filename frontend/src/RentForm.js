
import React, {Component} from "react";
import {parkingContract, transactionObject1} from "./setup";

class RentForm extends Component{
    constructor(props){
        super(props);
        this.state={client:{firstname:"",lastname:"",id:this.props.id,noDays:0}};

        this.handleChange2=this.handleChange2.bind(this);
        this.handleChange3=this.handleChange3.bind(this);
        this.handleChange4=this.handleChange4.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    componentDidMount(){
        console.log(this.state);
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
    handleSubmit(){
        console.log(this.state);
        const result = parkingContract.rentASpot.sendTransaction(this.state.client.id,this.state.client.firstname,this.state.client.lastname,this.state.client.noDays,transactionObject1);
        if(parkingContract.isRented(this.state.client.id))
            alert("Rented");
        else
            alert("Failed");
    }
    render(){

            return (
                <div>
                <form >
                    <div className="form-group">
                        <label htmlFor="description">Firstname</label>
                        <input className="input-group-append form-control" id="description" type="text" value={this.state.client.firstname} onChange={this.handleChange2}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Lastname</label>
                        <input id="price" className="input-group-append form-control" type="text" value={this.state.client.lastname}
                               onChange={this.handleChange3}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Lastname</label>
                        <input id="price" className="input-group-append form-control" type="number" value={this.state.client.noDays}
                               onChange={this.handleChange4}/>
                    </div>
                    <input onClick={this.handleSubmit} className="btn btn-success" type="button" value="Submit"/>
                </form>
                </div>
            )

    }
}
export default RentForm