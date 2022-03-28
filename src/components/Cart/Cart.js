import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, product) => total + product.price, 0).toFixed(2);

    let shipping = 0;
    
    if (total > 0) {
        shipping = 4.99;
    }
    else if(total > 200) {
        shipping = 10.99;
    }
    else if(total > 1000) {
        shipping = 25.99;
    }
    else if(total > 3000) {
        shipping = 40.99;
    }

    const tax = (total/10).toFixed(2);
    const withoutTax = Number(total) + shipping;
    const grindTotal =  Number(total) + shipping + Number(tax) ;

    // let total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const product = cart[i];
    //     total = total + product.price; 
    // }

    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items Ordered {cart.length}</p>
            <p><small>Items: {total}</small></p>
            <p><small>Shipping & Handling: {shipping}</small></p>
            <p><small>Total before tax: {withoutTax}</small></p>
            <p><small>Estimated Tax: {tax}</small></p>
            <h5>Order Total: {grindTotal}</h5>
            <button>Review Your Order</button>
        </div>
    );
};

export default Cart;