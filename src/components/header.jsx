import React from 'react';
import LiveReports from './Livereports';
import Crypto from './crypto';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import homepage from '../assets/homepage.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Header() {


  return (
    <BrowserRouter forceReferesh={true}>
      <div >
        <header>
          <ul >
            <h1>
              <Row>
                <Col><Link to="/" className='nav'><li>CryptoCurrency</li></Link></Col>
                <Col><Link to="/reports"><li className='nav'>LiveReports</li></Link></Col>
                <Col><Link to="/Crypto"><li className='nav'>CryptoCoins</li></Link></Col>
              </Row>
            </h1>
          </ul>
        </header>
      </div>
      <Switch>
        <Route exact path="/">
          <img src={homepage} alt='homepage' className='homepageimg ' />
        </Route>

        <Route path="/Crypto">
          <Crypto />
        </Route>
        <Route path="/reports">
          <LiveReports />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Header;