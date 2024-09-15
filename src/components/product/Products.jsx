import React, { useState } from 'react';
import { useGetProductsQuery } from '../../redux/api/productsApi';
import { Link } from 'react-router-dom';
import './Products.css'; 

const Products = () => {
    const { data } = useGetProductsQuery();
    const [cart, setCart] = useState([]);
    const [likedProducts, setLikedProducts] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const toggleLike = (productId) => {
        if (likedProducts.includes(productId)) {
            setLikedProducts(likedProducts.filter(id => id !== productId));
        } else {
            setLikedProducts([...likedProducts, productId]);
        }
    };

    return (
        <div className="products-container">
            {data && data.payload && data.payload.map(product => (
                <div className="product-card" key={product._id}>
                    <Link to={`/product/${product._id}`}>
                        <img className="product-image" src={product.product_images[0]} alt={product.product_name} />
                    </Link>
                    <h2 className="product-name">{product.product_name}</h2>
                    <p className="product-price">1150${product.price}</p>
                    <p className="product-category">{product.category}</p>
                    <p className="product-rating">Rating: {product.rating}</p>
                    <button 
                        className={`like-btn ${likedProducts.includes(product._id) ? 'liked' : ''}`} 
                        onClick={() => toggleLike(product._id)}
                    >
                        {likedProducts.includes(product._id) ? '♥' : '♡'}
                    </button>

                    <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Products;
