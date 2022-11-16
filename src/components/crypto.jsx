import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Form from 'react-bootstrap/Form';


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
    <div>
    <form>
      <Form.Control autoCorrect="false" placeholder='Search...' type="text"  onChange={handleChange} />
    </form>
    {coinSearch.map((item)=>{
return(

    <div key={item.id}   id={item.id} className='note'>
    <h1>{item.name}</h1>
    <p>{item.symbol}</p>
    <img src={item.image.small}   alt="img" />
    </div>
    
)
    })}
    
    </div>
    
  )
}

export default Crypto;