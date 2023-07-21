import React from 'react'
import { Element } from 'react-scroll'
import LinearProgress from '@material-ui/core/LinearProgress';
import './Skill.css'
const Skill = () => {
  return (
    <Element id="skill" className="Skills">
        <h1>Skills</h1>
        <div className='Skills__container'>
            <img src='https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBvcnRmb2xpbyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' alt="logo" />
            <div className='Skills__container__progress'>
            <h2>Skills</h2>
            <h3>Java</h3>
            <LinearProgress variant="determinate" className='Skills__container__progress1' /> 
            <h3>React Js</h3>
            <LinearProgress variant="determinate" className='Skills__container__progress2' />  
            <h3>Docker</h3>
            <LinearProgress variant="determinate" className='Skills__container__progress3' />
            <h3>Node Js</h3>
            <LinearProgress variant="determinate" className='Skills__container__progress4' />
            <h3>SpringBoot</h3>
            <LinearProgress variant="determinate" className='Skills__container__progress5' />
            </div>
        </div>
    </Element>
  )
}

export default Skill
