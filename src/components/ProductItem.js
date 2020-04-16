import React from 'react';
import { Link } from 'react-router-dom';

export const ProductItem = ({ product }) => (
    <li className="product-item">
        <img src={require(`../assets/images/${product.image}`)} alt={product.name} />
        <h3>{product.name}</h3>
        <span className="product-price">
            <b>Price:</b>
            {product.price}
        </span>

        <p><Link to={`/product/${product.id}`}>Details</Link></p>
    </li>
);
