import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    // handle add to cart
    const addToCart = (addedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === addedProduct.id);

        if(!exists){
            addedProduct.quantity = 1;
            newCart = [...cart,addedProduct]
        }
        else{
            const rests = cart.filter(product => product.id !== addedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rests, exists]
        }
        setCart(newCart);
        addToDb(addedProduct.id);
    }

    // fetch product data from json file
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    // fetch product data from local storage
    useEffect(() => {
        const storedCart = getStoredCart();
        let savedCart = [];

        for(const id in storedCart){
            const storedProduct = products.find(product => product.id === id)
            if(storedProduct){
                storedProduct.quantity = storedCart[id]
                savedCart.push(storedProduct)
            }
            setCart(savedCart)
        }
    }, [products])

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