import React from 'react';

// Components
import Header from './Header';
import Main from './Main';

// Animation
import { motion } from 'framer-motion';
import { pageAnimation } from './animation';

const Resume = () => {

  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show">
      <Header />
      <Main />
    </motion.div>
  );
};

export default Resume;