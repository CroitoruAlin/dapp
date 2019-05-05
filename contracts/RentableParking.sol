pragma solidity ^0.5.0;

contract RentableParking {
    struct Client {
        string firstname;
        string lastname;
        bool exists;
        uint startDate;
        uint noDays;
        address owner;
    }

    struct Parking {
        address payable owner;
        uint pricePerDay;
        string description;
        Client client;
    }

    mapping(uint => Parking) registeredParkings;
    mapping(uint => bool) public isRegistered;
    mapping(uint => uint)  public pricesPerDay;
    event RentEvent();
    function registerNewParking(uint id, uint _pricePerDay, string memory _description) public returns (bool){
        if (!isRegistered[id]) {

            Client memory dummyClient = Client({firstname : "", lastname : "", exists : false, startDate : now, noDays : 0, owner : address(0)});
            registeredParkings[id] = Parking({owner : msg.sender, pricePerDay : _pricePerDay, description : _description, client : dummyClient});
            isRegistered[id] = true;
            pricesPerDay[id] = _pricePerDay;
            return true;
        }
        revert();
        return false;
    }

    function rentASpot(uint id,string memory _firstname,string memory _lastname,uint _noDays)public payable returns (bool){
        if (registeredParkings[id].client.exists){
            revert();
            return false;
        }
        uint sumToPay = _noDays * registeredParkings[id].pricePerDay;

        if (msg.value < sumToPay)
        {
            revert();
            return false;
        }
        Client memory dummyClient = Client({firstname : _firstname, lastname : _lastname, exists : true, startDate : now, noDays : _noDays, owner : msg.sender});
        registeredParkings[id].client = dummyClient;
        registeredParkings[id].owner.transfer(sumToPay);
        emit RentEvent();
        return true;
        }

constructor() public{
}
}
