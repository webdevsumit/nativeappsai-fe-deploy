import React, { useEffect, useState } from 'react';
import { redirect, useLoaderData } from 'react-router-dom';
import { getStoreAccountDetailsAPI, updateStoreAccountDetailsApi } from '../../apis/common';
import AddressInputList from '../../components/AddressInputList';
import PhoneInputList from '../../components/PhoneInputList';
import './style.css';
import toast from 'react-hot-toast';

export const loader = async () => {
	let data;
	await getStoreAccountDetailsAPI().then(res => {
		if (res.data.status === 'success') {
			data = res.data.data;
		}
	}).catch(err => toast.error(err.message));
	if (!data) {
		return redirect('/');
	}
	return { "data": data };
}

function Account() {

	const { data } = useLoaderData();
	// const navigate = useNavigate();

	const [storeName, setStoreName] = useState(data.store_name);
	const [storeLogo, setStoreLogo] = useState(null);
	const [storeLogoHelpText, setStoreLogoHelpText] = useState(false);
	const [storeNameError, setStoreNameError] = useState('');
	const [storeLogoError, setStoreLogoError] = useState('');
	const [storeDesc, setStoreDesc] = useState(data.store_description);
	const [storeDescError, setStoreDescError] = useState(false);
	const [storeThemeColor, setStoreThemeColor] = useState(data.store_theme_color);
	const [storeThemeColorHelpText, setStoreThemeColorHelpText] = useState(false);
	const [isSaving, setIsSaving] = useState(false);
	const [addresses, setAddresses] = useState(data.store_addresses.map(add => {
		return {
			'id': add.id,
			'pincode': add.pincode,
			'house_number': add.house_number,
			'street': add.street,
			'landmark': add.landmark,
			'city': add.city,
			'state': add.state,
			'country': add.country,
			// 'latitude': add.latitude,
			// 'longtude': add.longtude,
		}
	}));
	const [contactNumbers, setContactNumbers] = useState(data.store_contact_numbers.map(cn => {
		return {
			'id': cn.id,
			'number': cn.number,
			'is_whatsapp': cn.is_whatsapp,
		}
	}));

	// Payment methods details...
	// const [accountType, setPaymentType] = useState('Individual');
	// const [automaticTransfer, setAutomaticTransfer] = useState(false);
	// const [cpf, setCpf] = useState('');
	// const [cnpj, setCnpj] = useState('');
	// const [name, setNane] = useState('');
	// const [companyName, setCompanyName] = useState('');
	// const [cpfOfRespPerson, setCpfOfRespPerson] = useState('');
	// const [nameOfRespPerson, setNaneOfRespPerson] = useState('');
	// const [bank, setBank] = useState('');
	// const [bank_ag, setBank_ag] = useState('');
	// const [bank_type, setBank_type] = useState('');
	// const [bank_cc, setBank_cc] = useState('');

	const onStoreLogoChange = (e) => {
		let logo = e.target.files[0];
		if (logo.size / 1024 > 500) {
			setStoreLogoError("Logo cannot exceed 500 KB.");
			return;
		}
		setStoreLogo(logo);
		setStoreLogoError('');
	}

	const onThemeColorChange = (selectedColor) => {
		var r = document.querySelector(':root');
		r.style.setProperty('--user-primary', selectedColor);
		setStoreThemeColor(selectedColor);
	}

	const onSubmit = async () => {
		if(isSaving){
			return;
		}

		let hasErrors = false;

		if (!storeName && !hasErrors) {
			toast.error("Store Name is required.");
			hasErrors = true;
		}
		if (!storeDesc && !hasErrors) {
			toast.error("Description is required.");
			hasErrors = true;
		}
		// if(accountType==="Individual"){
		// 	if(!cpf && !hasErrors){
		// 		toast.error(t("messages.requiredFields.cpf"));
		// 		hasErrors = true;
		// 	}
		// 	if(!name && !hasErrors){
		// 		toast.error(t("messages.requiredFields.name"));
		// 		hasErrors = true;
		// 	}
		// }else{
		// 	if(!cnpj && !hasErrors){
		// 		toast.error(t("messages.requiredFields.cnpj"));
		// 		hasErrors = true;
		// 	}
		// 	if(!companyName && !hasErrors){
		// 		toast.error(t("messages.requiredFields.companyName"));
		// 		hasErrors = true;
		// 	}
		// 	if(!cpfOfRespPerson && !hasErrors){
		// 		toast.error(t("messages.requiredFields.cpfOfRespPerson"));
		// 		hasErrors = true;
		// 	}
		// 	if(!nameOfRespPerson && !hasErrors){
		// 		toast.error(t("messages.requiredFields.nameOfRespPerson"));
		// 		hasErrors = true;
		// 	}
		// }
		// if(!bank && !hasErrors){
		// 	toast.error(t("messages.requiredFields.bank"));
		// 	hasErrors = true;
		// }
		// if(!bank_ag && !hasErrors){
		// 	toast.error(t("messages.requiredFields.bank_ag"));
		// 	hasErrors = true;
		// }
		// if(!bank_type && !hasErrors){
		// 	toast.error(t("messages.requiredFields.bank_type"));
		// 	hasErrors = true;
		// }
		// if(!bank_cc && !hasErrors){
		// 	toast.error(t("messages.requiredFields.bank_cc"));
		// 	hasErrors = true;
		// }

		addresses.forEach(({
			house_number,
			street,
			landmark,
			pincode,
			city,
			state,
			country
		}, index) => {
			if (!house_number && !hasErrors) {
				toast.error(`Flat No. in address ${index + 1} is required.`);
				hasErrors = true;
			}
			if (!street && !hasErrors) {
				toast.error(`Street in address ${index + 1} is required.`);
				hasErrors = true;
			}
			if (!landmark && !hasErrors) {
				toast.error(`Landmark in address ${index + 1} is required.`);
				hasErrors = true;
			}
			if (!pincode && !hasErrors) {
				toast.error(`Pincode in address ${index + 1} is required.`);
				hasErrors = true;
			}
			if (!city && !hasErrors) {
				toast.error(`City in address ${index + 1} is required.`);
				hasErrors = true;
			}
			if (!state && !hasErrors) {
				toast.error(`State in address ${index + 1} is required.`);
				hasErrors = true;
			}
			if (!country && !hasErrors) {
				toast.error(`Country in address ${index + 1} is required.`);
				hasErrors = true;
			}
		})

		contactNumbers.forEach(({ number, type }, index) => {
			if (!number && !hasErrors) {
				toast.error(`Number in Contact ${index + 1} is required.`);
				hasErrors = true;
			}
		})

		if (contactNumbers.length === 0 && !hasErrors) {
			toast.error(`At leat one contact is required.`);
			hasErrors = true;
		}

		if (!hasErrors) {
			var formData = new FormData();
			formData.append('storeName', storeName);
			formData.append('logo', storeLogo);
			formData.append('description', storeDesc);
			formData.append('themeColor', storeThemeColor);
			formData.append('addresses', JSON.stringify(addresses));
			formData.append('contactNumbers', JSON.stringify(contactNumbers));

			// formData.append('accountType', accountType);
			// formData.append('automaticTransfer', automaticTransfer);
			// formData.append('cpf', cpf);
			// formData.append('cnpj', cnpj);
			// formData.append('name', name);
			// formData.append('companyName', companyName);
			// formData.append('cpfOfRespPerson', cpfOfRespPerson);
			// formData.append('nameOfRespPerson', nameOfRespPerson);
			// formData.append('bank', bank);
			// formData.append('bank_ag', bank_ag);
			// formData.append('bank_type', bank_type);
			// formData.append('bank_cc', bank_cc);

			setIsSaving(true);
			await updateStoreAccountDetailsApi(formData).then(res => {
				if (res.data.status === 'success') {
					toast.success(res.data.message);
					localStorage.setItem("user_theme_color", storeThemeColor);
				}
				else {
					toast.error(res.data.error);
				}
			}).catch(err => toast.error(err.message));
			setIsSaving(false);
		}
	}

	useEffect(() => {
		// onThemeColorChange('#fb9f6a');
		return (() => {
			let storeThemeColor = localStorage.getItem('user_theme_color');
			if (!!storeThemeColor && storeThemeColor !== 'null' && storeThemeColor !== 'undefined') {
				onThemeColorChange(storeThemeColor);
			} else {
				onThemeColorChange('#fb9f6a');
			}
		})
	}, [])


	return (
		<div className='Account'>

			<div className='Account-input-div'>
				<label className='Account-input-label' htmlFor='Account-store-name-input'>
					Store/Company Name
				</label> <br />
				<input
					id='Account-store-name-input'
					value={storeName}
					onChange={e => {
						if (e.target.value.length < 100) {
							setStoreName(e.target.value);
							setStoreNameError('');
						} else {
							setStoreNameError("Name should be less than 100 characters.");
						}
					}}
				/>
				{!!storeNameError && <p className='Account-unique-id-message text-danger'>{storeNameError}</p>}
			</div>

			<div className='Account-input-div'>
				<h4 className='Account-input-label Account-flex-inline'>Logo <p className='Account-question-mark' onClick={() => setStoreLogoHelpText(!storeLogoHelpText)}>?</p> </h4>
				{storeLogoHelpText && <p className='Account-help-text'>
					Please select an image of type png or jpeg. Size should be less than 500kb and It is going to be shown to your customers on the app.
				</p>}
				<label className='Account-input-label' htmlFor='Account-store-logo-input'>
					<h3 className='Create-store-file-input-label'>Select Image</h3>
				</label>
				<input
					id='Account-store-logo-input'
					type='file'
					accept="image/png, image/jpeg"
					// value={storeLogo}
					onChange={onStoreLogoChange}
				/>
				{storeLogoError && <p className='Account-unique-id-message text-danger'>{storeLogoError}</p>}
				<div className="Create-store-file-input-preview">
					{(!!storeLogo || !!data.store_logo) ? <img
						src={!!storeLogo ? URL.createObjectURL(storeLogo) : data.store_logo}
						alt="logo"
					/> : <p>
						There is some issue with the image. Please fix.
					</p>}
				</div>
			</div>

			<div className='Account-input-div'>
				<label className='Account-input-label' htmlFor='Account-store-desc-input'>
					Description (max: 1000 characters)
				</label> <br />
				<textarea
					id='Account-store-desc-input'
					rows='5'
					value={storeDesc}
					onChange={e => { e.target.value.length < 1000 ? setStoreDesc(e.target.value) : setStoreDescError(true) }}
				></textarea>
				{storeDescError && <p className='Account-unique-id-message text-danger'>Please do not exceed the characters limit, which is 1000.</p>}
			</div>

			<div className='Account-input-div'>
				<div className='Account-store-color-input-label-div'>
					<label className='Account-input-label' htmlFor='Account-store-color-input'>
						Theme Color
					</label>
					<p className='Account-question-mark' onClick={() => setStoreThemeColorHelpText(!storeThemeColorHelpText)}>?</p>
				</div>
				{storeThemeColorHelpText && <p className='Account-help-text'>
					This Color will be shown when user opens your store and It will also be shown to you here too.
				</p>}
				<input
					id='Account-store-color-input'
					type='color'
					value={storeThemeColor}
					onChange={e => onThemeColorChange(e.target.value)}
				/>
			</div>
			<hr />
			<div className='Account-input-div'>
				<AddressInputList
					addresses={addresses}
					setAddresses={setAddresses}
					primaryColor='var(--user-primary)'
				/>
			</div>
			<hr />
			<div className='Account-input-div'>
				<PhoneInputList
					phoneNumbers={contactNumbers}
					setPhoneNumbers={setContactNumbers}
					primaryColor='var(--user-primary)'
				/>
			</div>
			<hr />

			{/* <h4 className='Account-payment-head'>{t("payment-head")}</h4> */}
			{/* <div className='Account-input-div'> */}
				{/* <div className='Account-input-div Account-storeTiming'>
					<div>
						<label className='PhoneInputList-sub-input-label'>
							{t("payment.account-type")}
						</label><br />
						<select
							className='Account-input-label'
							name='account-type'
							value={accountType}
							onChange={e => setPaymentType(e.target.value)}
						>
							<option value="Individual">{t("payment.account-type-select.individual")}</option>
							<option value="Legal Entity">{t("payment.account-type-select.legal-entity")}</option>
						</select>
					</div>
					<div>
						<label className='PhoneInputList-sub-input-label'>
							{t("payment.autoTrasfer")}
						</label><br />
						<select
							className='Account-input-label'
							name='auto-transfer'
							value={automaticTransfer}
							onChange={e => setAutomaticTransfer(e.target.value)}
						>
							<option value={true}>{t("payment.autoTrasfer-select.true")}</option>
							<option value={false}>{t("payment.autoTrasfer-select.false")}</option>
						</select>
					</div>
				</div> */}
				{/* <div className='Account-input-div Account-storeTiming'>
					{accountType === "Individual" ?
						<div>
							<label className='PhoneInputList-sub-input-label'>
								{t("payment.cpf")}
							</label><br />
							<input
								placeholder={t("payment.cpf-placeholder")}
								value={cpf}
								onChange={e => setCpf(e.target.value)}
							/>
						</div>
						:
						<div>
							<label className='PhoneInputList-sub-input-label'>
								{t("payment.cnpj")}
							</label><br />
							<input
								placeholder={t("payment.cnpj-placeholder")}
								value={cnpj}
								onChange={e => setCnpj(e.target.value)}
							/>
						</div>
					}
					{accountType === "Individual" ?
						<div>
							<label className='PhoneInputList-sub-input-label'>
								{t("payment.name")}
							</label><br />
							<input
								placeholder={t("payment.name-placeholder")}
								value={name}
								onChange={e => setNane(e.target.value)}
							/>
						</div>
						:
						<div>
							<label className='PhoneInputList-sub-input-label'>
								{t("payment.company-name")}
							</label><br />
							<input
								placeholder={t("payment.company-name-placeholder")}
								value={companyName}
								onChange={e => setCompanyName(e.target.value)}
							/>
						</div>
					}
				</div> */}
				{/* {accountType !== "Individual" && <>
					<div className='Account-input-div Account-storeTiming'>
						<div>
							<label className='PhoneInputList-sub-input-label'>
								{t("payment.nameOfRespPerson")}
							</label><br />
							<input
								placeholder={t("payment.nameOfRespPerson-placeholder")}
								value={nameOfRespPerson}
								onChange={e => setNaneOfRespPerson(e.target.value)}
							/>
						</div>
						<div>
							<label className='PhoneInputList-sub-input-label'>
								{t("payment.cpfOfRespPerson")}
							</label><br />
							<input
								placeholder={t("payment.cpfOfRespPerson-placeholder")}
								value={cpfOfRespPerson}
								onChange={e => setCpfOfRespPerson(e.target.value)}
							/>
						</div>
					</div>
					<h6 className='Account-payment-address'>{t("payment.responsible-person-note")}</h6>
				</>} */}
				{/* <div className='Account-input-div Account-storeTiming'>
					<div>
						<label className='PhoneInputList-sub-input-label'>
							{t("payment.bank")}
						</label><br />
						<input
							placeholder={t("payment.bank-placeholder")}
							value={bank}
							onChange={e => setBank(e.target.value)}
						/>
					</div>
					<div>
						<label className='PhoneInputList-sub-input-label'>
							{t("payment.bank_ag")}
						</label><br />
						<input
							placeholder={t("payment.bank_ag-placeholder")}
							value={bank_ag}
							onChange={e => setBank_ag(e.target.value)}
						/>
					</div>
				</div> */}
				{/* <div className='Account-input-div Account-storeTiming'>
					<div>
						<label className='PhoneInputList-sub-input-label'>
							{t("payment.bank_type")}
						</label><br />
						<input
							placeholder={t("payment.bank_type-placeholder")}
							value={bank_type}
							onChange={e => setBank_type(e.target.value)}
						/>
					</div>
					<div>
						<label className='PhoneInputList-sub-input-label'>
							{t("payment.bank_cc")}
						</label><br />
						<input
							placeholder={t("payment.bank_cc-placeholder")}
							value={bank_cc}
							onChange={e => setBank_cc(e.target.value)}
						/>
					</div>
				</div> */}
				{/* <h6 className='Account-payment-address'>{t("payment.address-note")}</h6> */}
			{/* </div> */}
			{/* <hr /> */}
			<div className='Account-input-div'>
				<button
					className='user-submit-button1-dark w-100'
					onClick={onSubmit}
				>{isSaving?'SAVING...':'SAVE'}</button>
			</div>
		</div>
	)
}

export default Account