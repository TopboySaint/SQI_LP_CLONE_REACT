import React from 'react'
import Styles from '../css/Certificate.module.css'

const Certificate = () => {
  return (
    <>
      <div className={Styles.enquire}>
        <div className={Styles.prog}>
          <h3><strong>NATIONAL DIPLOMA COURSES</strong></h3>
          <p><strong>Duration</strong>: 2 Years</p>
          <hr />
          <p><strong>Certificate:</strong> Both National Diploma and Professional Diploma.</p>
          <hr />
          <p><strong>Skills:</strong> Academic Institution recognized skills and In-demand professional skills.</p>
          <hr />
          <p><strong>Entry Requirements:</strong> 120 min in JAMB 5 Credits in O-Level, Your passion</p>
          <hr />     
          <p><strong>Required Hardware:</strong> (usually Laptop)</p>
          <hr />      
          <p><strong>Direct Entry:</strong> Yes (Any University)</p>
          <hr />      
          <p><strong>Access to Alumni Network and Opportunities:</strong> Yes.</p>
        </div>
        <div className={Styles.prog}>
          <h3><strong>PROFESSIONAL DIPLOMA COURSES</strong></h3>
          <p><strong>Duration</strong>: 1 Year Courses</p>
          <hr />
          <p><strong>Certificate:</strong> Professional Diploma</p>
          <hr />
          <p><strong>Skills:</strong> In-demand professional skills</p>
          <hr />
          <p><strong>Entry Requirements:</strong> Your passion</p>
          <hr />     
          <p><strong>Required Hardware:</strong> (usually Laptop)</p>
          <hr />      
          <p><strong>Direct Entry:</strong> Partially Yes (LAUTECH ODL)</p>
          <hr />      
          <p><strong>Access to Alumni Network and Opportunities:</strong> Yes.</p>
        </div>
        <div className={Styles.prog}>
          <h3><strong>CERTIFICATE PROGRAM</strong></h3>
          <p><strong>Duration:</strong> 2 weeks to 6 months</p>
          <hr />
          <p><strong>Certificate:</strong> Certificate Program</p>
          <hr />
          <p><strong>Skills:</strong> In-demand professional skills</p>
          <hr />
          <p><strong>Entry Requirements:</strong> Your passion</p>
          <hr />     
          <p><strong>Required Hardware:</strong> (usually Laptop)</p>
          <hr />      
          <p><strong>Direct Entry:</strong> No</p>
          <hr />      
          <p><strong>Access to Alumni Network and Opportunities:</strong> Yes.</p>
        </div>
      </div>
    </>
  )
}


export default Certificate