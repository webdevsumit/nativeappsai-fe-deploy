import React, { useState } from 'react'
import './style.css'
import NormalInput from '../../components/commons/NormalInput';
import { loginApi } from '../../apis/common';
import { toast } from 'react-hot-toast';
import SLFContainer2 from '../../components/commons/SLFContainer2';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsLoading } from './../../redux/navbar';

function Login() {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const doLogin = async () => {
		if(!email || !password){
			toast.error("All fields are required.");
			return;
		}

		let payloads = {
			email :email.toLowerCase().replace(/ /g,"_"),
			password
		}

		dispatch(setIsLoading(true));
		await loginApi(payloads).then(res=>{
			if(res.data.status === "success"){
				localStorage.setItem('token', res.data.token);
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

	const handleemailChange = (event) => {
		let tempVal = event.target.value;
		setEmail(tempVal.trim().toLowerCase().replace(/ /g,"_"))
	}

	return (
		<div className='Login'>
			<div className='Login-main'>
				<div className='Login-container1'>

					<NormalInput 
						placeholder="Enter email"
						type='text'
						value={email}
						onChange={handleemailChange}
						classNames="Login-input-box-length"
					/>
					<NormalInput 
						placeholder="Enter Password"
						classNames="Login-input-box-length"
						type='password'
						value={password}
						onChange={e=>setPassword(e.target.value)}
					/>

					<p className='user-submit-button1-dark' onClick={doLogin}>LOGIN</p>

					<h5 className='Login-login-button'>Do not have an account? <Link to='/signup/basic'>Sign Up</Link></h5>
					<h5 className='Login-login-button2'><Link to='/forgot-password'>Forgot Password?</Link></h5>
					<h5 className='Login-login-button2'><Link to='/termsAndConditions'>Terms and Conditions</Link></h5>
				</div>
				<SLFContainer2 />
			</div>
		</div>
	)
}

export default Login