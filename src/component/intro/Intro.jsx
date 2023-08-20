import React from 'react'
import './intro.css'
import Me from '../../img/resumeimg.png'


const Intro = () => {
    return (
        <>
            <div className="i" id='intro'>
                <div className="i-left">
                    <div className="i-left-wrapper">
                        <h2 className='i-intro'>Hi, I'am</h2>
                        <h1 className='i-name'>Ayush Uniyal</h1>
                        <div className="i-title">
                            <span className='title_type'>Web Developer</span>
                        </div>
                        <p className="i-desc">
                            I'm A Web Developer / Designer Based in Dehradun, Uttarakhand. I Have A Passion For Web Development And Love To Create For Web.
                        </p>
                    </div>
                </div>
                <div className="i-right">
                    <div className='i-bg'></div>
                    <img src={Me} alt="" className="i-img" />
                </div>
            </div>
            <div className='i-icons'>
                <h1><a href="https://www.instagram.com/_ayush__uniyal/" target='_blank' rel="noreferrer"><i className="fa-brands fa-instagram icons"></i></a></h1>
                <h1> <a href="https://github.com/Ayush8532" target='_blank' rel="noreferrer"><i className=" icons fa-brands fa-github"></i></a></h1>
                <h1><a href="https://www.linkedin.com/in/ayush-uniyal-682347208/" target='_blank' rel="noreferrer"><i className="icons fa-brands fa-linkedin"></i></a></h1>
                <h1><a href="https://twitter.com/Ayush_Uniyal16" target='_blank' rel="noreferrer"><i className="icons fa-brands fa-twitter"></i></a></h1>
            </div>

        </>
    )
}

export default Intro