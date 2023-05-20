import React, { useState } from 'react'
// import FallingStarts from '../../components/FallingStars'
import './style.css'
import FacebookLogin from 'react-facebook-login';
import NormalInput from '../../components/commons/NormalInput';
import NormalButton1 from '../../components/commons/NormalButton1';
import { loginApi } from '../../apis/common';
import { toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import SLFContainer2 from '../../components/commons/SLFContainer2';

function Login() {

	const language = !!localStorage.getItem("lng") ? localStorage.getItem("lng") : "en";
	const [t, ] = useTranslation('login');

	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const fbResponse = (response) => {
		console.log(response);
	}

	const doLogin = async () => {
		if(!username || !email || !password){
			toast.error(t("errors.emptyFields"));
			return;
		}

		let payloads = {
			username,
			email,
			password
		}

		await loginApi(payloads).then(res=>{
			if(res.data.status === "success"){
				localStorage.setItem('token', res.data.token);
				let afterAuthRedirectUrl = localStorage.getItem("afterAuthRedirectUrl");
				if(!afterAuthRedirectUrl) afterAuthRedirectUrl = '/';
				localStorage.removeItem('afterAuthRedirectUrl');
				window.location.href = afterAuthRedirectUrl;
			}else{
				if(language==='pt') toast.error(res.data.error.pt);
				else toast.error(res.data.error.en);
			}
		}).catch(err=>toast.error(err.message));
	}

	const handleEmailChange = (event) => {
		let tempVal = event.target.value;
		setEmail(tempVal.trim())
		setUsername(tempVal.trim())
	}

	return (
		<div className='Login'>
			{/* <FallingStarts /> */}
			<div className='Login-main'>
				<div className='Login-container1'>

					<NormalInput 
						placeholder={t("Login-container-input-placeholder.email")}
						type='email'
						value={email}
						onChange={handleEmailChange}
						classNames="Login-input-box-length"
					/>
					<NormalInput 
						placeholder={t("Login-container-input-placeholder.password")}
						classNames="Login-input-box-length"
						type='password'
						value={password}
						onChange={e=>setPassword(e.target.value)}
					/>

					<NormalButton1
						label={t("button.login")}
						classNames='Login-Login-button'
						onClick={doLogin}
					/>

					<h5> ------------------ or ------------------ </h5>

					<FacebookLogin
						textButton={t("button.Facebook")}
						appId= "549515160390273"
						fields="name,email"
						scope="public_profile,user_friends,user_actions.books"
						callback={fbResponse}
					/>	

					<h5 className='Login-login-button'>{t("Login-signup-text")} <a href='/signup'>{t("button.signup")}</a></h5>
					<h5 className='Login-login-button2'><a href='/forgot-password'>{t("button.fortgot-password")}</a></h5>
					<h5 className='Login-login-button2'><a href='/termsAndConditions'>{t("button.t-and-c")}</a></h5>
				</div>
				<SLFContainer2 />
			</div>
		</div>
	)
}

export default Login