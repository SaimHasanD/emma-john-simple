import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    
    const {productKey} = useParams();

    return (
        <div>
            <h1>{productKey} Details Coming Soon</h1>
        </div>
    );
};

export default ProductDetails;