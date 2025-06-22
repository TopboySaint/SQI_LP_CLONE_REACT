import React from 'react'
import Styles from '../css/Whysqi.module.css'
import iconOne from '../images/111111.png'
import iconTwo from '../images/2222222.png'
import iconThree from '../images/3333333.png'
import iconFour from '../images/4444444.png'
import iconFive from '../images/5555555.png'
import iconSix from '../images/666666666.png'
import iconSeven from '../images/77777777.png'
import iconEight from '../images/88888888.png'
import Background from '../images/conference_image_15.jpg'

const Whysqi = () => {
  return (
    <>
    <div className={Styles.why}>
        <h2 className={Styles.hee}>Why study at SQI?</h2>
        <div className={Styles.whystudy}>    
        <div className={Styles.at}>
            <div className={Styles.reason}>
                <span><img src={iconOne} alt="icon" /></span>
                <h3 className={Styles.project}>Project Based Learning</h3>
                <p className={Styles.para}>Our courses are practical, hands-on learning. Practice and apply knowledge with real world projects that contribute largely to your portfolio.</p>
            </div>

            <div className={Styles.reason}>
                <span><img src={iconTwo} alt="icon" /></span>
                <h3 className={Styles.project}>Expert Instructors</h3>
                <p className={Styles.para}>Get to interact with different mentors and draw from their loads of experience.</p>
            </div>
            
            <div className={Styles.reason}>
                <span><img src={iconThree} alt="icon" /></span>
                <h3 className={Styles.project}>Physical & Virtual className</h3>
                <p className={Styles.para}>You can now choose physical className experience or online classNameroom and learn from anywhere in the world.</p>
            </div>

            <div className={Styles.reason}>
                <span><img src={iconFour} alt="icon" /></span>
                <h3 className={Styles.project}>Free access to our hub and community</h3>
                <p className={Styles.para}>OYou will have access to our fully functional hub for co-working and working on projects, assignments and even begin a start-up.</p>
            </div>

            <div className={Styles.reason}>
                <span><img src={iconFive} alt="icon" /></span>
                <h3 className={Styles.project}>Certification</h3>
                <p className={Styles.para}>Be certified by an accredited and globally recognized institution. SQI got its accreditation in Sept 2021 from the NBTE, Nigeria.</p>
            </div>

            <div className={Styles.reason}>
                <span><img src={iconSix} alt="icon" /></span>
                <h3 className={Styles.project}>Alumni Support</h3>
                <p className={Styles.para}>Our students have access to alumni who currently work at top tech organizations in the world such as Google, Microsoft, Interswitch etc.</p>
            </div>

            <div className={Styles.reason}>
            <span><img src={iconSeven} alt="icon" /></span>
                <h3 className={Styles.project}>Job Opportunity</h3>
                <p className={Styles.para}>78.5% of our students found secure employment within three months of graduation. Students leave from learning to getting job roles</p>
            </div>

            <div className={Styles.reason}>
                <span><img src={iconEight} alt="icon" /></span>
                <h3 className={Styles.project}>Access to study materials</h3>
                <p className={Styles.para}>Students have access to prerecorded videos and resources they can make use of to further solidify their knowledge.</p>
            </div>
        </div>
               <div className={Styles.sqi}>
                <img src={Background} alt="background" />
               </div>
        </div>
        </div>
    </>
  )
}

export default Whysqi