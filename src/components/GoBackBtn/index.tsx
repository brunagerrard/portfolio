import React from 'react';
import styled from 'styled-components';
import { TiArrowBack } from 'react-icons/ti'
import { Link } from 'react-router-dom';

const GoBack = styled.button`
  border: none;
  background: none;
  margin: 15px 0 0 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.6rem;
  color: rgba(255, 255, 255, .8);
  transition: all .5s;

  &:hover {
    color: rgba(255, 255, 255, .6)
  }

  &:hover > span {
    opacity: 1;
    left: 50px;
  }
  `

const GoBackTxt = styled.span`
  opacity: 0;
  position: absolute;
  left: -5px;
  transition: all .5s;
  font-size: .8rem;
  `

export default function GoBackBtn() {
  return (
    <Link to="/" style={{display: "inline-flex"}}>
      <GoBack>
        <TiArrowBack className="go-back-arrow"/>
        <GoBackTxt>voltar</GoBackTxt>
      </GoBack>
    </Link>
  )
}