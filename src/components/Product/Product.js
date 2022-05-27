import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { key, img, name, seller, price, stock, features } = props.pd;
    return (
        <div className='product'>
            {/*-----------------------------------PRODUCT IMAGE---------------------------------*/}
            <div className="productImage">
                <img src={img} alt="" />
            </div>

            {/*-----------------------------------PRODUCT INFO---------------------------------*/}
            <div className="productInfo">
                {/* <h4 className='productName'><Link to={'/product/'+key}>{name}</Link></h4> */}
                <h4 className='productName'><Link to={`/product/${key}`}>{name}</Link></h4>
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