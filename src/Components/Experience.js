import React from 'react';

import { useScroll } from './useScroll';

// Styles
import styled from 'styled-components';
import { Container, SectionHeader, Hide, Description, FlexedWrapper, Dot } from '../style/styles';

// Animation 
import { motion } from 'framer-motion';
import { titleAnim, shrink, fade } from './animation';

const Experience = () => {
  const [element, controls] = useScroll();

  return (
    <Container variants={fade} animate={controls} initial="hidden" ref={element}>
      <SectionHeader>
        <Hide>
          <motion.h2 variants={titleAnim} className="h3">
            Work Experience
          </motion.h2>
        </Hide>
      </SectionHeader>

      <ExpDescription>
        <motion.div variants={shrink}>
          <header>
            <Hide>
              <h3 className="h4">
                Feed A Mole Game | March 2021 – April 2021.
              </h3>
              <h3 className="h4">
                Personal Project
              </h3>
            </Hide>
          </header>
          <p className="parag">
            Created a game where you feed moles using HTML, CSS and JavaScript logic.
          </p>
          <ul>
            <li>
              <FlexedWrapper>
                <div>
                  <Dot></Dot>
                </div>
                <p className="parag">Using higher order function and requestAnimationFrame, timed when each mole comes out to   feed, and when fed changed the state of each mole.</p>
              </FlexedWrapper>
            </li>

            <li>
              <FlexedWrapper>
                <div>
                  <Dot></Dot>
                </div>
                <p className="parag">Updated the javaScript logic from higher order functions to ES6 Class.</p>
              </FlexedWrapper>
            </li>
          </ul>
        </motion.div>
        <motion.div variants={shrink}>
          <header>
            <Hide>
              <h3 className="h4">
                HNG Intern | June 2020 – August 2020.
              </h3>
              <h3 className="h4">
                HNGi7 Internship
              </h3>
            </Hide>
          </header>
          <p className="parag">
            Formed a team of frontend developers where UI designs were transformed into webpages, and improved other skills necessary for the growth of frontend developers by brainstorming through real problems, their tangible solutions and working on real life projects during the 3 months fully remote internship.
          </p>
        </motion.div>

        <motion.div variants={shrink}>
          <header>
            <Hide>
              <h3 className="h4">
                Chemistry Teacher | April 2016 – April 2017.
              </h3>
              <h3 className="h4">
                Government Secondary School, Rimaye, Katsina.
              </h3>
            </Hide>
          </header>
          <p className="parag">Taught chemistry in a local secondary school for one year.</p>
          <ul>
            <li>
              <FlexedWrapper>
                <div>
                  <Dot></Dot>
                </div>
                <p className="parag">Prepared Lesson plan.</p>
              </FlexedWrapper>
            </li>
            <li>
              <FlexedWrapper>
                <div>
                  <Dot></Dot>
                </div>
                <p className="parag">Imparted knowledge using available teaching aid in a standard learning environment.</p>
              </FlexedWrapper>
            </li>
          </ul>
        </motion.div>
      </ExpDescription>
    </Container>
  );
};

const ExpDescription = styled(Description)`
  div:not(:first-child) {
    margin-top: 1.5rem;
  }

  div {
    ul {
      padding-left: 2rem;
      li {
        padding: 0.3rem 0
      }
    }
  }
`;

export default Experience;