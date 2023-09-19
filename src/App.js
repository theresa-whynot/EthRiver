import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';
import EthMetricCards from './components/EthMetricCards';
import FaucetDrip from './components/FaucetDrip';
import FaucetDonate from './components/FaucetDonate';
import FAQ from './components/FAQ';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const App = () => {
        
        return (
            <Layout>

                <EthMetricCards />
                <div id="faucet-drip"/>

                <Row>
                    <Col>
                        <FaucetDrip />
                        <div id="faucet-donate" />
                    </Col>
                </Row>

                <Row>

                    <Col>
                        <FaucetDonate />
                        <div id="faqs" />
                    </Col>
                </Row>

              <Row>
                    <Col>
                    <FAQ/>
                    </Col>
              </Row>
          

         

          
            </Layout>
  );
}

export default App;
