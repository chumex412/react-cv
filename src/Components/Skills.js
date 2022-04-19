import React from 'react';

// Styles
import { 
  Container, 
  Hide, 
  Description, 
  Dot, 
  FlexedWrapper, 
  SectionHeader,
} from '../style/styles';

// Animation
import { motion } from 'framer-motion';
import { titleAnim, fade } from './animation';

const Summary = () => {

  return (
    <Container>
      <SectionHeader>
        <Hide>
          <motion.h2 variants={titleAnim} className="h3">
            Key Skills
          </motion.h2>
        </Hide>
      </SectionHeader>
      
      <Description>
        <ul className="row">
          <motion.li variants={fade} className="col-2">
            <FlexedWrapper>
              <div>
                <Dot></Dot>
              </div>
              <p className="parag">Strong problem solving</p>              
            </FlexedWrapper>
          </motion.li>
          <motion.li variants={fade} className="col-2">
            <FlexedWrapper>
              <div>
                <Dot></Dot>
              </div>
              <p className="parag">Team player</p>
            </FlexedWrapper>
          </motion.li>
          <motion.li variants={fade} className="col-2">
            <FlexedWrapper>
              <div>
                <Dot></Dot>
              </div>
              <p className="parag">Good interpersonal skills</p>
            </FlexedWrapper>
          </motion.li>
          <motion.li variants={fade} className="col-2">
            <FlexedWrapper>
              <div>
                <Dot></Dot>
              </div>
              <p className="parag">Web development</p>
            </FlexedWrapper>    
          </motion.li>
          <motion.li variants={fade} className="col-2">
            <FlexedWrapper>
              <div>
                <Dot></Dot>
              </div>
              <p className="parag">Analytical thinking</p>
            </FlexedWrapper>
          </motion.li>
          <motion.li variants={fade} className="col-2">
            <FlexedWrapper>
              <div>
                <Dot></Dot>
              </div>
              <p className="parag">Effective communication</p>
            </FlexedWrapper>
          </motion.li>
          <motion.li variants={fade} className="col-2">
            <FlexedWrapper>
              <div>
                <Dot></Dot>
              </div>
              <p className="parag">Time Management</p>
            </FlexedWrapper>

          </motion.li>
        </ul>
      </Description>
    </Container>
  );
}

export default Summary;