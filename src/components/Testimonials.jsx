import React from 'react'
import Styles from '../css/Testimonials.module.css' 
import fullStar from '../images/fullstar.svg'
import halfStar from '../images/svgexport-2.svg'
import powerGoogle from '../images/powered_by_google_on_white.png'
import googlelogo from '../images/222.png'
import ibIcon from '../images/2021-07-31 (1).jpg'
import dimejiIcon from '../images/unnamed (4).png'
import seyiIcon from '../images/unnamed (3).png'

const Testimonials = () => {
  return (
    <>
        <section>
            <div className={Styles.testi}>
                <div className={Styles.monials}>
                    <h2>Testimonials</h2>
                    <p>Read what our current students and alumni have to say about their SQI <br /> experience.</p>
                </div>
                <div className={Styles.reviews}>
                    <div className={Styles.google}>
                        <img src={ibIcon} alt="ibadan-icon" className={Styles.ibd} />
                        <span className={Styles.ict}>SQI COllege of ICT IBADAN</span>
                        <div className={Styles.stars}>
                            <span className={Styles.rating}>4.9</span>
                            <img src={fullStar} alt="full-star" />
                            <img src={fullStar} alt="full-star" />
                            <img src={fullStar} alt="full-star" />
                            <img src={fullStar} alt="full-star" />
                            <img src={halfStar} alt="half-star" />
                            <span className={Styles.base}> Based on 84 reviews</span>
                            <div className={Styles.power}><img src={powerGoogle} alt="powered-by-google" /></div>
                            <div className={Styles.onG}><a href="#">review us on <img src={googlelogo} alt="googlelogo" /></a></div>
                        </div>
                    </div>
                    <div className={Styles.googlesim}>
                        <div className={Styles.displaypic}>
                            <img src={dimejiIcon} alt="display-pic" />
                        </div>
                        <span><a href="#">Oladimeji Sodeeq</a></span>
                        <div className={Styles.year}>3 years ago</div>
                        <div className={Styles.pic}>
                            <img src={fullStar} alt="full-star icon" />
                            <img src={fullStar} alt="full-star icon" />
                            <img src={fullStar} alt="full-star icon" />
                            <img src={fullStar} alt="full-star icon" />
                            <img src={fullStar} alt="full-star icon" />
                        </div>
                        <div className={Styles.scroll}>
                            <p>
                                SQI is one of the things I’m thankful for in my life. I’ve spent six months in SQI and I can say it’s one of the best moments in my life. The staffs are accommodating and very excellent at their job. The tutors don’t just teach, they mentor students. They make coding fun and understandable for learners. I’m able to achieve a lot enrolling with them. I’ve been able to build amazing web projects under their tutelage. ENROLL WITH SQI AND YOU WILL BE PROUD YOU DID.
                            </p>
                        </div>
                    </div>
                    <div className={Styles.googlesim}>
                        <div className={Styles.displaypic}>
                            <img src={seyiIcon} alt="display-pic" />
                        </div>
                        <span><a href="#">Oluwaseyi Odekomaya</a></span>
                        <div className={Styles.year}>3 years ago</div>
                        <div className={Styles.pic}>
                            <img src={fullStar} alt="full-star icon" />
                            <img src={fullStar} alt="full-star icon" />
                            <img src={fullStar} alt="full-star icon" />
                            <img src={fullStar} alt="full-star icon" />
                            <img src={fullStar} alt="full-star icon" />
                        </div>
            <div className={Styles.scroll}>
                <p>
                 I've compared other platforms to this one to be honest and they don't measure up. The platforms that give a comparable level of the quality of skills cost a lot more and don't even offer a guarantee of access to real world project and situations... The ones available at a cheaper price so to say do not give a level of quality even close to it... Some platforms charge a lot more and yet still falter in the delivery of good contents... Another aspect that I noticed in comparison is that instructors at SQI College of ICT are actually interested in ensuring their students understand what they are learning. They take joy in ensuring the students comprehend and are able to apply what is being taught and explain in the simplest ways possible to ensure maximum comprehension....I'm not sharing this because I have any affiliation with SQI College of ICT, I'm doing so because it's simply the truth. If anyone else tries to make their research, they will find out that it's true too.
                </p>
                </div>
                </div>
            </div>
        </div>
        </section>
       
    </>
  )
}

export default Testimonials