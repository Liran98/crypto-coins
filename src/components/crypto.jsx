import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { Card ,Col , Row} from 'react-bootstrap';  


function Crypto() {
const [currncey,setcurrnecy] = useState([]);
const [search ,setSearch] = useState('');


useEffect(()=>{
    axios.get("https://api.coingecko.com/api/v3/coins")
    .then(res=>{
        console.log(res);
        setcurrnecy(res.data);
    })
  .catch(err => {
    console.log(err);
  })
  },[]);


function handleChange(event) {
setSearch(event.target.value);

};

const coinSearch =  currncey.filter(CoinName => {
  return (
  CoinName.name.toLowerCase().includes(search.toLowerCase())
  
)
});


  return (
    <div className='cryptoCard'>
    <form>
      <Form.Control autoCorrect="false" placeholder='Search...' type="text"  onChange={handleChange} />
    </form>
    {coinSearch.map((item)=>{
return(

    <div key={item.id}   id={item.id} className='note'>
    <Row>
    <Card className='customCard'>
    <Col><h1>{item.name}</h1></Col>
    <Col><img src={item.image.small}   alt="img" /></Col>
    <Col><p>{item.symbol}</p></Col>
   </Card>
    </Row>
    </div>
    
)
    })}
    
    </div>
    
  )
}

export default Crypto;