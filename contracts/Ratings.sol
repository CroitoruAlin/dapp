pragma solidity ^0.5.0;
// We have to specify what version of compiler this code will compile with

contract Ratings {

    string public movieList;

    /* This is the constructor which will be called once when you
    deploy the contract to the blockchain. When we deploy the contract,
    we will pass an array of movies for which users will give ratings
    */
    constructor(string memory name1) public {
        movieList = name1;
    }
    // This function increments the vote count for the specified movie. Equivalent to upvoting
    function voteForMovie(string memory movie) public {
        movieList = movie;
    }
}