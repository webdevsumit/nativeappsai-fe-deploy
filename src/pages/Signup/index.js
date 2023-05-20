import React, { useState, Suspense } from 'react'
// import FallingStarts from '../../components/FallingStars'
import './style.css'
// import FacebookLogin from 'react-facebook-login';
import NormalInput from '../../components/commons/NormalInput';
import NormalButton1 from '../../components/commons/NormalButton1';
import { sendSignupOtpOnMailApi, signupApi } from '../../apis/common';
import {useTranslation} from "react-i18next";
import { toast } from 'react-hot-toast';
import SLFContainer2 from '../../components/commons/SLFContainer2';

function Signup() {

	const [t, ] = useTranslation('signup');
	const [tAddressInputList, ] = useTranslation('addressInputList');
	const language = !!localStorage.getItem("lng") ? localStorage.getItem("lng") : "en";

	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [whatsappNumber, setWhatsappNumber] = useState("");
	const [isOtpSent, setIsOtpSent] = useState(false);
	const [otp, setOtp] = useState("");
	const [otpId, setOtpId] = useState("");
	const [country, setCountry] = useState("");

	// const fbResponse = (response) => {
	// 	console.log(response);
	// }

	const doSignup = async () => {
		if(!username || !email || !password || !whatsappNumber || !otp || !country){
			toast.error(t("errors.emptyFields"));
			return;
		}

		if(!otpId){
			toast.error(t("errors.no-otpId"))
		}

		let payloads = {
			username,
			email,
			whatsappNumber,
			otp,
			otpId,
			password,
			language,
			country
		}

		await signupApi(payloads).then(res=>{
			if(res.data.status === "success"){
				localStorage.setItem('token', res.data.token);
				let afterAuthRedirectUrl = localStorage.getItem("afterAuthRedirectUrl");
				if(!afterAuthRedirectUrl) afterAuthRedirectUrl = '/menu/general-settings';
				localStorage.removeItem('afterAuthRedirectUrl');
				window.location.href = afterAuthRedirectUrl;
			}else{
				if(language==='pt') toast.error(res.data.error.pt);
				else toast.error(res.data.error.en);
			}
		}).catch(err=>toast.error(err.message));
	}

	const sendOtp = async () => {

		if(!username || !email || !password || !whatsappNumber || !country){
			toast.error(t("errors.emptyFields"));
			return;
		}

		let payloads = {
			username,
			email,
			whatsappNumber,
			country,
		}

		await sendSignupOtpOnMailApi(payloads).then(res=>{
			if(res.data.status === "success"){
				setIsOtpSent(true);
				setOtpId(res.data.id);
				toast.success(t("errors.otp-sent"));
			}else{
				if(language==='pt') toast.error(res.data.error.pt);
				else toast.error(res.data.error.en);
			}
		}).catch(err=>toast.error(err.message));

	}

	const changeWhatsappNumber = (event) => {
		let tempVal = event.target.value;
		setWhatsappNumber(tempVal.trim())
	}

	const handleEmailChange = (event) => {
		let tempVal = event.target.value;
		setEmail(tempVal.trim())
		setUsername(tempVal.trim())
	}

	return (
		<div className='Signup'>
			{/* <FallingStarts /> */}
			<div className='Signup-main'>
				<div className='Signup-container1'>

					
					{!isOtpSent?<>
						<NormalInput 
							placeholder={t("Signup-container-input-placeholder.email")}
							type='email'
							value={email}
							onChange={handleEmailChange}
							classNames="Signup-input-box-length"
						/>
						<NormalInput 
							placeholder={t("Signup-container-input-placeholder.password")}
							classNames="Signup-input-box-length"
							type='password'
							value={password}
							onChange={e=>setPassword(e.target.value)}
						/>

						<NormalInput 
							placeholder={t("Signup-container-input-placeholder.whatsappNumber")}
							value={whatsappNumber}
							onChange={changeWhatsappNumber}
							classNames="Signup-input-box-length"
							type='tel'
						/>

						<div className='Signup-country-select-div Signup-input-box-length'>
							<select
								className='Signup-input-box-length'
								name='country'
								value={country}
								onChange={e => setCountry(e.target.value)}
							>
								<option disabled="true" value="">{t("Signup-container-input-placeholder.select-country")}</option>
								<option value="Brazil">{tAddressInputList("countries.Brazil")}</option>
								<option value="India">{tAddressInputList("countries.India")}</option>
								<option value="United States">{tAddressInputList("countries.United-States")}</option>
							</select>
							<p>{t("country-note")}</p>
						</div>

						<Suspense fallback="loading">	
							<NormalButton1
							
								label={t('button.signup')}
								classNames='Signup-Signup-button'
								onClick={sendOtp}
							/>
						</Suspense>

					</>:<>
						
						<h4 className='Signup-back-button' onClick={()=>setIsOtpSent(false)}>
								<img src='/assets/svgs/arrow.svg' alt='back' />
								{t('button.back')}
							</h4>

						<NormalInput 
							placeholder={t("Signup-container-input-placeholder.otp")}
							value={otp}
							onChange={e=>setOtp(e.target.value)}
							classNames="Signup-input-box-length"
							type='number'
						/>

						<NormalButton1
							label={t('button.varify-otp')}
							classNames='Signup-Signup-button'
							onClick={doSignup}
						/>
					</>}

					{/* <h5> ------------------ or ------------------ </h5>

					<FacebookLogin
						textButton={t('button.Facebook')}
						appId= "549515160390273"
						fields="name,email"
						scope="public_profile,user_friends,user_actions.books"
						callback={fbResponse}
					/>	 */}

					<h5 className='Signup-login-button'>{t('Signup-login-text')} <a href='/login'>{t('button.login')}</a></h5>
					<h5 className='Signup-login-button2'><a href='/termsAndConditions'>{t('button.t-and-c')}</a></h5>
				</div>
				<SLFContainer2 />
			</div>
		</div>
	)
}

export default Signup