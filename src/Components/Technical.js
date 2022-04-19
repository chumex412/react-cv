import React from 'react';

// Styles
import { Container, SectionHeader, Hide, Description, FlexedWrapper, Dot } from '../style/styles';

// Animation
import { motion } from 'framer-motion';
import { titleAnim, fade } from './animation';

const Technical = () => {

  return (
    <Container>
      <SectionHeader>
        <Hide>
          <motion.h2 variants={titleAnim} className="h3">
            Technical Skill
          </motion.h2>
        </Hide>
      </SectionHeader>

      <Description>
        <ul className="row">
          <motion.li variants={fade} className="col-3">
            <FlexedWrapper>
              <div>
                <Dot></Dot>
              </div>
              <p className="parag"><strong>Languages:</strong> HTML</p>
            </FlexedWrapper>
          </motion.li>
          <motion.li variants={fade} className="col-3">
            <FlexedWrapper>
              <div>
                <Dot></Dot>
              </div>
              <p className="parag"><strong>Scripting Languages:</strong> JavaScript</p>
            </FlexedWrapper>
          </motion.li>

          <motion.li variants={fade} className="col-3">
            <FlexedWrapper>
              <div>
                <Dot></Dot>
              </div>
              <p className="parag"><strong>Framework/Library:</strong> Bootstrap, React</p>
            </FlexedWrapper>
          </motion.li>

          <motion.li variants={fade} className="col-3">
            <FlexedWrapper>
              <div>
                <Dot></Dot>
              </div>
              <p className="parag"><strong>Others:</strong> CSS, SASS</p>
            </FlexedWrapper>
          </motion.li>
        </ul>
      </Description>
    </Container>
  );
};

export default Technical;