import React, { Component } from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import EthRiver from '../ethereum/ethriver';
import Message from 'react-bootstrap/Alert'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import web3 from '../ethereum/web3';

class FaucetDrip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            errorMessage: '',
            successMessage: '',
            loading: false,
            lastDripTimestamp: {},
        };
    };

    onSubmit = async (event) => {
        event.preventDefault();

        this.setState({ loading: true, errorMessage: '' });

        try {
            const accounts = await web3.eth.getAccounts();
            const storedTimestamps = JSON.parse(localStorage.getItem('lastDripTimestamp')) || {};

            const lastDripTimestamp = storedTimestamps[accounts[0]] || 0;

            console.log('Before submission:', lastDripTimestamp);

            if (lastDripTimestamp && (Date.now() - lastDripTimestamp < 43200000)) {
                throw new Error('Address can only receive drip once every 12 hours.');
            }

            console.log('Before submission to contract:', lastDripTimestamp);

            if (!this.state.address) {
                throw new Error('You must enter an address to send the 1 gwei to.');
            };

            if (!(this.state.address === accounts[0])) {
                throw new Error('You must be connected to the wallet address in your browser via MetaMask that you are requesting the drip for.');
            };

            await EthRiver.methods
                .faucetDrip(this.state.address)
                .send({
                    from: accounts[0],
                    gas: 1000000,
                });

            console.log('After submission to contract:', lastDripTimestamp);

            // Update the local storage with the new timestamp
            storedTimestamps[accounts[0]] = Date.now();
            localStorage.setItem('lastDripTimestamp', JSON.stringify(storedTimestamps));

            this.setState({ successMessage: `1 test sepolia gwei was submitted to your account successfully!` });
        } catch (err) {
            this.setState({ errorMessage: err.message });
        }

        this.setState({ loading: false, address: '' });
    };
  

    render() {
        return (
            <div>

            <div style={{ marginTop: '75px', marginBottom: '300px' }} >
                <h4 style={{ color: "#0D99FF", textAlign: "center" }}>EthRiver Sepolia Faucet</h4>

                <Row>
                    <Col md={10}>
                        <Form onSubmit={this.onSubmit} isinvalid={this.state.errorMessage ? 'true' : 'false'}>
                            <Form.Group className="mb-3">
                                <Form.Label>Get Sepolia Test Ether</Form.Label>
                                <div style={{ display: 'flex' }}>
                                    <Form.Control
                                        type="text"
                                        placeholder="Eth Wallet Address"
                                        value={this.state.address}
                                        onChange={event => this.setState({ address: event.target.value })}
                                    />
                                    <Button
                                        className="getEtherButton"
                                        variant="primary"
                                        type="submit"
                                        disabled={this.state.loading}
                                        style={{ marginLeft: '30px', width: '150px'}}
                                    >
                                        {this.state.loading ? 'Getting Gwei...' : 'Get 1 Gwei'}
                                    </Button>
                                </div>
                                <Form.Text className="text-muted">
                                    <Container>
                                        <Row>
                                            <Col md={6}>
                                                Enter your sepolia test eth wallet address to receive 1 sepolia test gwei from the faucet. Each address can only use the faucet once every 12 hours. Ensure the wallet address you enter is connected in this browser via MetaMask.
                                            </Col>
                                            <Col md={6} xs={12}>
                                                <Image
                                                    style={{ border: '1px solid #0D99FF' }}
                                                    src="/ethriverlogo.png"
                                                    roundedCircle
                                                    width={75}
                                                    height={50}
                                                />
                                            </Col>
                                        </Row>
                                    </Container>
                                </Form.Text>
                            </Form.Group>
                        </Form>
                    </Col>

                    <Col md={2} xs={12}>
                        {/* This column is intentionally left empty */}
                    </Col>
                </Row>

                <Row>
                    <Message variant="danger" show={!!this.state.errorMessage}>
                        <Message.Heading>Oops!!</Message.Heading>
                        <p>{this.state.errorMessage}</p>
                    </Message>
                </Row>

                <Row>
                    <Message variant="success" show={!!this.state.successMessage}>
                        <Message.Heading>Hooray!!</Message.Heading>
                        <p>{this.state.successMessage}</p>
                    </Message>
                </Row>

                    </div>

            </div>
        )
    }
}


export default FaucetDrip;
