import React, {useState} from 'react';
import './style.css'
import { useNavigate } from 'react-router-dom';

function ProductCard({ product, setShowPhotoGallery }) {
    const [showMore, setShowMore] = useState(product?.description?.length > 100);
    const nevigate = useNavigate()
    
    if(!product) return null;
    return (
        <div className='ProductCard'>
            <h2 className='ProductCard-name'>{product.name}</h2>
            <p className='ProductCard-description'>{showMore ? product.description.substring(0, 100) : product.description}</p>
            <div className='ProductCard-buttons'>
                <p className='user-submit-button1-dark btn-danger' onClick={()=>{}}>DELETE</p>
                <p className='user-submit-button1-dark' onClick={()=>{setShowPhotoGallery(product.id)}}>PHOTOS</p>
                {/* <p className='user-submit-button1-dark' onClick={()=>{setShowPhotoGallery(product.id)}}>DISABLE</p> */}
                <p className='user-submit-button1-dark' onClick={()=>{nevigate(`/products/edit/${product.id}`)}}>EDIT</p>
                {showMore ? <p className='user-submit-button1-dark' onClick={()=>setShowMore(false)}>MORE</p> : <p></p>}
            </div>
        </div>
    )
}

export default ProductCard