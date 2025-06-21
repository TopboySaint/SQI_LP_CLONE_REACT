import React from 'react'
import Styles from '../css/Tour.module.css'


const Tour = () => {
  return (
    <>
        <section className={Styles.apply}>
            <div className={Styles.background}>
                <div className={Styles.flex}>
                    <div className={Styles.tour}>   
                        <iframe width="396" height="223" src="https://www.youtube.com/embed/HgC6bjMbqpw" title="Campus Tour | SQI College of ICT, Ibadan" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className={Styles.videoS} />
                    </div>
                    <div className={Styles.tour}>
                        <h2>Take a Tour</h2>
                        <p>Our campus is a living centre for innovation and creativity for sustainability. We love showing students our campus and allowing them to see, hear and feel the excitement that comes with being part of the Central community which is an atmosphere that is open-minded, always exciting, and filled with academic excellence.</p>
                        <button className="rounded-pill p-3 btn"><a href="#">Apply Now</a></button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Tour