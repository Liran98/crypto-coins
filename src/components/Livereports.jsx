import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Coin from "./cryptoCurrency";

function Livereports() {

  const [liveReport, setliveReport] = useState([]);


  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins")
      .then(res => {
        console.log(res);
        setliveReport(res.data);
      }).catch(err => {
        console.log(err);
      })
  }, []);


  return (
    <div className='TableTH'>
      <Row>
        <Col><h3>Name</h3></Col>
        <Col><h3>Symbol</h3></Col>
        <Col><h3>Price</h3></Col>
        <Col><h3>$/24h</h3></Col>
        <Col><h3>%/24h</h3></Col>
        <Col><h3>Market </h3></Col>
      </Row>

      {liveReport.map((item) => {
        return (
          <div key={item.id}>
            <Coin
              id={item.id}
              name={item.name}
              img=<img src={item.image.thumb} alt="coins"/>
              symbol={item.symbol}
              price={item.market_data.current_price.usd.toFixed(2)}
              priceChange={item.market_data.price_change_24h.toFixed(2)}
              percent={item.market_data.price_change_percentage_24h.toFixed(2)}
              market={item.market_data.market_cap.usd.toLocaleString()}
            />

          </div>
        );
      })}

    </div>
  )
}

export default Livereports;