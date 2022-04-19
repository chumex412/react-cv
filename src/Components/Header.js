import React from 'react';

import { user } from './userData';
import logo from '../Zuri-logo.svg';
// Style
import styled from 'styled-components';
import { Hide } from '../style/styles';

// Animation 
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim, expand } from './animation';

const Header = () => {

  const fullName = `${user.lastName} ${user.firstName} ${user.otherNames}`;

  document.title = `${user.firstName}'s resume`;
  console.log(fullName);

  return (
    <StyledHeader  variants={pageAnimation} initial="hidden" animate="show">
      <Hide>
        <motion.h1 variants={titleAnim} className="h2">{fullName}</motion.h1>
      </Hide>
      <Hide>
        <motion.p variants={titleAnim} className="parag">
          <span>Tel no: {user.phone}.</span>&nbsp;
          <span>Email: {user.email}.</span>
        </motion.p>
      </Hide>
      <Hide>
        <motion.p variants={titleAnim} className="parag">
          {user.address}
        </motion.p>
      </Hide>
    </StyledHeader>
  )
};

const StyledHeader = styled(motion.header)`
  padding: 2rem 2rem;
  color: var(--secondary-color);
  background-color: var(--primary-color);
  text-align: center;

  h1 {
    text-transform: uppercase;
  }
`;

export default Header;