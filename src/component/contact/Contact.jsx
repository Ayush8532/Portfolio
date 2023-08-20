import React, { useRef,useState } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';


const Contact = () => {
    const formRef=useRef();
    const[done,setDone]=useState(false)
    const handleSubmit=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_cfvojvq', 'template_61wwwzk', formRef.current, 'WeEjM1VCF3D2RDtpQ')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });

    }
    return (
        <>
            <div className="c" id='contact'>
                <div className='c-wrapper'>
                    <div className="c-left">
                        <h1 className="c-title">
                            Get in touch
                        </h1>
                        <div className='c-under'></div>
                        <div className="c-info">
                            <div className='c-info-item'>
                                <i className="fa-solid fa-envelope"></i>uniyalayush8532@gmail.com
                            </div>
                            <div className='c-info-item'>
                                <i className="fa-brands fa-whatsapp"></i><a className='c-link' href="https://wa.me/8532959622" target='_blank' rel="noreferrer">Send a message</a>
                            </div>
                            <div className='c-info-item'><i className="fa-solid fa-location-dot"></i>Dehradun, Uttarakhand-248001
                            </div>
                            <div className='c-info-item'><i className="fa-solid fa-phone"></i>+91 8532959622
                            </div>
                        </div>
                    </div>
                    <div className="c-right">
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input type="text" placeholder='Name' name='user_name' />
                            <input type="text" placeholder='Subject' name='user_subject' />
                            <input type="text" placeholder='Email' name='user_email' />
                            <textarea name="message" placeholder='Message' rows="5"></textarea>
                            <button>Submit</button>
                            {done && "Thank You!!!!!"}
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact