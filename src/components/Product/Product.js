import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {img, name, seller, price, stock, features} = props.pd;
    return (
        <div className='product'>
{/*-----------------------------------PRODUCT IMAGE---------------------------------*/}
            <div className="productImage">
                <img src={img} alt="" />
            </div>

{/*-----------------------------------PRODUCT INFO---------------------------------*/}
            <div className="productInfo">
            <h4 className='productName'>{name}</h4>
            <small>by: {seller}</small>
            <p>${price}</p>
            <small>only {stock} left in stock - order soon</small>
            <br /> <br />
            <button onClick={() => props.handleAddProduct(props.pd)}> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            <h3>Features</h3>

            {
                features.map((feature, index) => <li key={index} >{feature.description}: {feature.value}</li>)
            }
            </div>


        </div>
    );
};

export default Product;