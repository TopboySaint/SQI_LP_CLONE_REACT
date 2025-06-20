import React from 'react'
import Styles from '../css/Courses.module.css'
import softPic from '../images/software-engineering-630x330-1 (1).webp'
import dataPic from '../images/DATA-SQI.jpg'
import proPic from '../images/product (1).jpg'
import digPic from '../images/digital-literacy (1).jpg'

const Courses = () => {
  return (
    <>
    <section>
        <div className={Styles.view}>
            <h2>Our Top Courses</h2>
            <p>Take a look at some of our popular courses</p>
            <span><a href="#">View all courses</a></span>
        </div>
        <div className={Styles.courses}>
            <div className={Styles.course}>
                <img src={softPic} alt="software engineering cover photo"/>
                <h3>Software Engineering</h3>
                <p>Software Engineering is one of the most in-demand jobs across the globe today.</p>
                <p>Software Engineers are also known as programmers, developers or coders. They are the ones behind all the apps and software you use today either on your phone or computer within your browser. Software such as banking apps, booking apps, mailing apps (e.g Gmail), Chat apps (e.g WhatsApp) and other Social apps (e.g Twitter, Facebook) and many more are created by software engineers.</p>
                <div className={Styles.more}><a href="#">Learn more</a></div>
            </div>
            <div className={Styles.course2}>
                <img src={dataPic} alt="data science cover photo"/>
                <h3>Data Science & Analysis</h3>
                <p>The eruption of data is transforming individuals and businesses. Companies either big or small are now expecting their business decisions to be based on data-led insight.</p>
                <p>Data specialists have a tremendous impact on business strategies and marketing tactics because everyone now depends on data to formulate improved strategies for the future of their companies.</p>
                <div className={Styles.more2}><a href="">Learn more</a></div>
            </div>
            <div className={Styles.course3}>
                <img src={proPic} alt="product design cover photo"/>
                <h3>UI/UX – Product Design</h3>
                <p>More than ever before individuals and businesses are relying on digital products and services. From online meeting tools to finance, from e-commerce platforms to healthcare and food apps. Making an intuitive digital product design is even more import at this time as it determines the overall experience of the users.</p>
                <p>Here, you’ll build your product design skill-set from the bottom up with lessons, mentorship sessions, and career advice from our design professionals.</p>
                <div className={Styles.more3}><a href="#">Learn more</a></div>
            </div>
            <div className={Styles.course4}>
                <img src={digPic} alt="digital literacy cover photo"/>
                <h3>Digital Literacy</h3>
                <p>This course is designed to prepare you for success in a modern world full of computers—not only the traditional computers such as desktop and notebook PCs but also computers that you interact with in other places too, like your bank’s ATM or your employer’s computerized cash register. In this course, you will learn about the technologies that drive our computerized society, including the Internet and local area networks (LANs).</p>
                <p>Taking this course will help you become a digitally literate person—that is, someone who understands how computer technology fits into our modern society and knows how to navigate a variety of computing environments.</p>
                <div className={Styles.more4}><a href="#">Learn more</a></div>
            </div>
        </div>
        </section>
    </>
  )
}

export default Courses