import React from 'react';
import { Card } from 'react-bootstrap';

const Product = (props) => {
    // console.log(props.product);
    const {name, price, img} = props.product;
    return (
        <div className='col-md-4'>
            <Card>
                <img src={img} alt="Product" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>{price}</p>
                    <button>Go somewhere</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;