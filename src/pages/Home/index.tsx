import React from 'react';
import { Link } from 'react-router-dom';

import './home-styles.css';

function Home() {
  return (
    <div className="homepage">
      <nav>
        <Link to="/about">about</Link>
        <Link to="/work">work</Link>
        <Link to="/contact">contact</Link>
      </nav>
      <span className="bg">
      </span>
    </div>
  )
}

export default Home;