import styled from 'styled-components';

//animation
const { motion } = require('framer-motion');

export const CartWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
`;

export const CartStyle = styled(motion.div)`
  width: 30%;
  background: #f1f1f1;
  padding: 2rem 1rem;
  overflow-y: scroll;
  position: relative;

  @media screen and (max-width: 1024px) {
    width: 40%;
  }
  @media screen and (max-width: 480px) {
    width: 80%;
  }
`;

export const Card = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  overflow: hidden;
  background: white;
  padding: 2rem;
  margin: 2rem 0rem;
  img {
    width: 8rem;
  }

  @media screen and (max-width: 1024px) {
    padding: 1rem;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 6rem;
    }
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    img {
      width: 100%;
      margin-bottom: 0.8rem;
    }
  }
`;

export const CardInfo = styled(motion.div)`
  width: 50%;
  div {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 480px) {
    width: 80%;
  }
`;

export const EmptyStyle = styled(motion.div)`
  position: absolute;
  top: 0;

  transform: translate(-50%, 0%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  h1 {
    font-size: 1.2rem;
    padding: 0.8rem;
  }

  svg {
    font-size: 6rem;
    color: var(--secondary);
  }
`;

export const Checkout = styled(motion.div)`
  button {
    background: var(--primary);
    padding: 1rem 2rem;
    width: 100%;
    color: white;
    margin-top: 2rem;
    cursor: pointer;
    border: none;
  }
`;

export const Cards = styled(motion.div)``;
