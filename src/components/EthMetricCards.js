import React, { useState, useEffect } from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const EthMetricCards = () => {
    const ethApiKey = process.env.REACT_APP_ETHERSCAN_API_KEY;
    const [ethereumPrice, setEthereumPrice] = useState(null);
    const [safeGasPrice, setSafeGasPrice] = useState(null);
    const [proposedGasPrice, setProposedGasPrice] = useState(null);
    const [fastGasPrice, setFastGasPrice] = useState(null);
    const [ethereumSupply, setEthereumSupply] = useState(null);

    useEffect(() => {
        const etherPriceApiUrl = `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${ethApiKey}`;

        fetch(etherPriceApiUrl)
            .then((response) => response.json())
            .then((data) => {
                const etherPrice = data.result.ethusd;
                setEthereumPrice(etherPrice);
            })
    }, [ethApiKey]); 


    useEffect(() => {
        const gasPriceApiUrl = `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${ethApiKey} `;

    fetch(gasPriceApiUrl)
        .then((response) => response.json())
        .then((data) => {
            const safeGasPriceValue = data.result.SafeGasPrice; 
            const proposedGasPriceValue = data.result.ProposeGasPrice;
            const fastGasPriceValue = data.result.FastGasPrice;
            setSafeGasPrice(safeGasPriceValue); 
            setProposedGasPrice(proposedGasPriceValue);
            setFastGasPrice(fastGasPriceValue);

        })
    }, [ethApiKey]); 

    useEffect(() => {
        const etherTotalSupplyApiUrl = `https://api.etherscan.io/api?module=stats&action=ethsupply&apikey=${ethApiKey}`;

        fetch(etherTotalSupplyApiUrl)
            .then((response) => response.json())
            .then((data) => {
                const etherSupply = data.result;
                setEthereumSupply(etherSupply);
            })
    }, [ethApiKey]); 

    return (
        <div>
        <div style={{ textAlign: "center", marginLeft: '75px' }} className="desktop-cards">

            <Row>


                <Col>
                    <Card style={{ width: '250px'}}>
                        <Card.Img variant="top" src="/ethprice.png" />
                        <Card.Body>
                            <Card.Title>Current ETH USD Price</Card.Title>
                            <Card.Text>
                                {ethereumPrice !== null ? `The current price of 1 ETH is $${ethereumPrice}` : 'Loading...'}
                </Card.Text>
            </Card.Body>
            </Card>
                </Col>

                <Col>
                    <Card style={{ width: '250px' }}>
                        <Card.Img variant="top" src="/ethgas.png" />
                        <Card.Body>
                            <Card.Title>Current Gas Prices</Card.Title>
                            <Card.Text>
                                {safeGasPrice !== null ? `Safe Gas Price: ${safeGasPrice} Gwei` : 'Loading...'}<br />
                                {proposedGasPrice !== null ? `Proposed Gas Price: ${proposedGasPrice} Gwei` : 'Loading...'}<br/>
                                {fastGasPrice !== null ? `Fast Gas Price: ${fastGasPrice} Gwei` : 'Loading...'}<br />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '270px' }}>
                        <Card.Img variant="top" src="/ethsupply.png" style={{ height: '165px' }} />
                        <Card.Body>
                            <Card.Title>Current ETH Total Supply</Card.Title>
                            <Card.Text>
                                {ethereumSupply !== null ? `The current total suppply of ETH is ${(Number(ethereumSupply) / 1e24).toFixed(2)} million ETH` : 'Loading...'}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                </Row>
        </div>

        <div className="mobile-cards">
         <Card style={{ width: 'auto'}}>
                        <Card.Img variant="top" src="/ethprice.png" />
                        <Card.Body>
                            <Card.Title>Current ETH USD Price</Card.Title>
                            <Card.Text>
                                {ethereumPrice !== null ? `The current price of 1 ETH is $${ethereumPrice}` : 'Loading...'}
                </Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: 'auto', marginTop: "20px" }}>
                        <Card.Img variant="top" src="/ethgas.png" />
                        <Card.Body>
                            <Card.Title>Current Gas Prices</Card.Title>
                            <Card.Text>
                                {safeGasPrice !== null ? `Safe Gas Price: ${safeGasPrice} Gwei` : 'Loading...'}<br />
                                {proposedGasPrice !== null ? `Proposed Gas Price: ${proposedGasPrice} Gwei` : 'Loading...'}<br/>
                                {fastGasPrice !== null ? `Fast Gas Price: ${fastGasPrice} Gwei` : 'Loading...'}<br />
                            </Card.Text>
                        </Card.Body>
                    </Card>


                      <Card style={{ width: 'auto', marginTop: "20px" }}>
                        <Card.Img variant="top" src="/ethsupply.png" style={{ height: 'auto' }} />
                        <Card.Body>
                            <Card.Title>Current ETH Total Supply</Card.Title>
                            <Card.Text>
                                {ethereumSupply !== null ? `The current total suppply of ETH is ${(Number(ethereumSupply) / 1e24).toFixed(2)} million ETH` : 'Loading...'}
                            </Card.Text>
                        </Card.Body>
                    </Card>
            </div>
        </div>
    );
};

export default EthMetricCards;
