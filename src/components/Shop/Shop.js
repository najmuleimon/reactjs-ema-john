import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const addToCart = (addedProduct) => {
        const newCart = [...cart,addedProduct]
        setCart(newCart)
        addToDb(addedProduct.id)
    }

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='shop-container'>
            {/* product container */}
            <div className="product-container">
                <div className="container">
                    <div className="row">
                    {
                        products.map(product => <Product key={product.id} product={product} handleCart={addToCart}></Product>)
                    }
                    </div>
                </div>
            </div>

            {/* cart container */}
            <div className="cart-container">
                <Cart cartData={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;