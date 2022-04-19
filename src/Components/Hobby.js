import React from 'react';

// Styles
import styled from 'styled-components';
import { Container, SectionHeader, Hide, Description, Dot } from '../style/styles';

import { useScroll } from './useScroll';

// Animation 
import { motion } from 'framer-motion';
import { titleAnim, sectionFade, expand } from './animation';

const Hobby = () => {
  const [element, controls] = useScroll();

  return (
    <Container variants={sectionFade} animate={controls} initial="hidden" ref={element}>
      <SectionHeader>
        <Hide>
          <motion.h2 variants={titleAnim} className="h3">
            Hobby
          </motion.h2>
        </Hide>
      </SectionHeader>

      <HobDescription>
        <ul>
          <motion.li variants={expand}>
            <div className="flex">
              <div>
                <Dot></Dot>
              </div>
              <p className="parag">
                Travelled to 25 Nigerian states, witnessed diverse cultures, enjoyed several local dishes within the duration   of the travel.
              </p>
            </div>
          </motion.li>

          <motion.li variants={expand}>
            <div className="flex">
              <div>
                <Dot></Dot>
              </div>
              <p className="parag">
                Building and updating features of personal web development projects during free hours.
              </p>
            </div>
          </motion.li>
        </ul>
      </HobDescription>
    </Container>
  );
};

const HobDescription = styled(Description)`
  .flex {
    display: flex;
    align-items: baseline;
  }
`;

export default Hobby;