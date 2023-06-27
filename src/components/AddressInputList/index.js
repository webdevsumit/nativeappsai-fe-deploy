import React from 'react';
import './style.css';

function AddressInputList({
    addresses,
    setAddresses,
    primaryColor='var(--store-primary)'
}) {

    const onAddressChange = (i, { target: { name, value } }) => {
		let oldAddresses = [...addresses];
		oldAddresses[i][name] = value;
		setAddresses(oldAddresses);
	}

	const addAddressBox = () => {
		setAddresses([...addresses, {
            'id': null,
			'pincode': '',
			'house_number': '',
			'street': '',
			'landmark': '',
			'city': '',
			'state': '',
			'country': addresses.length>0 ? addresses[0].country : "India",
			// 'latitude': '',
			// 'longtude': '',
		}])
	}

	const removeAddressBox = (i) => {
		let oldAddresses = [...addresses];
		oldAddresses.splice(i, 1);
		setAddresses(oldAddresses);
	}

    return (
        <div>
            <label className='AddressInputList-input-label' style={{color:primaryColor}}>
                Addresses
            </label>
            <div className='AddressInputList-input-div-div'>
                {addresses.map(({
                    house_number,
                    street,
                    landmark,
                    pincode,
                    city,
                    state,
                    country
                }, i) =>
                    <div key={i} className='AddressInputList-address'>
                        {addresses.length>1 && <p onClick={() => removeAddressBox(i)} className='AddressInputList-address-remove-btn'>X</p>}
                        <div>
                            <label className='AddressInputList-sub-input-label' style={{color:primaryColor}}>
                                Flat No.
                            </label><br />
                            <input
                                className='AddressInputList-house_number-input'
                                name='house_number'
                                value={house_number}
                                onChange={e => onAddressChange(i, e)}
                            />
                        </div>
                        <div>
                            <label className='AddressInputList-sub-input-label' style={{color:primaryColor}}>
                                Street
                            </label><br />
                            <input
                                className='AddressInputList-street-input'
                                name='street'
                                value={street}
                                onChange={e => onAddressChange(i, e)}
                            />
                        </div>
                        <div>
                            <label className='AddressInputList-sub-input-label' style={{color:primaryColor}}>
                                Lnadmark
                            </label><br />
                            <input
                                className='AddressInputList-landmark-input'
                                name='landmark'
                                value={landmark}
                                onChange={e => onAddressChange(i, e)}
                            />
                        </div>
                        <div className='AddressInputList-inline-inputs'>
                            <div className='AddressInputList-inline-inputs1'>
                                <label className='AddressInputList-sub-input-label' style={{color:primaryColor}}>
                                    Pincode
                                </label><br />
                                <input
                                    className='AddressInputList-cep_or_pincode-input'
                                    name='pincode'
                                    value={pincode}
                                    onChange={e => onAddressChange(i, e)}
                                />
                            </div>
                            <div className='AddressInputList-inline-inputs2'>
                                <label className='AddressInputList-sub-input-label' style={{color:primaryColor}}>
                                    City
                                </label><br />
                                <input
                                    className='AddressInputList-city-input'
                                    name='city'
                                    value={city}
                                    onChange={e => onAddressChange(i, e)}
                                />
                            </div>
                        </div>
                        <div className='AddressInputList-inline-inputs'>
                            <div className='AddressInputList-inline-inputs1'>
                                <label className='AddressInputList-sub-input-label' style={{color:primaryColor}}>
                                    State
                                </label><br />
                                <input
                                    className='AddressInputList-state-input'
                                    name='state'
                                    value={state}
                                    onChange={e => onAddressChange(i, e)}
                                />
                            </div>
                            <div className='AddressInputList-inline-inputs2'>
                                <label className='AddressInputList-sub-input-label' style={{color:primaryColor}}>
                                    Country
                                </label><br />
                                <select
                                    disabled={true}
                                    className='AddressInputList-country-options-input'
                                    name='country'
                                    value={country}
                                    onChange={e => onAddressChange(i, e)}
                                >
                                    <option value="">Select</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="India">India</option>
                                    <option value="United States">United States</option>
                                </select>
                            </div>
                        </div>
                    </div>)}
                <div>
                    <p className='AddressInputList-address-add-btn' onClick={addAddressBox}>ADD</p>
                </div>
            </div>
        </div>
    )
}

export default AddressInputList