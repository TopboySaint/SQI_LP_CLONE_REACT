import React from 'react'
import nidImg from '../images/college.jpg'
import pdcImg from '../images/prof.jpg'
import cpImg from '../images/certificate.jpg'
import Styles from '../css/Certification.module.css'

const Certification = () => {
  return (
    <>
    <div className={Styles.header}>
            <h2>
                Start here. Change the world.
            </h2>
        </div>
        <div className={Styles.pictures}>
            <div className={Styles.picture}>
                <img src={nidImg} alt="college bg" />
                <h3>National Innovative Diploma (NID)</h3>
                <p>The National Innovation Diploma (NID) offered at SQI College of ICT is a 2 year approved academic program of the National Board for Technical Education (NBTE).</p>
                <div className={Styles.header}><a href="">Learn more</a></div>
            </div>
            <div className={Styles.picture}>
                <img src={pdcImg} alt="prof bg" />
                <h3>Professional Diploma Certificate</h3>
                <p>The Professional Certificate Program is 1 year practical training with wide range of edge-cutting IT certification courses offered in SQI College of ICT to people who want to advance their career.</p>
                <div className={Styles.learn}><a href="">Learn more</a></div>
            </div>
            <div className={Styles.picture}>
                <img src={cpImg} alt="certficate bg" />
                <h3>Certificate Program</h3>
                <p>The Certificate Program is a short-term training, 2 weeks to 6 months with a wide range of edge-cutting IT certification courses offered in SQI College of ICT to people who want to advance their careers.</p>
                <div className={Styles.learn}><a href="">Learn more</a></div>
            </div>
        </div>
    </>
  )
}

export default Certification