import React, { useState } from 'react';
import './style.css';
import SLFContainer2 from '../../components/commons/SLFContainer2';
import NormalInput from '../../components/commons/NormalInput';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router';
import { signupAddStoreDetailsAPI } from '../../apis/common';
import { useDispatch } from 'react-redux';
import { setIsLoading } from '../../redux/navbar';

export const loader = async ({ params }) => {
    return { 'planType': params.planType };
}

function SignupAddStoreDetails() {

    const { planType } = useLoaderData();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
	const dispatch = useDispatch();

    const onSave = async () => {
		if(!name || !description){
			toast.error("All fields are required.");
			return;
		}

		let payloads = {
			storeName :name,
			description,
            planType,
		}

		dispatch(setIsLoading(true));
		await signupAddStoreDetailsAPI(payloads).then(res=>{
			if(res.data.status === "success"){
				let redirectLink = localStorage.getItem("redirectLink");
				if(!!redirectLink && redirectLink!=="/landing")
					navigate(redirectLink);
				else
					navigate('/');
			}else{
				toast.error(res.data.message);
			}
		}).catch(err=>toast.error(err.message));
		dispatch(setIsLoading(false));
	}

    return (
        <div className='SignupAddStoreDetails'>
			<div className='SignupAddStoreDetails-main'>
				<div className='SignupAddStoreDetails-container1'>

					<NormalInput 
						placeholder="Enter Store Name"
						type='text'
						value={name}
						onChange={e => {
                            if (e.target.value.length < 200) {
                                setName(e.target.value);
                            } else {
                                toast.error("Product name should be in less 200 letters.");
                            }
                        }}
                        classNames="SignupAddStoreDetails-input-box-length"
					/>
					
                    <div className='SignupAddStoreDetails-input-div'>
                        <textarea
                            id='SignupAddStoreDetails-store-desc-input'
                            rows='20'
                            value={description}
                            placeholder='Enter Store Description'
                            onChange={e => { e.target.value.length < 1000 ? setDescription(e.target.value) : toast.error("Product Description should be in less 1000 letters.") }}
                        ></textarea>
                    </div>

					<p className='user-submit-button1-dark' onClick={onSave}>SAVE STORE DETAILS</p>

				</div>
				<SLFContainer2 />
			</div>
		</div>
    )
}

export default SignupAddStoreDetails