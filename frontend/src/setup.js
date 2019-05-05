import Web3 from 'web3';

const web3=new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
let ratingABI= [
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "isRegistered",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "pricesPerDay",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "RentEvent",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "id",
                "type": "uint256"
            },
            {
                "name": "_pricePerDay",
                "type": "uint256"
            },
            {
                "name": "_description",
                "type": "string"
            }
        ],
        "name": "registerNewParking",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "id",
                "type": "uint256"
            },
            {
                "name": "_firstname",
                "type": "string"
            },
            {
                "name": "_lastname",
                "type": "string"
            },
            {
                "name": "_noDays",
                "type": "uint256"
            }
        ],
        "name": "rentASpot",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    }
];
const transactionObject = {
    from: web3.eth.accounts[0],
    value:1030,
    gas: 1000000,
};
let ratingAddress='0x4D64cC84Ac21602fCbc4A5F9ef655cc594E3b988';
web3.eth.defaultAccount = web3.eth.accounts[0];
const parkingContract=web3.eth.contract(ratingABI).at(ratingAddress);
export {parkingContract,transactionObject};