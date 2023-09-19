import React from 'react';
import '../App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

const NavBar = () => {
    return (

        <Navbar variant="light" bg="white" fixed="top" expand="md">
        <Container>
            <div className='container' >
                <div className='d-inline-block align-top brand-container'>
                    <a className="brandimage" href="/">
                    <Image src="/ethriverlogo.png" rounded width={75} height={50} />
                </a>
                    <Navbar.Brand className="brandname" href="/" style={{ color: 'black' }}>EthRiver</Navbar.Brand>
                </div>
            </div>

            
            <Nav className="ml-auto">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ marginTop: '-35px', marginRight: '20px' }} />
            <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="navoptions">
                            <Nav.Link href="#faucet-drip" style={{ width: '125px' }}>Get Test Ether</Nav.Link>
                            <Nav.Link href="#faucet-donate" style={{width:'150px'} }>Donate Test Ether</Nav.Link>
                            <Nav.Link href="#faqs" style={{ width: '50px' }}>FAQs</Nav.Link>
                </Nav>
            </Navbar.Collapse>
                </Nav>
            
            </Container>
        </Navbar>


    );

};


export default NavBar;

