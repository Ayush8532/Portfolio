import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className='f-head'>
                <a href="#intro" className='f-link'><h2>Ayush Uniyal</h2></a>
                </div>
                <div className='footer-icons'>
                    <h1> <a href="https://github.com/Ayush8532" target='_blank' rel="noreferrer"><i className=" ficons fa-brands fa-github"></i></a></h1>
                    <h1><a href="https://www.linkedin.com/in/ayush-uniyal-682347208/" target='_blank' rel="noreferrer"><i className="ficons fa-brands fa-linkedin"></i></a></h1>
                    <h1><a href="https://twitter.com/Ayush_Uniyal16" target='_blank' rel="noreferrer"><i className="ficons fa-brands fa-twitter"></i></a></h1>
                </div>
                <h3>© Ayush Uniyal. All rights reserved</h3>
            </footer>
        </>
    )
}

export default Footer