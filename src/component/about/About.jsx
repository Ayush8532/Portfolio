import React from 'react'
import './about.css'
import newim from '../../img/webd.png'

const About = () => {
  return (

    <>
<div className="contain">
    <h1 className='a-title'>About Me</h1>
    <div className='a-under'></div>
</div>
    <div className='a' id='about' >
      <div className="a-left">        
        <div className="a-card">
          <img src={newim} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <p className='a-sub'>Learn More About Me</p>
        <p className="a-desc">Hello, My name is Ayush Uniyal. I am an Engineering Student from Uttarakhand. Persuing "Computer Science and Engineering" from "Institute of Technology, Gopeshwar".I develop websites using ReactJS.I Am Very Interested In The Creative Field, Being A Developer & Designer Is One Of My Life Goals, and With A Talent In This Field, I Want To Always Learn New Things And Strengthen Every Process .If you are a business seeking a web presence or an employer looking to hire, you can get in touch with me here.</p>
        <button className='a-download'><a href="https://drive.google.com/file/d/1ZFm_fM-Z1X1WQBZ1jpBwXVYCjG2901sl/view?usp=sharing">Download CV</a></button>
      </div>
    </div>

    </>
  )
}

export default About