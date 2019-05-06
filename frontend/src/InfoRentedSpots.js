import {Component} from "react";
import {parkingContract} from "./setup";
import React from "react";

class InfoRentedSpots extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {spots: []};

    }

    componentDidMount() {
        let noSpots = parkingContract.lastIndex();
        console.log(noSpots);
        let array = [];
        for (let i = 0; i < noSpots.c[0]; i++) {
            const result = parkingContract.isRented(i);
            if (result ) {

                let spot = {description: "", pricePerDay: 0, id: i, firstname: "", lastname: "", remainingDays: 0};
                spot.description = parkingContract.getDescription(i);
                spot.pricePerDay = parkingContract.getPricePerDay(i);
                spot.firstname = parkingContract.getClientFirstname(i);
                spot.lastname = parkingContract.getClientLastname(i);
                spot.remainingDays = parkingContract.getRemainingDays(i);
                array.push({spot});
            }

        }
        this.setState({spots: array});
    }

    render() {

        return (
            this.state.spots.map((spot,i) =>
                <div key={i} className="container border mt-3 p-2">
                    <div className="form-group">
                        <p id="description">Description: {this.state.spots[i].spot.description}</p>
                    </div>
                   <div className="form-group">
                        <p id="description">Client: {this.state.spots[i].spot.firstname} {this.state.spots[i].spot.lastname}</p>
                    </div>
                    <div className="form-group">
                        <p id="description">Remaining days: {this.state.spots[i].spot.remainingDays.c[0]}</p>
                    </div>

                    <div className="form-group">
                        <p id="price">Price: {this.state.spots[i].spot.pricePerDay.c[0]}</p>
                    </div>

                </div>

            )
        );
    }

}

export default InfoRentedSpots;
