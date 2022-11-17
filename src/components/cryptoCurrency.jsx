import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function cryptoCurrency(props) {

    const priceChanging = props.priceChange;
    const Dprice = props.price;

//1234
    return (
        <div >
            <Row>
                <Col >{props.name}</Col>
                <Col >{props.img} {props.symbol}</Col>
                <Col >
                    {Dprice > 0 ?
                        (<p className='green'>{Dprice}$</p>) :
                        (<p className='red'>{Dprice}$</p>)
                    }</Col>
                <Col>  {priceChanging > 0 ?
                    (<p className='green'>{priceChanging}$</p>) :
                    (<p className='red'> {priceChanging}$</p>)
                }</Col>
                <Col >
                    {props.percent < 0 ?
                        (<p className='red'>{props.percent}%</p>) :
                        (<p className='green'>{props.percent}%</p>)}</Col>
                <Col>{props.market}$</Col>
            </Row>
        </div>

    )
}

export default cryptoCurrency;