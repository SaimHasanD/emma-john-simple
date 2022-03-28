import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
/*-----------------------------------------Using Api To Get Data------------------------------------------------*/
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
            .then(res => res.json())
            .then(data => {
                const first10 = data.slice(0, 10);
                setProducts(first10)
            })
    }, [])
    
/*---------------------------------------------Cart And Product Maintain-----------------------------------------------------------*/
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shopContainer'>
            {/*------------------------------PRODUCT CONTAINER-------------------------------------*/}
            <div className="productContainer">
                {
                    products.map(pd => <Product
                        handleAddProduct = {handleAddProduct}
                        key={pd.key}
                        pd={pd}> </Product>)
                }
            </div>
            {/*------------------------------CART CONTAINER-------------------------------------*/}
            <div className="cartContainer">
                <Cart cart={cart}/>
            </div>

        </div>
    );
};


export default Shop;

