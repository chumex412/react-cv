import React from 'react';
import styled from 'styled-components';

// Components
import Skills from './Skills';
import Summary from './Summary';
import Technical from './Technical';
import Experience from './Experience';
import Education from './Education';
import Hobby from './Hobby';

const Main = () => {

  return (
    <StyledMain>
      <Summary />
      <Skills />
      <Technical />
      <Experience />
      <Education />
      <Hobby />
    </StyledMain>
  );
};

const StyledMain = styled.main`
  width: 100%;
  max-width: 85%;
  margin: 0 auto;
  padding: 2rem 0;
  position: relative;
  border-bottom: 0.3rem solid var(--primary-color, blue);

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0.3rem;
    background-color: var(--primary-color, blue);
  } 
  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 0.3rem;
    background-color: var(--primary-color, blue);
  }

  ul {
    list-style: none;

    li {
      padding: 1rem 0;
    }
  }

  @media only screen and (max-width: 600px) {
    max-width: 95%;
  }
`;

export default Main;