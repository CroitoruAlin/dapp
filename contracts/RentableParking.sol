pragma solidity ^0.5.0;

import "./SpotsStorage.sol";

contract RentableParking is SpotsStorage{

constructor() public{
}
    modifier onlyBy(address owner){
        require(owner == msg.sender);
        _;
    }
    modifier itsTime(uint id){
        uint day = 10;
        require(now-spotsStorage[id].client.startDate>=day*spotsStorage[id].client.noDays);
        _;
    }
    function reclaimSpot(uint id) public onlyBy(spotsStorage[id].owner) itsTime(id) returns(bool){
        Client memory dummyClient = Client({firstname : "", lastname : "", exists : false, startDate : now, noDays : 0, owner : address(0)});
        spotsStorage[id].client = dummyClient;
        return true;
    }
    function isRented(uint id) public view returns(bool){
        return spotsStorage[id].client.exists;
    }
    modifier isNotRented(uint id){
        require(!isRented(id));
        _;
    }
    event RentEvent(uint sumToPay,address receiver, address sender);
function rentASpot(uint id,string memory _firstname,string memory _lastname,uint _noDays)public isNotRented(id) payable returns (bool){
        uint sumToPay = _noDays * spotsStorage[id].pricePerDay;
        if (msg.value < sumToPay)
        {
            revert();
            return false;
        }
        Client memory dummyClient = Client({firstname : _firstname, lastname : _lastname, exists : true, startDate : now, noDays : _noDays, owner : msg.sender});
        spotsStorage[id].client = dummyClient;
        spotsStorage[id].owner.transfer(sumToPay);
        msg.sender.transfer(msg.value-sumToPay);
        emit RentEvent(sumToPay,spotsStorage[id].owner,msg.sender);
        return true;
    }
}
