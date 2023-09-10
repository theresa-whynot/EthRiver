pragma solidity ^0.8.21;

contract EthRiver {
    address public owner;
    uint public drip;
    uint public totalDonations;
    mapping (address => uint) public lastDrip;
    uint public dripInterval;

    constructor() payable {
        owner = msg.sender;
        require(msg.value >= 100, "Initial balance for the Faucet must be greater than or equal to 10,000 wei");
    }


    function faucetDrip( address payable inputAddress) public payable {
        dripInterval = 180;
        drip = 10;

        if(lastDrip[inputAddress]==0){
            lastDrip[inputAddress] = block.timestamp;
        } else {
            require (block.timestamp >= lastDrip[inputAddress] + dripInterval, "Address can only receive drip once every 3 minutes");
        }
        
        inputAddress.transfer(drip);
        lastDrip[inputAddress] = block.timestamp;
    }

    function faucetDonate() public payable {
    require(msg.value > 0, "Donation amount must be greater than zero");
        totalDonations += msg.value;
    }

    function getFaucetSummary() public view returns (uint, uint) {
        return (
            address(this).balance,
            totalDonations
        );
    }
}
