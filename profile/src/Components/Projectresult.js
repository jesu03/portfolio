import React, { useState } from 'react'
import './Projectresult.css'
const Projectresult = ({image,title,desc}) => {
  const[show,setShow] = useState(false);
  return (
    <div className='projectresult' onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
      {
      show ? (
        <div>
          <h2> {title}</h2>
         <p> {desc}</p>
        </div>
         
      ) : (
          <img src={image} alt="log" />
      )}
    </div>
  );
};

export default Projectresult
