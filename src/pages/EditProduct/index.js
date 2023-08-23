import React,{useState} from "react";
import {toast} from 'react-hot-toast'
import { redirect, useLoaderData, useNavigate } from 'react-router-dom';
import { getMyProductByIdAPI, updateProductByIdAPI } from '../../apis/common';
import './style.css';

export async function loader({params}) {
    let productDetails = null;
    let productId = params.id
    
    await getMyProductByIdAPI(productId).then((res) => {
        if(res.data.status === 'success'){
            productDetails = res.data.data;
        }else toast.error(res.data.message);
    }).catch(err => toast.error(err.message));
    
    if(!productDetails){
        return redirect('/products');
    }
    return { productDetails, productId };
}

function EditProduct(){

    const { productDetails, productId } = useLoaderData()

    const navigate = useNavigate()

    const [name, setName] = useState(productDetails.name);
    const [description, setDescription] = useState(productDetails.description);
    const [priceInPaisa, setPriceInPaisa] = useState(productDetails.price_in_paisa);
    const [promotionalPriceInPaisa, setPromotionalPriceInPaisa] = useState(productDetails.promo_price_in_paisa);
    const [quantity, setQuantity] = useState(productDetails.quantity);

    const onClickEditButton = async () => {
        if(!name){
            toast.error("Name is required.");
            return;
        }
        if(!description){
            toast.error("Description is required.");
            return;
        }
        if(!priceInPaisa){
            toast.error("Price is required.");
            return;
        }
        if(!promotionalPriceInPaisa){
            toast.error("Promotional Price is required.");
            return;
        }
        if(!quantity){
            toast.error("Quantity is required.");
            return;
        }
        let payloads = {
            name: name,
            description: description,
            priceInPaisa: priceInPaisa,
            promotionalPriceInPaisa: promotionalPriceInPaisa,
            quantity: quantity,
        }
        await updateProductByIdAPI(productId, payloads).then(res=>{
            if(res.data.status === 'success'){
                toast.success('Product added successfully')
                navigate('/products');
            }else toast.error(res.data.message);
        }).catch(err => toast.error(err.message))
    }

    return (
        <div className={'EditProduct'}>
            
            <hr />

            <div className='EditProduct-input-div'>
                <label className='EditProduct-input-label' htmlFor='EditProduct-store-name-input'>
                    Product Name
                </label> <br />
                <input
                    id='EditProduct-store-name-input'
                    value={name}
                    onChange={e => {
                        if (e.target.value.length < 200) {
                            setName(e.target.value);
                        } else {
                            toast.error("Product name should be in less 200 letters.");
                        }
                    }}
                />
            </div>

            <div className='EditProduct-input-div'>
                <label className='EditProduct-input-label' htmlFor='EditProduct-store-desc-input'>
                    Product Description
                </label> <br />
                <textarea
                    id='EditProduct-store-desc-input'
                    rows='20'
                    value={description}
                    onChange={e => { e.target.value.length < 1000 ? setDescription(e.target.value) : toast.error("Product Description should be in less 1000 letters.") }}
                ></textarea>
            </div>
            <div>

                <div className='EditProduct-inline-inputs'>
                    <div className='EditProduct-inline-inputs1'>
                        <label className='EditProduct-input-label'>
                            Price (in paisa)
                        </label><br />
                        <input
                            className='EditProduct-number-input'
                            name='priceInPaisa'
                            value={priceInPaisa}
                            type="number"
                            placeholder="eg. 10000"
                            onChange={e => setPriceInPaisa(e.target.value)}
                        />
                    </div>
                    <div className='EditProduct-inline-inputs2'>
                        <label className='EditProduct-input-label'>
                            Quantity
                        </label><br />
                        <input
                            className='EditProduct-number-input'
                            name='quantity'
                            value={quantity}
                            type="number"
                            placeholder="No. of Items."
                            onChange={e => setQuantity(e.target.value)}
                        />
                    </div>
                </div>
                <div className='AddNewProduct-inline-inputs'>
                    <div className='AddNewProduct-inline-inputs1'>
                        <label className='AddNewProduct-input-label'>
                            Promo Price (in paisa)
                        </label><br />
                        <input
                            className='AddNewProduct-number-input'
                            name='promoPriceInPaisa'
                            value={promotionalPriceInPaisa}
                            type="number"
                            placeholder="eg. 8000"
                            onChange={e => setPromotionalPriceInPaisa(e.target.value)}
                        />
                    </div>
                    
                </div>
                <p className='EditProduct-note'>For Rs. 100 product put 10000 in the price box.</p>
            </div>

            <hr />

            <div className='PhotoGalleryEditPopup-top-div'>
                <p className='user-submit-button1-dark' onClick={onClickEditButton}>UPDATE</p>
                <p className='user-submit-button1-dark' onClick={()=>navigate("/products")} >GO BACK</p>
            </div>
        </div>
    )
}

export default EditProduct
