import React, {Component} from "react";

import Web3 from "web3";
import "./App.css";
import RentableParking from "./contracts/SimpleStorage.json";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {account:'',id:0,description:'',pricePerDay:0,contract: undefined};
    }
    componentWillMount() {
        this.loadBlockChainData();
    }
    async loadBlockChainData() {
        const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
        const network = await web3.eth.net.getNetworkType();
        const accounts = await web3.eth.getAccounts();
        this.setState({account: accounts[0]});
        const rentableParkingContract = new web3.eth.Contract(RentableParking.abi,RentableParking.networks["5777"].address);
        await rentableParkingContract.methods.set(1).call().then(value => console.log(value));
        await rentableParkingContract.methods.get().call().then(console.log);
        this.setState({contract: rentableParkingContract});
        console.log("contract:",rentableParkingContract);
        console.log("network:", network);
    }
    launchContract(){

    }
    render() {
        return (
            <div className="container">

            </div>
        )
    }


}

export default App;
