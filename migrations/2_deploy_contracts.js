var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var RentableParking = artifacts.require("./RentableParking.sol");
module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(RentableParking);
};
