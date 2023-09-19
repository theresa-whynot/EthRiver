import React from 'react';
import NavBar from './NavBar'
import Banner from './Banner'
import '../App.css';
import Container from 'react-bootstrap/Container';


const Layout = (props) => {
    return (
        <Container>
            <NavBar />
            <div style={{ marginTop: '75px' }} >
            <Banner />
            </div>
            <div>{props.children}</div>
        </Container>
    );
};


export default Layout;
