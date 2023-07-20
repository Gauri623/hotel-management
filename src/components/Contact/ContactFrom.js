import React, { useState } from 'react'
import "./Contact.css"



const ContactFrom = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [company, setCompany] = useState('')
    const [message, setMessage] = useState('')

    const [allValue, setAllValue] = useState([])
    const formSubmit = (e) => {
        e.preventDefault()
        const newValue = { fname, lname, phone, email, subject, company, message }
        setAllValue([...allValue, newValue])

        setFname("")
        setLname("")
        setPhone("")
        setEmail("")
        setSubject("")
        setCompany("")
        setMessage("")

    }
    return (
        <>
            <section className='contact mtop'>
                <div className='container flex'>
                    <div className='main-content'>
                        <h2>Contact From</h2>
                        <p>Fill out the form below, we will get back to you soon.</p>

                        <form onSubmit={formSubmit}>
                            <div className='grid1'>
                                <div className='input'>
                                    <span>
                                        First Name<label>*</label>
                                    </span>

                                    <input type='text' placeholder='First Name' name='fname' value={fname} onChange={(e) => setFname(e.target.value)} />
                                </div>
                                <div className='input'>
                                    <span>
                                        Last Name<label>*</label>
                                    </span>

                                    <input type='text' placeholder='Last Name' name='lname' value={lname} onChange={(e) => setLname(e.target.value)} />
                                </div>
                                <div className='input'>
                                    <span>
                                        Phone Number<label>*</label>
                                    </span>

                                    <input type='text' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </div>
                                <div className='input'>
                                    <span>
                                        Email<label>*</label>
                                    </span>

                                    <input type='text' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className='input'>
                                    <span>
                                        Subject<label>*</label>
                                    </span>

                                    <input type='text' name='subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
                                </div>
                                <div className='input'>
                                    <span>
                                        Your Company<label>*</label>
                                    </span>

                                    <input type='text' name='company' value={company} onChange={(e) => setCompany(e.target.value)} />
                                </div>

                            </div>
                            <div className='input inputlast'>
                                <span>
                                    Write Your Message <label>*</label>
                                </span>
                                <textarea name='message' value={message} cols='30' rows='10' onChange={(e) => setMessage(e.target.value)}></textarea>
                            </div>

                            <button className='primary-btn'>Submit Now</button>
                        </form>
                    </div>
                    <div className='loc'>
                        <h3>Visit our location</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet <br />consectetur.</p>
                        <h3>Message Us</h3>
                        <span>info@example.com</span><br />
                        <span>+123 456 789</span>
                        <div className='icons'>
                            <h3>Follow Us</h3>
                            <div className='social'>

                                <div className='face'>
                                    <a href="https://www.facebook.com" target="_blank">
                                        <i className='fab fa-facebook-f'></i></a>
                                </div>

                                <div className='twitt'>
                                    <a href="https://www.twitter.com" target="_blank">
                                        <i className='fab fa-twitter'></i></a>
                                </div>

                                <div className='instagram'>
                                    <a href="https://www.instagram.com" target="_blank">
                                        <i className='fab fa-instagram'></i></a>
                                </div>

                                <div className='youtube'>
                                    <a href="https://www.youtube.com" target="_blank">
                                        <i className='fab fa-youtube'></i></a>
                                </div>

                            </div>


                        </div>
                    </div>

                </div>

            </section>

            <section className='show-data'>
                {allValue.map((currentValue) => {
                    const { fname, lname, phone, email, subject, company, message } = currentValue
                    return (
                        <div className='side-box'>
                            <h1>Send Successfully</h1>
                            <h3>
                                First Name : <p>{fname}</p>
                            </h3>
                            <h3>Last Name : <p>{lname}</p></h3>
                            <h3>Phone Number : <p>{phone}</p></h3>
                            <h3>Email : <p>{email}</p></h3>
                            <h3>Subject : <p>{subject}</p></h3>
                            <h3>Your Company : <p>{company}</p></h3>
                            <h3>Message : <p>{message}</p></h3>
                        </div>
                    )
                })}
            </section>

        </>
    )
}

export default ContactFrom
