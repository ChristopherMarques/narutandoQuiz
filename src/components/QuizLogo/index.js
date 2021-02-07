import styled, { keyframes } from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';
import Image from 'next/image';

const strokeAnimation = keyframes`
      0%{
        stroke-dasharray: 500;
        stroke-dashoffset: 500;
        fill-opacity: 0;
      },
      100%{
        stroke-dashoffset: 0;
        stroke-width: 0;
        fill-opacity: 1;
      }
`;

const Path = styled.path`
    animation: ${strokeAnimation} 10s ease-in-out forwards; 
    -webkit-animation: ${strokeAnimation} 10s ease-in-out forwards; 
`;
function Logo({ className }) {
  return (
    <Link href="/">
      <Image
        className={className}
        src="https://i.ibb.co/znzKWVX/logo.png"
        width={160}
        height={100}
      />
    </Link>

  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
margin-left: auto;
display: block;
@media screen and (max-width: 500px) {
  margin: 0;
}
`;

export default QuizLogo;
