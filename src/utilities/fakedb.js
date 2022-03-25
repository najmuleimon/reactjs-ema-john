// add to local storage
const addToDb = id => {
    let shoppingCart = {};

    // get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart')
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }

    // add product quantity
    const quantity = shoppingCart[id]
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}


// get local storage stored cart
const getStoredCart = () => {
    let shoppingCart = {};

    const storedCart = localStorage.getItem('shopping-cart')
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart;
}


//  remove from local storage
const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart')
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }
}


//  delete from local storage
const deleteCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {addToDb, getStoredCart, removeFromDb, deleteCart}