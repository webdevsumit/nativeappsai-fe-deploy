import React, { useState } from 'react';
import './style.css';
import { onSaveMailCredentialsApi, onSaveRazorpayCredentialsApi } from '../../apis/common';
import { toast } from 'react-hot-toast';

function AppSettings() {
  const [id, setId] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [change, setChange] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [changeMail, setChangeMail] = useState(false);
  const [mailCredentials, setMailCredentials] = useState({
    host: "smtp.gmail.com", 
    port: "587",
    username: "",
    password: "",
    use_tls: true
  })

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

  const onSaveMailCredentials = async () => {
    if(isLoading) return;
    if(!mailCredentials.host || !mailCredentials.password || !mailCredentials.port || !mailCredentials.username){
      toast.error("All fields are required.");
      return;
    }
    setIsLoading(true);
    await onSaveMailCredentialsApi(mailCredentials).then(res=>{
      if(res.data.status === "success"){
        setChangeMail(false);
        toast.success("Saved succesfully.")
      }else toast.error(res.data.message)
    }).catch(err=>toast.error(err.message));
    setIsLoading(false);
  }

  return (
    <>
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
            <button className='user-submit-button1-dark w-100' onClick={()=>{setChange(true); setChangeMail(false)}} >CHANGE</button>
          </div>
        </>}
      </div>
      
      <div className='AppSettings'>
      <h3 className='AppSettings-head'>Mail Credentials</h3>
      <p className='AppSettings-input-div-info'>
        Password is hidden.<br/>
        <a href='https://help.accredible.com/smtp-setup-in-gmail-inbox'>How to enable or get SMTP Credentials in gmail?</a>
      </p>
      <div className='Account-input-div AppSettings-input-div'>
        <label className='Account-input-label' htmlFor='mail-username-input'>
          Email / Username
        </label> <br />
        <input
          id='mail-username-input'
          className='AppSettings-inputs'
          disabled={!changeMail}
          value={mailCredentials.username}
          onChange={e => setMailCredentials(prev=>({...prev, username: e.target.value}))}
        />
      </div>
      {changeMail && <div className='Account-input-div AppSettings-input-div'>
        <label className='Account-input-label' htmlFor='mail-password-input'>
          Password
        </label> <br />
        <input
          id='mail-password-input'
          disabled={!changeMail}
          className='AppSettings-inputs'
          value={mailCredentials.password}
          onChange={e => setMailCredentials(prev=>({...prev, password: e.target.value}))}
        />
      </div>}
      <div className='Account-input-div AppSettings-input-div'>
        <label className='Account-input-label' htmlFor='mail-host-input'>
          Host
        </label> <br />
        <input
          id='mail-host-input'
          disabled={!changeMail}
          className='AppSettings-inputs'
          value={mailCredentials.host}
          onChange={e => setMailCredentials(prev=>({...prev, host: e.target.value}))}
        />
      </div>
      <div className='Account-input-div AppSettings-input-div'>
        <label className='Account-input-label' htmlFor='mail-port-input'>
          Port
        </label> <br />
        <input
          id='mail-port-input'
          disabled={!changeMail}
          className='AppSettings-inputs'
          value={mailCredentials.port}
          onChange={e => setMailCredentials(prev=>({...prev, port: e.target.value}))}
        />
      </div>
      <div className='Account-input-div AppSettings-input-div AppSettings-input-div-linline'>
        <label className='Account-input-label' htmlFor='mail-use_tls-input'>
          TLS
        </label> <br />
        <input
          id='mail-use_tls-input'
          disabled={!changeMail}
          className='AppSettings-inputs'
          type='checkbox'
          checked={mailCredentials.use_tls}
          onChange={e => setMailCredentials(prev=>({...prev, use_tls: e.target.checked}))}
        />
      </div>
      {changeMail?<>
        <div className='AppSettings-button-div'>
          <button className='user-submit-button1-dark w-100 AppSettings-btn-danger' onClick={()=>setChangeMail(false)} >CANCEL</button>
          <button className='user-submit-button1-dark w-100' onClick={onSaveMailCredentials} >{isLoading?'SAVING...':'SAVE'}</button>
        </div>
      </>:<>
        <div className='AppSettings-button-div'>
          <button className='user-submit-button1-dark w-100' onClick={()=>{setChangeMail(true); setChange(false)}} >CHANGE</button>
        </div>
      </>}
    </div>
    </>
  )
}

export default AppSettings