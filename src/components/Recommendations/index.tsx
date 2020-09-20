import React, { Component } from 'react';
import styled from 'styled-components';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const About = styled.div`
  width: 80vw;
  margin: 2.4rem auto;
  border: 1px solid var(--secondary);
  box-shadow: 10px 10px 40px rgba(255, 255, 255, 0.062);
  color: var(--secondary);
  transition: .5s all;
  &:hover {
    border: 1px solid var(--highlight);
    box-shadow: -20px -20px 50px rgba(255, 255, 255, 0.062);
    color: var(--highlight);
  }
  &>div {
    width: 100%;
  }
  & h2, p, small {
    margin: 1rem 2.4rem;
  }
  & p {
    font-size: 1rem;
    letter-spacing: 3px;
    color: var(--main-text-color);
  }
`

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
      <About>
        <Slider {...settings}>
          <div>
            <p>A Bruna mostrou proatividade, espírito de equipe e foco no resultado. Pude ter o prazer de trabalhar com a Bruna em uma transformação digital de uma ONG e em um lançamento premiado de uma startup. Além de suas habilidades técnicas, facilmente comprovadas via portifólio, a Bruna demonstrou ser uma pessoa muito valorosa na equipe.</p>
            <small>Gustavo Cesar</small>
          </div>
          <div>
            <p>Tive a sorte de trabalhar com a Bruna em um projeto, e logo fiquei surpreendido com a sua capacidade de transformar meus protótipos em produtos de fato. Rapidez, capacidade analítica de transformar o produto conforme o prazo, e segurança, são alguns de vários pontos que me chamaram a atenção. É uma profissional indispensável para o mercado e estou ansioso para trabalhar com ela novamente!</p>
            <small>William Vieira</small>
          </div>
          <div>
            <p>Ter a Bruna como programadora de um projeto é o sonho de qualquer designer de interfaces, porque suas habilidades são capazes de adequar 99% das sugestões passadas pelo designer, e quando algo não é possível ela informa de maneira objetiva e participa do processo de recriação da interface. Além de todas as habilidades técnicas, Bruna ainda possui uma entrega rápida de resultados, humildade e uma autogestão incrível. Espero ter outras oportunidades de trabalhar ao lado dela porque é uma pessoa incrível.</p>
            <small>Marianne Eugenio</small>
          </div>
        </Slider>
      </About>
    );
  }
}