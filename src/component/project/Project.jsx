import React from 'react'
import './project.css'

const Project = ({img,link,name}) => {
  return (
    <>
    <div className='p' >
      <img src={img} alt=""  className='p-img'/ >
      <div className='p-btn'>
        <div className="text"> 
          <a href={link} target='_blank' rel="noreferrer" className='btn'>{name}</a>
        </div>
      </div>

    </div>
    </>
  )
}

export default Project