import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function OrderDetailsProductCard({ product, onStore=false }) {

    const productName = product.product.name;
    const product_id = product.product.id;

    return (
        <div className='OrderDetailsProductCard'>
            <div className='OrderDetailsProductCard-desc'>
                <p>{productName}</p>
                <div className='OrderDetailsProductCard-more-btn-div'>
                    <Link className='OrderDetailsProductCard-more-btn' to={`/products/edit${product_id}/`}>know more</Link>
                </div>
            </div>
            <div className='OrderDetailsProductCard-details-price-div'>
                <h5 className='OrderDetailsProductCard-details-price' style={{color: `${onStore ? 'var(--store-primary)' : 'var(--user-primary)'}`}}>Rs. {product.final_price_in_paisa / 100}</h5>
                <h5 className='OrderDetailsProductCard-details-price' style={{color: `${onStore ? 'var(--store-primary)' : 'var(--user-primary)'}`}}>X{product.quantity}</h5>
                <h5 className='OrderDetailsProductCard-details-price' style={{color: `${onStore ? 'var(--store-primary)' : 'var(--user-primary)'}`}}>Total Rs. {(product.final_price_in_paisa*product.quantity) / 100}</h5>
            </div>
        </div>
    )
}

export default OrderDetailsProductCard