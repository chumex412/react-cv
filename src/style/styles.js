import styled from "styled-components";
// Animation 
import { motion } from 'framer-motion';


export const Container = styled(motion.section)`
  padding: 0;
`;

export const SectionHeader = styled.header`
  padding: 1rem;
  background-color: var(--primary-color, blue);
  color: var(--secondary-color, white);
  text-align: center;
  text-transform: uppercase;
`;

export const Description = styled.div`
  padding: 2rem 3rem;

  @media only screen and (max-width: 600px) {
    padding: 1rem 1.5rem;
  }
`;

export const Dot = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: var(--primary-color, blue);
  border-radius: 50%;
  margin-right: 1rem;

  @media only screen and (max-width: 600px) {
    width: 0.5rem;
    height: 0.5rem;
    margin-right: 0.5rem;
  }
`;

export const FlexedWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Hide = styled.div`
  overflow: hidden;
`;