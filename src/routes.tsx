import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/work" exact component={Work} />
      <Route path="/contact" exact component={Contact} />
    </BrowserRouter>
  )
}

export default Routes;