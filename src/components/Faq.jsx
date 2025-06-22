import React from 'react'
import Styles from '../css/Faq.module.css'

const Faq = () => {
  return (
    <>
        <section className={Styles.new}>
            <div className={Styles.newboss}>
                <div className={Styles.newt}>
                    <h4>FAQ</h4>
                    <h2>Frequently Asked Questions</h2>
                    <a href="#">Contact Us</a>
                </div>

                <div className={Styles.newtt}>
                    <a href="#">How do I get into the college</a>
                    <a href="#">How much is the tuition?</a> 
                    <a href="#">Are your classNamees physical or virtual</a> 
                    <a href="#">Will I get a job after my training?</a>
                </div>
            </div>
        </section>
        <section className={Styles.newest}>
            <h4>IT’S TIME FOR YOU TO TAKE YOUR TECH CAREER TO THE NEXT LEVEL</h4>
            <h2>Ready to Get Started?</h2>
            <p>We provide and lead others in quality education, service, industry, and <br /> character as well as discipline.</p>
            <button>Join Us Today</button>
        </section>
    </>
  )
}

export default Faq