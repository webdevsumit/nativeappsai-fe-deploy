import React, { useState } from 'react';
import './style.css';
import { onSaveRazorpayCredentialsApi } from '../../apis/common';
import { toast } from 'react-hot-toast';

function AppSettings() {
  const [id, setId] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [change, setChange] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSaveCredentials = async () => {
    if(isLoading) return;
    if(!id || !secretKey){
      toast.error("All fields are required.");
      return;
    }

    setIsLoading(true);
    await onSaveRazorpayCredentialsApi({id, secretKey}).then(res=>{
      if(res.data.status === "success"){
        setChange(false);
        setId('');
        setSecretKey('')
        toast.success("Saved succesfully.")
      }else toast.error(res.data.message)
    }).catch(err=>toast.error(err.message));
    setIsLoading(false);
  }

  return (
    <div className='AppSettings'>
      <h3 className='AppSettings-head'>Razorpay Credentials</h3>
      <p className='AppSettings-input-div-info'>
        Razorpay id and secret key are citical part and related to the payment hence they are not allowed to see but you can change them.
      </p>
      {change?<>
        <div className='Account-input-div AppSettings-input-div'>
          <label className='Account-input-label' htmlFor='Razorpay-id-input'>
            Id
          </label> <br />
          <input
            id='Razorpay-id-input'
            className='AppSettings-inputs'
            value={id}
            onChange={e => setId(e.target.value)}
          />
        </div>
        <div className='Account-input-div AppSettings-input-div'>
          <label className='Account-input-label' htmlFor='Razorpay-secret-key-input'>
            Secret Key
          </label> <br />
          <input
            id='Razorpay-secret-key-input'
            className='AppSettings-inputs'
            value={secretKey}
            onChange={e => setSecretKey(e.target.value)}
          />
        </div>
        <div className='AppSettings-button-div'>
          <button className='user-submit-button1-dark w-100 AppSettings-btn-danger' onClick={()=>setChange(false)} >CANCEL</button>
          <button className='user-submit-button1-dark w-100' onClick={onSaveCredentials} >{isLoading?'SAVING...':'SAVE'}</button>
        </div>
      </>:<>
        <div className='AppSettings-button-div'>
          <button className='user-submit-button1-dark w-100' onClick={()=>setChange(true)} >CHANGE</button>
        </div>
      </>}
    </div>
  )
}

export default AppSettings