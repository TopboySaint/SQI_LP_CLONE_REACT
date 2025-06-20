import React from 'react'
import Styles from '../css/Alumni.module.css'
import googlePic from '../images/google (1).png'
import interPic from '../images/Interswitch.png'
import andelaPic from '../images/Andela-log-landscape-blue-400px (1).png'
import microPic from '../images/Microsoft_logo.png'
import payPic from '../images/Paystack.png'
import brewPic from '../images/brewery (1).png'
import wemaPic from '../images/Wema-Bank-Logo.png'
import clanPic from '../images/clan-logo (1).png'
import eddozPic from '../images/edozzier (1).png'
import moneyPic from '../images/moneymie (1).png'
import armyPic from '../images/Nigerian_Army (1).png'
import aellaPic from '../images/aella-credit.png'


const Alumni = () => {
  return (
    <>
       <section className={Styles.companies}>
        <div className={Styles.head}>
            <h3>Our alumni work at world-className <br /> companies around the world including</h3>
        </div>
        <div className={Styles.works}>
            <div className={Styles.alumni}>
                <img src={googlePic} alt="google" />
            </div>
            <div className={Styles.alumni}>
                <img src={interPic} alt="interswitch" />
            </div>
            <div className={Styles.alumni}>
                <img src={andelaPic} alt="andela" />
            </div>
            <div className={Styles.alumni}>
                <img src={microPic} alt="Microsoft_logo" />
            </div>
            <div className={Styles.alumni}>
                <img src={payPic} alt="Paystack" />
            </div>
            <div className={Styles.alumni}>
                <img src={brewPic} alt="brewery" />
            </div>
            <div className={Styles.alumni}>
                <img src={wemaPic} alt="Wema-Bank-Logo" />
            </div>
            <div className={Styles.alumni}>
                <img src={clanPic} alt="clan-logo" />
            </div>
            <div className={Styles.alumni}>
                <img src={eddozPic} alt="edozzier" />
            </div>
            <div className={Styles.alumni}>
                <img src={moneyPic} alt="moneymie" />
            </div>
            <div className={Styles.alumni}>
                <img src={armyPic} alt="Nigerian_Army" />
            </div>
            <div className={Styles.alumni}>
                <img src={aellaPic} alt="aella-credit card" />
            </div>
            </div>
        </section> 
    </>
  )
}

export default Alumni