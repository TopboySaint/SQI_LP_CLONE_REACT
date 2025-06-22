import React from 'react'
import Styles from '../css/Footer.module.css'
import mediasocial from '../images/mediasocial.png'

const Footer = () => {
  return (
    <>
       <section className={Styles.locateus}>
            <div className={Styles.location}>
                <h3>Hello, we’re SQI College of ICT</h3>
                <h4>We provide and lead others in quality ICT education.</h4>
                <img src={mediasocial} alt="mediasocial" className={Styles.mediasocial}/>
                <h4>Send us a mail</h4>
                <p className={Styles.enquiry}><a href="#">enquiry@edu.sqi.ng</a></p>
            </div>

            <div className={Styles.location}>
                <h6>Quick Links</h6>
                <span className={Styles.links}>
                    <a href="#">Application Portal</a>
                    <a href="#">Student Portal</a>
                    <a href="#">Professional Courses</a>
                    <a href="#">NID Courses</a>
                    <a href="#">Campus Info</a>
                    <a href="#">Accomodation</a>
                    <a href="#">SQI Scholarship</a>
                    <a href="#">Donate</a>
                </span>
            </div>

            <div className={Styles.location}>
                <h6>Ogbomoso</h6>
                <p>Old Ilorin Road, Opposite Yoaco Filling Station, Yoaco, Ogbomoso.</p>
                <p className={Styles.trong}>0906 281 9991, 0906 281 9993</p>
                <p><a href="#">Locate on the map</a></p>
            </div>

            <div className={Styles.location}>
                <h6>Ibadan</h6>
                <p>First Floor, H25 Heritage Mall, Opposite Central Bank of Nigeria, Dugbe, Ibadan.</p>
                <p className={Styles.trong}>0906 281 9992</p>
                <p><a href="#">Locate on the map</a></p>

                <p className={Styles.top}>Christianah Oyinade Ajoke House, beside First Bank, Arisekola Central Mosque, Opposite Jaiz bank, Idi Ape, Iwo road, Ibadan.</p>
                <p className={Styles.trong}>0906 281 9995</p>
                <p><a href="#">Locate on the map</a></p>

                <p className={Styles.top}>Haier Thermocool Building, opposite SAO filling station, Challenge, Ibadan, Oyo State.</p>
                <p className={Styles.trong}>0906 281 9994</p>
                <p><a href="#">Locate on the map</a></p>
            </div>

            <div className={Styles.location}>
                <h6>Abeokuta</h6>
                <p>First floor, OPIC Tower building, Okeilewo, Abeokuta.</p>
                <p className={Styles.trong}>0906 281 9996</p>
                <p><a href="#">Locate on the map</a></p>
            </div>
        </section>
       <footer>
            <span>Copyright © 2024 | SQI ICT Consultants. All Rights Reserved.</span>
       </footer> 
    </>
  )
}

export default Footer