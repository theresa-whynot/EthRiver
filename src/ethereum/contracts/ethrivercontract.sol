pragma solidity ^0.8.21;

contract EthRiver {
    address public owner;
    uint public drip;
    uint public totalDonations;
    mapping (address => uint) public lastDrip;
    uint public dripInterval;

    constructor() payable {
        owner = msg.sender;
        require(msg.value >= 10000000000000000, "Initial balance for the Faucet must be greater than or equal to 10,000,000,000,000,000 wei, or 10,000,000 gwei, or 0.01 ether.");
    }


    function faucetDrip( address payable inputAddress) public {
        dripInterval = 43200;
        drip = 1000000000;

        if(lastDrip[inputAddress]==0){
            lastDrip[inputAddress] = block.timestamp;
        } else {
            require (block.timestamp >= lastDrip[inputAddress] + dripInterval, "Address can only receive drip once every 12 hours.");
        }
        
        require(inputAddress == msg.sender, "You must be connected to the wallet address in your browser via MetaMask that you are requesting the drip for.");

        inputAddress.transfer(drip);
        lastDrip[inputAddress] = block.timestamp;
    }

    function faucetDonate() public payable {
    require(msg.value > 0, "Donation amount must be greater than zero");
        totalDonations += msg.value;
    }

    function getFaucetSummary() public view returns (uint, uint, uint) {
        return (
            address(this).balance,
            totalDonations,
            drip
        );
    }
}
