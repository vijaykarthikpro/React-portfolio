import './contact.scss';
import React from 'react';
import {HiOutlineMail} from 'react-icons/hi';

const Contact = ()=>{
    return (
        <section id='contact'>
            <div className="container contact__container">
                <div className="content flex-centered">
                    <span>Get In Touch</span>
                </div>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <HiOutlineMail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>vijaykarthikpro@gmail.com</h5>
                        <a href='mailto:vijaykarthikpro@gmail.com' target='_blank'>Send a message</a>
                    </article>
                    <form action=''>
                        <input type='text' name='name' placeholder='Your Full Name' required/>
                        <input type='email' name='email' placeholder='Your Email' required/>
                        <textarea name='message' rows='7' placeholder='Your Message' required/>
                        <button type='submit' className='btn btn-primary'>Send Message</button>
                    </form>
                </div>
                
            </div>
        </section>
    )
}

export default Contact