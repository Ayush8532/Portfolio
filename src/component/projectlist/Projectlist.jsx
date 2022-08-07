import React from 'react'
import './projectlist.css'
import Project from '../project/Project'
import {projects} from '../data'

const Projectlist = () => {
  return (
    <> 
    <div className='pl' id='gallery'>
        <div className="pl-texts">
            <h1 className='pl-title'>My Projects/Gallery</h1>
        </div>
         <div className="p-under"></div>
        <div className="pl-list">
          {projects.map((item)=>{
            return <Project key={item.id} img={item.img} link={item.link} name={item.name} />
          })}
        </div>
      
    </div>

    </>
  )
}

export default Projectlist