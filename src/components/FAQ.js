import React from 'react';
import '../App.css';

const FAQ = () => {
    return (
        <div style={{marginBottom: "50px"} }>
            <h4 style={{ color: "#0D99FF", textAlign: "center" }}>EthRiver FAQs</h4>

            <h5>What is EthRiver?</h5>
            <p>EthRiver is a simple Ethereum faucet that allows users to claim a small amount of test Ether for test developement purposes on the Sepolia test network. Users can also donate to support the faucet.</p>

            <h5>Do I need MetaMask to use EthRiver?</h5>
            <p>Yes, you must use the MetaMask browser extension and ensure that you are connected to the wallet address in your browser via MetaMask when requesting from the faucet. This ensures the security and integrity of the faucet.</p>

            <h5>How often can I request from the EthRiver faucet?</h5>
            <p>You can request from the faucet once every 12 hours for a given wallet address. This time interval is in place to ensure fair usage of the faucet for all developers.</p>

            <h5>How much Ether do I receive per faucet use?</h5>
            <p>Each request from the faucet provides you with 1 gwei (0.000000001 ether) in Sepolia test Ether.</p>

            <h5>Can I donate to EthRiver?</h5>
            <p>Yes, you can donate to support EthRiver. Your donations help keep the faucet running and provide test Ether to the community.</p>
        
        </div>


    );

};


export default FAQ;

