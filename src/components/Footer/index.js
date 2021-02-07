import styled from 'styled-components';
import React from 'react';

const FooterWrapper = styled.footer`
  background-color: #00000070;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px; 
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer() {
  return (

    <FooterWrapper>
      <p>
        Orgulhosamente criado por
        {' '}
        <a href="https://www.instagram.com/eu.christopher_marques/" target="_blank">
          <span>Christopher Marques Corrêa</span>
        </a>
        {' '}
        e
        {' '}
        <a href="https://www.instagram.com/yumifortex/" target="_blank">
          <span>Yumi Fortes</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
