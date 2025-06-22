import React from 'react'
import Styles from '../css/News.module.css'
import newsOne from '../images/commisioner-for-education-400x250.jpg'
import newsTwo from '../images/NID-admission-2023-2024-400x250.jpg'
import newsThree from '../images/sqijamb1-400x250.jpg'





const News = () => {
  return (
    <>
        <section className={Styles.newer}>
            <div className={Styles.smallboss}>
                <div className={Styles.smallnav}>
                    <h2>Latest News</h2>
                </div>
                <div className={Styles.smallnav}>
                    <button>Read More</button>
                </div>
            </div>

            <div className={Styles.bigboss}>
                <div className={Styles.biggie}>
                    <img src={newsOne} alt="news poster" />
                    <p className={Styles.utme}><a href="#">THE KEY NOTE ADDRESS DELIVERED BY THE HONOURABLE COMMISSIONER PROFESSOR ABDULWAHEED ADELABU</a></p>
                    <span id={Styles.span}><p>Jan 30, 2024</p></span>
                    <p>THE KEYNOTE ADDRESS DELIVERED BY THE HONOURABLE COMMISSIONER MINISTRY OF EDUCATION SCIENCE AND TECHNOLOGY, PROFESSOR ABDULWAHEED ADELABU ON THE OCCASION OF OPENING OF THE SQI AI AND ROBOTIC RESEARCH AND TRAINING AT HAIER THERMOCOOL BUILDING CHALLENGE ON 27TH JANUARY...</p>
                </div>

                <div className={Styles.biggie}>
                    <img src={newsTwo} alt="news poster" />
                    <p className={Styles.utme}><a href="#">APPLICATION FOR ALL PROGRAMS FOR THE 2023/2024 ACADEMIC SESSION IS NOW OPEN!</a></p>
                    <span id={Styles.span}><p>Jan 13, 2024</p></span>
                    <p>APPLICATION FOR ALL PROGRAMS FOR THE 2023/2024 ACADEMIC SESSION IS NOW OPEN!</p>
                    <p>We are pleased to let you know that the admission process for the 2023/2024 academic session has started. <br /> Intending candidates are to choose SOFTQUEST INCORPORATED (SQI) College of ICT as their first choice in their JAMB/UTME registration to be eligible.</p>
                </div>

                <div className={Styles.biggie}>
                    <img src={newsThree} alt="news poster" />
                    <p className={Styles.utme}><a href="#">SQI College of ICT Post-UTME Examination Date, and Change of Institution 2023</a></p>
                    <span id={Styles.span}><p>Jul 10, 2023</p></span>
                    <p>SQI College of ICT Post-UTME Examination Date, and Change of Institution We would like to inform you that the SQI Post-UTME Examination has been slated for July 29, 2023. This examination is a crucial step towards gaining admission into SQI College of ICT for the...</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default News