import Web3 from 'web3';

const web3=new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

let dataFile = require("./build/contracts/RentableParking.json");
let spotsStorageAbi = dataFile.abi;
let ratingAddress = dataFile.networks["5777"].address;
const transactionObject = {
    from: web3.eth.accounts[0],
    gas: 1000000,
};
const transactionObject1 = {
    from: web3.eth.accounts[1],
    value:web3.toWei(10,'ether'),
    gas: 1000000,
};
web3.eth.defaultAccount = web3.eth.accounts[0];
const parkingContract=web3.eth.contract(spotsStorageAbi).at(ratingAddress);
let event = parkingContract.RentEvent({} , function(error, result){
    if (!error)
        console.log(result);
});
export {parkingContract,transactionObject,transactionObject1};