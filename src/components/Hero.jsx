import React from 'react'
import heroImg from '../images/bg-header-sqi-1.png'
import myStyle from '../css/Hero.module.css'


const Hero = () => {
  return (
    <>
    <section>
        <div className={myStyle.divs}>
            <div className={myStyle.study}>
                <h1>Study to become a global talent</h1>
                <p>Learn new tech skills using a world-className curriculum from top industry experts in an accredited institution.</p>
                <button>Start Now</button>
            </div>
            <div className={myStyle.study}>
                <img src={heroImg} alt="Background Image"/>
            </div>
        </div>
        </section>
    </>
  )
}

export default Hero