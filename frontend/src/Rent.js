import React, {Component} from "react";
import {parkingContract, transactionObject, transactionObject1} from "./setup";
import RentForm from "./RentForm";
class Rent extends Component{



    constructor(props) {
        super(props);
        console.log(props);
        this.state = {spots:[],flag:[],id:0};
        this.onClick = this.onClick.bind(this);

    }
    componentDidMount(){
        let noSpots = parkingContract.lastIndex();
        console.log(noSpots);
        let array=[];
        let array2=[];
        for(let i=0;i<noSpots.c[0];i++) {
            const result = parkingContract.isRented(i);
            console.log(result);
            if (!result) {
            let flag={value:false};
            array2.push({flag});
            let spot = {description: "", pricePerDay: 0,id:i};
            spot.description = parkingContract.getDescription(i);
            spot.pricePerDay = parkingContract.getPricePerDay(i);
            array.push({spot});
        }

        }
        this.setState({spots:array});
        this.setState({flag:array2});
        console.log(array);
    }

    render() {
        let forms = null;
        let array = [];
        for(let i=0;i<this.state.flag.length;i++)
            if(this.state.flag[i].value)
                array.push(<RentForm id={this.state.spots[i].spot.id}/>);
            else
                array.push(null);
        forms = array;
        return (
          this.state.spots.map((spot,i) =>
              <div key={i} className="container border mt-3 p-2" >
                  <div className="form-group">
                      <p id="description">Description: {this.state.spots[i].spot.description}</p>
                  </div>
                  <div className="form-group">

                      <p id="price">Price/Day: {this.state.spots[i].spot.pricePerDay.c[0]}</p>
                  </div>
                  <button className="btn btn-info" onClick={()=>this.onClick(i,this.state.spots[i].spot.id)}>Rent</button>
                  {forms[i]}
              </div>

          )
        );
    }
    onClick(i,id){
        let flags = this.state.flag;
        console.log(flags);
        flags[i].value=!flags[i].value;
        this.setState({flag:flags});
        this.setState({id:id});
    }

}
export default Rent;