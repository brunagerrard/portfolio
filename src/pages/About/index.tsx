import React from 'react';

// import './about-styles.css';
import Recommendations from '../../components/Recommendations';
import { Link } from 'react-router-dom';
import Education from '../../components/Education';
import GoBackBtn from '../../components/GoBackBtn';

function About() {
  return (
    <>
    <GoBackBtn />
      <section>
        <h2>education</h2>
        <Education />
        
        <h2>recommendations</h2>
        <Recommendations />
      
        <Link to="/">home</Link>
      </section>
    </>
  )
}

export default About;