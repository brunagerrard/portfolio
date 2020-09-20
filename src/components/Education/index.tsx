import React from 'react';
import styled from 'styled-components';

const Formacao = styled.div`
  margin: 1.8rem auto;
  background-color: var(--highlight);
  padding: 1rem;
  transition: all .3s ease-out;

  & * {
    margin-bottom: .6rem;
  }

  & h3 {
    margin-bottom: 1.8rem;
    text-transform: uppercase;
    text-align: center;
  }

  & h4 {
    font: var(--subtitles);
    font-size: 1.4rem;
    color: var(--dark-text-color);
  }

  & p {
    font-size: 1rem;
  }

  &:hover, :focus, :active {
    transform: translateY(-10px);
    box-shadow: 15px 15px 50px rgba(255, 255, 255, .2)
  }
`

function Education() {
  return (
    <Formacao>
      <h3>academia</h3>
      <h4>MBA: Desenvolvimento Full Stack (2021, IGTI)</h4>
      <p>Pós-graduação em andamento. O conteúdo do curso inclui disciplinas de Design Thinking, Desenvolvimento Avançado em JS, Arquitetura JS, Autenticação e Autorização em Soluções Web, DevOps, Desenvolvimento de APIs, Programação Reativa e Persistência e Pesquisa de Dados.</p>
      <h4>Artes Cênicas (2016, UFBA)</h4>
      <p>Bacharelado em Interpretação Teatral.</p>
      <br/><br/>
      <h3>cursos livres</h3>
      <h4>Desenvolvimento Front End (2020, Gama Academy)</h4>
      <p>HTML, CSS, Bootstrap, Git, JavaScript, React.</p>
    </Formacao>
  )
}

export default Education;