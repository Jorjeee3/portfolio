import React from 'react'
import { useState } from 'react'
import { db } from '../../firebase'
import Telegram from '../../containers/telegram/Telegram'

import './contact.css'

function Contact() {
    const [company, setCompany] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isAlert, setIsAlert] = useState(false)
    const [errorCompany, setErrorCompany] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)

const changeState = () => {
    setIsAlert(!isAlert)
}

const handleSubmit = (e) => {
    e.preventDefault()


    if (company === '' && email === '') {
        setErrorCompany(true)
        setErrorEmail(true)
        setIsAlert(!isAlert)
       
    } else if (company === '' || email === '') {
        setErrorCompany(!company)
        setErrorEmail(!email)
        setIsAlert(!isAlert)
    }
     else {
        setErrorCompany(false)
        setErrorEmail(false)

        db.collection('contacts').add({
            company: company,
            email: email,
            message: message
        })
        .then(() => {
            console.log('message has been sent');
        })
        .catch((error) => {
            alert(error.message)
        })
    
        setCompany('')
        setEmail('')
        setMessage('')
    }

   
}



  return (
      <>
        <div className='contact-section container'>
            <form action="" className='contact-form' onSubmit={handleSubmit} >
                <div className="input-wrapper">
                    <div className="label-wrapper">
                        <label htmlFor="" className='contact-label'> 
                            <div className='label-title'>Company *</div>
                            <input 
                                type="text" 
                                className='contact-input'
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                            />
                            {errorCompany && (
                                <div className='error-massage'>** Company is required **</div>
                            )}
                        </label>
                    </div>
                    <div className="label-wrapper">
                        <label htmlFor="" className='contact-label'>
                            <div className='label-title'>Email *</div>
                            <input 
                                type="text" 
                                className='contact-input'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errorEmail && (
                                <div className='error-massage'>** Email is required **</div>
                            )}
                        </label>
                    </div>
                </div>
                <label htmlFor="" className='contact-label'>
                    <span className='label-title'>Massage</span>
                    <textarea 
                        type="text" 
                        className='contact-textarea'
                        rows="4" 
                        cols="50"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </label>
                <button type='submit' className='form-button' onClick={changeState}>Send</button>
            </form>

            {isAlert && ( 
                <div className="alert-wrapper">
                    <div className='alert'>
                        <span className='alert-name'>message has been sent</span>
                        <button className='alert-close' onClick={changeState}>close</button>
                    </div>
                </div>
            )}
        </div>
        <Telegram />
    </>
  )
}

export default Contact