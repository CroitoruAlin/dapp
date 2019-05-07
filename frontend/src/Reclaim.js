import {parkingContract, transactionObject} from "./setup";
import React, {Component} from "react";

class Reclaim extends Component{
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {spots:[],flag:false,id:0};
        this.onClick = this.onClick.bind(this);

    }
    componentDidMount(){
        let noSpots = parkingContract.lastIndex();
        console.log(noSpots);
        let array=[];
        for(let i=0;i<noSpots.c[0];i++) {
            const result = parkingContract.isRented(i);
            const result2 = parkingContract.isReclaimable(i);
            if (result && result2) {

                let spot = {description: "", pricePerDay: 0,id:i};
                spot.description = parkingContract.getDescription(i);
                spot.pricePerDay = parkingContract.getPricePerDay(i);
                array.push({spot});
            }

        }
        this.setState({spots:array});
        console.log(array);
    }

    render() {

        return (
            this.state.spots.map((spot,i) =>
                <div key={i} className="container border mt-3 p-2">
                    <div className="form-group">
                        <p id="description">Description: {this.state.spots[i].spot.description}</p>
                    </div>
                    <div className="form-group">
                        <p id="price">Price: {this.state.spots[i].spot.pricePerDay.c[0]}</p>
                    </div>
                    <form onSubmit={()=>this.onClick(this.state.spots[i].spot.id)}>
                    <button className="btn btn-info" type="submit">Reclaim</button>
                    </form>
                </div>

            )
        );
    }
    onClick(i){
        console.log(i);
        parkingContract.reclaimSpot.sendTransaction(i,transactionObject);
        if(!parkingContract.isRented(i)) {
            alert("Reclaimed!");
        }else
        {
            alert("Failed");
        }
    }
}
export default Reclaim;