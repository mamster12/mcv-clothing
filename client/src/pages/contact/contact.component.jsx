import React, { useState } from 'react';
import './contact.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

export const ContactPage = () => {


    const [userCredentials, setCredentials] = useState({ email: '', CustomerName: '', phoneNumber: '' });

    const { email, CustomerName, phoneNumber } = userCredentials;
    const handleSubmit = () => {
        console.log("contact page")
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({ ...userCredentials, [name]: value });
    }

    return (
        <div className='send-mail'>
            <h1>Contact Us</h1>
            <span>Have questions, comments, suggestions or feedback? Please fill out the form below. We will respond within 24 hours. </span>
            <p>Call or text: +63 999-999-9999</p>
            <form onSubmit={handleSubmit}>
                <FormInput type="name" name="name" value={CustomerName} onChange={handleChange} label='Name' required />
                <FormInput type="email" name="email" value={email} onChange={handleChange} label='Email*' required />

                <FormInput type="tel" name="tel" value={phoneNumber} onChange={handleChange} label='Phone Number' required />

                <textarea name="message" placeholder="Message"></textarea>
                <div className="buttons">
                    <CustomButton className="custom-button" type="submit" >SUBMIT</CustomButton>
                </div>
            </form>
        </div>
    )
};



export default ContactPage;
