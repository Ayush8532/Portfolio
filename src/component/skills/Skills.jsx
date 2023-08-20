import React from 'react'
import './skills.css'

const Skills = () => {
    return (
        <>
            <div className='skill' id='skills'>
                <div className="sl-texts">
                    <h1 className='sl-title'>Skills</h1>
                </div>
                <div className="s-under"></div>
                <div className='s-list'>
                    <div className='s'>
                        <i className="fa-brands fa-html5 s-icons"></i>
                        <h3 className='s-head'>HTML5</h3>

                    </div>
                    <div className='s'>
                        <i className="fa-brands fa-css3-alt s-icons"></i>
                        <h3 className='s-head'>CSS3</h3>
                    </div>
                    <div className='s'>
                        <i className="fa-brands fa-js s-icons"></i>
                        <h3 className='s-head'>JavaScript</h3>

                    </div>
                    <div className='s'>
                        <i className="fa-brands fa-react s-icons"></i>
                        <h3 className='s-head'>ReactJS</h3>

                    </div>
                    <div className='s'>
                        <i className="fa-solid fa-paintbrush s-icons"></i>
                        <h3 className='s-head'>UI/UX</h3>
                    </div>
                    <div className='s'>
                        <i className="fa-solid fa-c s-icons"><span className='s-span'>++</span></i>
                        
                    </div>
                </div>

            </div>


    </>
  )
}

export default Skills