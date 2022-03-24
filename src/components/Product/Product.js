import React from 'react';
import { Card } from 'react-bootstrap';
import './Product.css';
import {FaCartPlus} from 'react-icons/fa';

const Product = ({product, handleCart}) => {
    // console.log(product);
    const {name, price, img, category} = product;
    return (
        <div className='col-md-4'>
            <Card className='product-card'>
                <img src={img} alt="Product" />
                <Card.Body>
                    <h4>{name}</h4>
                    <h5>Category: {category}</h5>
                    <p>Price: ${price}</p>
                    <button onClick={() => handleCart(product)}>Add to Cart <FaCartPlus/> </button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;