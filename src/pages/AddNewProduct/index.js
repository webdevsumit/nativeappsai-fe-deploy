// import moment from 'moment';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { adddNewProductAPI } from '../../apis/common';
import './style.css';

function AddNewProduct() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [priceInPaisa, setPriceInPaisa] = useState("");
    const [quantity, setQuantity] = useState("");

    const onSaveChanges = async () => {
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
        if(!quantity){
            toast.error("Quantity is required.");
            return;
        }
        let payloads = {
            name: name,
            description: description,
            priceInPaisa: priceInPaisa,
            quantity: quantity,
        }
        await adddNewProductAPI(payloads).then(res=>{
            if(res.data.status === "success"){
                toast.success("Product added successfully");
                navigate('/products');
            }else toast.error(res.data.message);
        }).catch(err => toast.error(err.message))
    }

    return (
        <div className={'AddNewProduct'}>
            
            <hr />

            <div className='AddNewProduct-input-div'>
                <label className='AddNewProduct-input-label' htmlFor='AddNewProduct-store-name-input'>
                    Product Name
                </label> <br />
                <input
                    id='AddNewProduct-store-name-input'
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

            <div className='AddNewProduct-input-div'>
                <label className='AddNewProduct-input-label' htmlFor='AddNewProduct-store-desc-input'>
                    Product Description
                </label> <br />
                <textarea
                    id='AddNewProduct-store-desc-input'
                    rows='20'
                    value={description}
                    onChange={e => { e.target.value.length < 1000 ? setDescription(e.target.value) : toast.error("Product Description should be in less 1000 letters.") }}
                ></textarea>
            </div>
            <div>

                <div className='AddNewProduct-inline-inputs'>
                    <div className='AddNewProduct-inline-inputs1'>
                        <label className='AddNewProduct-input-label'>
                            Price (in paisa)
                        </label><br />
                        <input
                            className='AddNewProduct-number-input'
                            name='priceInPaisa'
                            value={priceInPaisa}
                            type="number"
                            placeholder="eg. 10000"
                            onChange={e => setPriceInPaisa(e.target.value)}
                        />
                    </div>
                    <div className='AddNewProduct-inline-inputs2'>
                        <label className='AddNewProduct-input-label'>
                            Quantity
                        </label><br />
                        <input
                            className='AddNewProduct-number-input'
                            name='quantity'
                            value={quantity}
                            type="number"
                            placeholder="No. of Items."
                            onChange={e => setQuantity(e.target.value)}
                        />
                    </div>
                </div>
                <p className='AddNewProduct-note'>For Rs. 100 product put 10000 in the price box.</p>
            </div>

            <hr />

            <div className='PhotoGalleryEditPopup-top-div'>
                <p className='user-submit-button1-dark' onClick={onSaveChanges}>Add</p>
                <p className='user-submit-button1-dark' onClick={()=>navigate("/products")} >GO BACK</p>
            </div>
        </div>
    )
}

export default AddNewProduct