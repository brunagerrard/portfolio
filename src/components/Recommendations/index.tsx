import React, { Component } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './rec-styles.css';

export default class Recommendations extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 5000,
      cssEase: "ease"
    };

    return (
      <div className="about">
        <Slider {...settings}>
          <div>
            <p>Working alongside Bruna is every UI designer's dream because her skills can meet 99% of a designer's requirements, and when something isn't achievable for her, she lets us know and engages in the process of redesigning. Besides her technical skills, Bruna delivers results fast, is humble and amazingly self-managed. I look forward to working with her again in the future because she's an incredible person.</p>
            <small>Marianne Eugenio</small>
          </div>
          <div>
            <p>A raw talent waiting to be polished. I had the chance to work with Bruna for nearly a year while in charge of the sales team, and I noticed in her fundamental qualities in a modern professional. She's a studious and disciplined doer. After a few months working together, I promoted Bruna, giving her more responsibilities to take in, and was surprised by her dilligence in carrying out the tasks and interest in pursuing new knowledge. Even with a more introspective social profile she performs well in customer relations thanks to her communication and creativity skills - something I discovered over time when Bruna started producing amazing written content for our company's clients.</p>
            <small>Guto Belchior</small>
          </div>
          <div>
            <p>Bruna is a dedicated worker who's focused on problem-solving and performing well. One of her main qualities is her professional and resolutive posture even in face of unfavorable situations. It's someone who, given the opportunity, adds a lot to the team and the organization as a whole.</p>
            <small>Henrique Vitta</small>
          </div>
        </Slider>
      </div>
    );
  }
}