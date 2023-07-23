import React, { useState } from 'react'
import './style.css'
import NormalInput from '../../components/commons/NormalInput';
import { signupApi } from '../../apis/common';
import { toast } from 'react-hot-toast';
import SLFContainer1 from '../../components/commons/SLFContainer1';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsLoading } from '../../redux/navbar';


export const loader = async ({ params }) => {
    return { 'planType': params.planType };
}

function Signup() {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phone, setPhone] = useState("");
	const { planType } = useLoaderData();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const doSignup = async () => {
		if(!email || !password || !phone){
			toast.error("All fields are required");
			return;
		}

		let payloads = {
			email: email.toLowerCase(),
			phone,
			password,
			planType,
		}

		await signupApi(payloads).then(res=>{
			dispatch(setIsLoading(true));
			if(res.data.status === "success"){
				localStorage.setItem('token', res.data.token);
				navigate(`/account`);
			}else{
				toast.error(res.data.message);
			}
		}).catch(err=>toast.error(err.message));
		dispatch(setIsLoading(false));
	}

	const changeWhatsappNumber = (event) => {
		let tempVal = event.target.value;
		if(tempVal.length <= 10)
			setPhone(tempVal.trim())
	}

	const handleEmailChange = (event) => {
		let tempVal = event.target.value;
		setEmail(tempVal.trim().toLowerCase().replace(/ /g,"_"))
	}

	return (
		<div className='Signup'>
			<div className='Signup-main'>
				<div className='Signup-container1'>
					
						<NormalInput 
							placeholder="Your email address"
							type='email'
							value={email}
							onChange={handleEmailChange}
							classNames="Signup-input-box-length"
						/>
						<NormalInput 
							placeholder="Create Password"
							classNames="Signup-input-box-length"
							type='password'
							value={password}
							onChange={e=>setPassword(e.target.value)}
						/>

						<NormalInput 
							placeholder="Contact Number"
							value={phone}
							onChange={changeWhatsappNumber}
							classNames="Signup-input-box-length"
							type='tel'
							max={10}
						/>

						<p className='user-submit-button1-dark' onClick={doSignup}>CREATE ACCOUNT</p>

						<h5 className='Login-login-button'>Already have an account? <Link to='/login'>Login</Link></h5>
						<h5 className='Login-login-button2'><Link to='/termsAndConditions'>Terms and Conditions</Link></h5>

				</div>
				<SLFContainer1 />
			</div>
		</div>
	)
}

export default Signup