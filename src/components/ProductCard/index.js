import React, { useState } from 'react';
import './style.css'
import { useNavigate } from 'react-router-dom';

function ProductCard({ product, setShowPhotoGallery }) {
    const [showMore, setShowMore] = useState(product?.description?.length > 100);
    const nevigate = useNavigate();
    const [editLoading, setEditLoading] = useState(false);

    const onEditClick = () => {
        setEditLoading(true);
        nevigate(`/products/edit/${product.id}`)
    }

    if (!product) return null;
    return (
        <div className='ProductCard'>
            <h2 className='ProductCard-name'>{product.name}</h2>
            <p className='ProductCard-description'>{showMore ? product.description.substring(0, 100) : product.description}</p>
            <div className='ProductCard-buttons'>
                <p className='user-submit-button1-dark btn-danger' onClick={() => { }}><img className='ProductCard-btn-icon' src='assets/icons/pngs/deleteWhite.png' alt='DELETE' title='DELETE' /></p>
                <p className='user-submit-button1-dark' onClick={() => { setShowPhotoGallery(product.id) }}><img className='ProductCard-btn-icon' src='assets/icons/pngs/cameraWhite.png' alt='PHOTOS' title='PHOTOS' /></p>
                <p className='user-submit-button1-dark btn-warning' onClick={() => { }}><img className='ProductCard-btn-icon' src='assets/icons/pngs/crossEyeWhite.png' alt='PHOTOS' title='PHOTOS' /></p>
                <p className='user-submit-button1-dark' onClick={onEditClick}>{editLoading? "....." : <img className='ProductCard-btn-icon' src='assets/icons/pngs/editWhite.png' alt='EDIT' title='EDIT' />}</p>
                {showMore ? <p className='user-submit-button1-dark' onClick={() => setShowMore(false)}><img className='ProductCard-btn-icon' src='assets/icons/pngs/moreWhite.png' alt='MORE' title='MORE' /></p> : <p></p>}
            </div>
        </div>
    )
}

export default ProductCard