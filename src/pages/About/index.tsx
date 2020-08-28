import React, { Component } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './about-styles.css';

export default class About extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <section className="about">
        <div className="my-slider">
          <small>aboutMe</small>
          <Slider {...settings} className="slider">
            <div>
              <h1>Hey, I'm Bruna</h1>
              <h1>A front-end developer.</h1>
            </div>
            <div>
              <h2>Academic background</h2>
            </div>
            <div>
              <h2>3</h2>
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}