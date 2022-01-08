import React, {useState} from "react";
import './contact.scss'

export function Contact() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [textArea, setTextArea] = useState('')
    const [newMessage, setNewMessage] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName && lastName && email && textArea) {
            const message = {firstName, lastName, email, text: textArea};
            setNewMessage((newMessage) => {
                return [...newMessage, message];

            });

            // setFirstName('');
            // setLastName('');
            // setEmail('');
            // setTextArea('');

        }
        else {
            alert('complete all fields')
        }
    }


    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-input'>
                    <label htmlFor="firstName">First Name: </label>
                    <input
                        type="text"
                        id='firstName'
                        name='firstName'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className='form-input'>
                    <label htmlFor="lastName">Last Name: </label>
                    <input
                        type="text"
                        id='lastName'
                        name='lastName'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className='form-input'>
                    <label htmlFor="email">Your e-mail: </label>
                    <input
                        type="text"
                        id='email'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {!email.includes('@') && <div className='error'>E-mail must contain '@'!</div>}
                </div>
                <div className='textArea form-input'>
                    <label>Message</label>
                    <textarea
                        name="textArea"
                        id="textArea"
                        cols="30"
                        rows="5"
                        value={textArea}
                        onChange={(e) => setTextArea(e.target.value)}
                    >

                    </textarea>

                </div>
                <button type='submit'>Send message</button>

            </form>
        </div>
    )
}