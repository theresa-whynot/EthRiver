import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';

const Banner = () => {
    return (
        
        <div className="jumbotron" style={{ height: '250px', backgroundColor: '#0D99FF', textAlign: 'center', color: 'white' }}>
            <div className="jumbotronheader">
                    <h1> EthRiver</h1>
                <h4>Ether Flows. Ideas Grow.</h4>
                <a href ="#faucet-drip">
                    <Button className="getTestEthButton" style={{ marginTop: '20px' }} variant="light">Get Test Ether</Button>{' '}
                </a>
            </div>
            </div>
        
    );
};

export default Banner;