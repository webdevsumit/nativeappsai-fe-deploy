import React, {useState} from 'react';
import './style.css'

function ProductCard({ product }) {
    const [showMore, setShowMore] = useState(product?.description?.length > 100);
    
    if(!product) return null;
    return (
        <div className='ProductCard'>
            <h2 className='ProductCard-name'>{product.name}</h2>
            <p className='ProductCard-description'>{showMore ? product.description.substring(0, 100) : product.description}</p>
            <div className='ProductCard-buttons'>
                <p className='user-submit-button1-dark btn-danger' onClick={()=>{}}>delete</p>
                <p className='user-submit-button1-dark' onClick={()=>{}}>edit</p>
                {showMore ? <p className='user-submit-button1-dark' onClick={()=>setShowMore(false)}>know more</p> : <p></p>}
            </div>
        </div>
    )
}

export default ProductCard