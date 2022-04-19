import React from 'react';

import { useScroll } from './useScroll';

// Style
import styled from 'styled-components';
import { Container, SectionHeader, Hide, Description, FlexedWrapper, Dot } from '../style/styles';

// Animation 
import { motion } from 'framer-motion';
import { titleAnim, fade, sectionFade } from './animation';

const Education = () => {
  const [element, controls] = useScroll();

  return (
    <Container variants={sectionFade} animate={controls} initial="hidden" ref={element}>
      <SectionHeader>
        <Hide>
          <motion.h2 variants={titleAnim} className="h3">
            Education
          </motion.h2>
        </Hide>
      </SectionHeader>

      <EduDescription>
        <ul>

          <motion.li  variants={fade}>
            <FlexedWrapper>
              <div>
                <Dot></Dot>
              </div>
              <p className="parag"><strong>FEDERAL UNIVERSITY OF TECHNOLOGY, MINNA, NIGER STATE</strong></p>
            </FlexedWrapper>
            <div className="sub">
              <p className="parag"><strong>BTech Biochemistry.</strong></p>
            </div>
          </motion.li>

          <motion.li variants={fade}>
            <FlexedWrapper>
              <div>
                <Dot></Dot>
              </div>
              <p className="parag"><strong>AUNTIE RAMATU COLLEGE, KATSINA</strong></p>
            </FlexedWrapper>
            <div className="sub">
              <p className="parag"><strong>SSCE.</strong></p>
            </div>
          </motion.li>
        </ul>
      </EduDescription>
    </Container>
  );
};

const EduDescription = styled(Description)`
  .sub {
    padding-left: 2rem;

    @media only screen and (max-width: 600px) {
      padding-left: 1rem; 
    }
  }
  
`;

export default Education;