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
        <p className='a-sub'><b>Learn More About Me</b></p>
        <p className="a-desc">Hello! My name is Ayush Uniyal, and I'm from the beautiful state  Uttarakhand. I did my "Computer Science and Engineering" from the prestigious Institute of Technology, Gopeshwar.I am passionate about crafting web experiences that are not only functional but also visually appealing. <b>My journey as a developer has led me to specialize in creating dynamic and responsive websites using the power of ReactJS.</b> I enjoy the challenges and creativity that come with building modern web applications.In addition to coding, I am drawn to the world of design.<b> I aspire to be a developer and designer, combining technical expertise with a keen eye for aesthetics.</b>. It's my goal to continuously learn and adapt to new trends and technologies in both realms.Whether you're a business looking to establish a strong web presence or an employer seeking a dedicated developer, I'd love to hear from you!</p>
        <button className='a-download'><a href="https://drive.google.com/file/d/18DbuB1ZSN8M6-PaMmdX0DZJ_R1qRENwT/view?pli=1">Download CV</a></button>
      </div>
    </div>

    </>
  )
}

export default About