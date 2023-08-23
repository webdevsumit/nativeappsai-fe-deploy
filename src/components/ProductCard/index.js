import React, { useState } from 'react';
import './style.css'
import { useNavigate } from 'react-router-dom';
import { disbaleToggleProductByIdApi } from '../../apis/common';
import { toast } from 'react-hot-toast';

function ProductCard({ product, setShowPhotoGallery }) {
    const [showMore, setShowMore] = useState(product?.description?.length > 100);
    const nevigate = useNavigate();
    const [editLoading, setEditLoading] = useState(false);
    const [disabled, setDisabled] = useState(product.is_disabled);

    const onEditClick = () => {
        setEditLoading(true);
        nevigate(`/products/edit/${product.id}`)
    }

    const onClickDisable = async () => {
        await disbaleToggleProductByIdApi(product.id).then(res=>{
            if(res.data.status==="success"){
                setDisabled(res.data.disabled)
            }else{
                toast.error(res.data.error)
            }
        }).catch(err=>toast.error(err.message));
    }

    if (!product) return null;
    return (
        <div className='ProductCard'>
            <h2 className='ProductCard-name'>{product.name}</h2>
            <p className='ProductCard-description'>{showMore ? product.description.substring(0, 100) : product.description}</p>
            <div className='ProductCard-buttons'>
                <p className='user-submit-button1-dark btn-danger' onClick={() => {toast.error("Currently, Product deletion is not allowed.") }}><img className='ProductCard-btn-icon' src='assets/icons/pngs/deleteWhite.png' alt='DELETE' title='DELETE' /></p>
                <p className='user-submit-button1-dark' onClick={() => { setShowPhotoGallery(product.id) }}><img className='ProductCard-btn-icon' src='assets/icons/pngs/cameraWhite.png' alt='PHOTOS' title='PHOTOS' /></p>
                <p className={`user-submit-button1-dark ${disabled?"btn-success":'btn-warning'}`} onClick={onClickDisable}><img className='ProductCard-btn-icon' src={disabled?"assets/icons/pngs/crossEyeWhite.png":'assets/icons/pngs/crossEyeWhite.png'} alt='PHOTOS' title='PHOTOS' /></p>
                <p className='user-submit-button1-dark' onClick={onEditClick}>{editLoading? "....." : <img className='ProductCard-btn-icon' src='assets/icons/pngs/editWhite.png' alt='EDIT' title='EDIT' />}</p>
                {showMore ? <p className='user-submit-button1-dark' onClick={() => setShowMore(false)}><img className='ProductCard-btn-icon' src='assets/icons/pngs/moreWhite.png' alt='MORE' title='MORE' /></p> : <p></p>}
            </div>
        </div>
    )
}

export default ProductCard