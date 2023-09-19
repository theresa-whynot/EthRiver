import React, { Component } from 'react';
import '../App.css';
import Form from 'react-bootstrap/Form';
import EthRiver from '../ethereum/ethriver';
import Message from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import web3 from '../ethereum/web3';

class FaucetDonate extends Component {
    state = {
        value: '',
        errorMessage: '',
        successMessage: '',
        loading: false,
    }

        async componentDidMount() {
            const faucetSummary = await EthRiver.methods.getFaucetSummary().call();
            const totalBalance = faucetSummary[0];
            const totalDonations = faucetSummary[1];
            const totalBalanceGwei = web3.utils.fromWei(totalBalance, 'gwei');
            const totalDonationsGwei = web3.utils.fromWei(totalDonations, 'gwei');
            const totalBalanceEther = web3.utils.fromWei(totalBalance, 'ether');
            const totalDonationsEther = web3.utils.fromWei(totalDonations, 'ether');

            this.setState({ totalBalance, totalDonations, totalBalanceGwei, totalDonationsGwei, totalBalanceEther, totalDonationsEther });
        };

    onSubmit = async (event) => {
        event.preventDefault();


        this.setState({ loading: true, errorMessage: '', successMessage: '' });

        try {
            const accounts = await web3.eth.getAccounts();


            if (this.state.value == 0) {
                throw new Error('Donation amount must be greater than zero.');
            };

            await EthRiver.methods
                .faucetDonate()
                .send({
                    from: accounts[0],
                    value: web3.utils.toWei(this.state.value, 'gwei'),
                    gas: 1000000,
                });

            const faucetSummary = await EthRiver.methods.getFaucetSummary().call();

            this.setState({
                successMessage: `${this.state.value} gwei submitted to the EthRiver Faucet successfully! Thank you for your donation!`,
                totalBalance: faucetSummary[0],
                totalDonations: faucetSummary[1],
                totalBalanceGwei: web3.utils.fromWei(faucetSummary[0], 'gwei'),
                totalDonationsGwei: web3.utils.fromWei(faucetSummary[1], 'gwei'),
                totalBalanceEther: web3.utils.fromWei(faucetSummary[0], 'ether'),
                totalDonationsEther: web3.utils.fromWei(faucetSummary[1], 'ether')
            });

        } catch (err) {
            this.setState({ errorMessage: err.message });
        }

        this.setState({ loading: false, value: '' });
    };


    render() {



        return (
            <div style={{marginTop: '75px', marginBottom: '300px'} }>
                
                <h4 style={{ color: "#0D99FF", textAlign: "center" }}>Donate to EthRiver Sepolia Faucet</h4>

                <Row>
                    <Col md={10}>
                        <Form onSubmit={this.onSubmit} isinvalid={this.state.errorMessage ? 'true' : 'false'}>
                            <Form.Group className="mb-3">
                                <Form.Label>Donate Sepolia Test Ether</Form.Label>
                                <div style={{ display: 'flex' }}>
                                    <Form.Control
                                        type="text"
                                        placeholder="Gwei Donation Amount"
                                        value={this.state.value}
                                        onChange={event => this.setState({ value: event.target.value })}
                                    />
                                    <Button
                                        className="donateEtherButton"
                                        variant="primary"
                                        type="submit"
                                        disabled={this.state.loading}
                                        style={{ marginLeft: '30px', width: '150px' }}
                                    >
                                        {this.state.loading ? 'Donating Gwei...' : ' Donate Gwei'}
                                    </Button>
                                </div>
                                <Form.Text className="text-muted">
                                    <Container>
                                        <Row>
                                            <Col md={6}>
                                                Enter your sepolia test eth donation in gwei to support the EthRiver faucet project. Ensure the wallet address you wish to use is connected in this browser via MetaMask. Thank you for your consideration.
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
                        {/* column is intentionally left empty */}
                    </Col>
                </Row>

                <Row>
                    <Message variant="danger" show={!!this.state.errorMessage}>
                        <Message.Heading>Oops!!</Message.Heading>
                        <p>{this.state.errorMessage}</p>
                    </Message>
                </Row>

                <Row>
                    <Message variant="success" show={!!this.state.successMessage }>
                        <Message.Heading>Hooray!!</Message.Heading>
                        <p>{this.state.successMessage}</p>
                    </Message>
                </Row>


                <Row>
                    <Card>
                    <Card.Body>
                <Card.Title>EthRiver Faucet Data</Card.Title>
                            <Card.Text>EthRiver faucet has a total balance of <span className="money-font-balance">{this.state.totalBalanceGwei}</span> gwei, or <span className="money-font-balance">{this.state.totalBalanceEther}</span > ether,
                                and has received <span className="money-font-donations">{this.state.totalDonationsGwei}</span>  gwei, or <span className="money-font-donations">{this.state.totalDonationsEther}</span >  ether in total donations!</Card.Text>
                        </Card.Body>
                    </Card>
                </Row>

            </div>

        )
    }
}

export default FaucetDonate;
