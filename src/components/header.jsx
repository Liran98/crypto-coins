import React, { useEffect } from 'react';
import LiveReports from './Livereports';
import Crypto from './crypto';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import homepage from '../assets/homepage.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
function Header() {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  
  return (
    <BrowserRouter forceReferesh={true}>
      <div className='headerNav'>
        <header>
        <Row>
          <ul >
              <Col><li className='nav'><KeyboardDoubleArrowUpIcon  onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}/></li>
              </Col>
              <h5>
                <Col><Link to="/" ><li className='nav'>CryptoCurrency</li></Link></Col>
                <Col><Link to="/reports"><li className='nav'>LiveReports</li></Link></Col>
                <Col><Link to="/Crypto"><li className='nav'>CryptoCoins</li></Link></Col>
                </h5>
          </ul>
          </Row>
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