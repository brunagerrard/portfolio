import React from 'react';

// import './about-styles.css';
import Recommendations from '../../components/Recommendations';
import Education from '../../components/Education';
import GoBackBtn from '../../components/GoBackBtn';

function About() {
  return (
    <>
    <GoBackBtn />
      <section>
        <h1 className="each-section-title">recomendações</h1>
        <Recommendations />
        <h1 className="each-section-title" style={{marginTop: 50}}>educação</h1>
        <Education />
      </section>
    </>
  )
}

export default About;