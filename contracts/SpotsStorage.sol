pragma solidity ^0.5.0;

contract SpotsStorage {
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
    constructor() public{
        lastIndex = 0;
    }
    mapping(uint => Parking) spotsStorage;
    uint public lastIndex;

    function addSpot(string memory _description, uint _pricePerDay) public{
        Client memory dummyClient = Client({firstname : "", lastname : "", exists : false, startDate : now, noDays : 0, owner : address(0)});
        spotsStorage[lastIndex] = Parking({owner : msg.sender, pricePerDay : _pricePerDay, description : _description, client : dummyClient});
        lastIndex = lastIndex + 1;
    }
    function getDescription(uint id) public view returns(string memory){
        return spotsStorage[id].description;
    }
    function getPricePerDay(uint id) public view returns(uint){
        return spotsStorage[id].pricePerDay;
    }
    function isReclaimable(uint id) public view returns(bool){
        uint day = 10;
        return (now-spotsStorage[id].client.startDate)>=day*spotsStorage[id].client.noDays;
    }
    function getClientFirstname(uint id) public view returns(string memory){
        return spotsStorage[id].client.firstname;
    }
    function getClientLastname(uint id) public view returns(string memory){
        return spotsStorage[id].client.lastname;
    }
    function getRemainingDays(uint id) public view returns(uint){
        uint day = 10;
        return spotsStorage[id].client.noDays-(now-spotsStorage[id].client.startDate)/day;
    }

}
