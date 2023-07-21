import React from 'react'
import './Project.css'
import { Element } from 'react-scroll'
import Projectresult from './Projectresult'
const Project = () => {
  const arr = [
    {
      image : "https://i.redd.it/ebz3iot78se41.jpg",
      title: "Google",
      //desc : "The project is a comprehensive software solution designed to streamline business operations and increase productivity."
    },
    {
      image : "https://plus.unsplash.com/premium_photo-1682109363052-99a90ece1e10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title: "Google",
     //desc : "The project is a comprehensive software solution designed to streamline business operations and increase productivity."
    },
    {
      image : "https://plus.unsplash.com/premium_photo-1682109363052-99a90ece1e10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title: "Google",
      //desc : "The project is a comprehensive software solution designed to streamline business operations and increase productivity."
    },
    {
      image : "https://plus.unsplash.com/premium_photo-1682109363052-99a90ece1e10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title: "Google",
      //desc : "The project is a comprehensive software solution designed to streamline business operations and increase productivity."

    },
    {
      image : "https://plus.unsplash.com/premium_photo-1682109363052-99a90ece1e10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title: "Google",
      //desc : "The project is a comprehensive software solution designed to streamline business operations and increase productivity."
    },
    {
      image : "https://plus.unsplash.com/premium_photo-1682109363052-99a90ece1e10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title: "Google",
      //desc : "The project is a comprehensive software solution designed to streamline business operations and increase productivity."
    }
  ]
  return (
    <Element id="project" className="project"> 
      <h1>Projects</h1>
      <div className='project__img'>
       {
        arr.map((first,index) =>{
          return(
            <Projectresult key={index} image={first.image} title={first.title}  desc={first.desc} />
        );
        })}
      </div>
      
    </Element>
  )
}

export default Project
