import React from 'react';
import CommonSection from '../shared/CommonSection';
import Newsletter from '../shared/Newsletter';
import "../styles/about.css";

const About = () => {
  return (
    <>
       <CommonSection title = {"About"} />

        <div className='about-container'>
        <p className="about-text">
          Welcome to our Tour & Travels App! We aim to provide the best tour
          experiences with our handpicked destinations and exceptional service.
          Our team is dedicated to ensuring you have a memorable and enjoyable
          journey. Feel free to explore our exciting tour packages and embark on
          an adventure of a lifetime with us.
        </p>
        </div>

        <Newsletter />

    </>
  )
}

export default About;