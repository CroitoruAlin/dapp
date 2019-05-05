var Ratings = artifacts.require("./contracts/Ratings.sol");
var Parkings = artifacts.require("./contracts/RentableParking.sol");
module.exports = function(deployer) {
    deployer.deploy(Ratings,"Avengers", {gas: 6700000});
    deployer.deploy(Parkings);
};