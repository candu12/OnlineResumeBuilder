import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import One from '../images/ImageOne.jpg';
import Two from '../images/ImageTwo.jpg';
import Three from '../images/ImageThree.jpg';



const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #131313;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);
  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;
  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }
  p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
  }
`;
const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 250px;
`;
const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  ${Image}:nth-child(1) {
    top: 10px;
    left: 10px;
  }
  ${Image}:nth-child(2) {
    top: 170px;
    right: 10px;
  }
  ${Image}:nth-child(3) {
    top: 350px;
    left: 50px;
  }
  
`;


const HomeDesign = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <Section>
      <Container>
        <ColumnLeft>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 2 }}
            transition={{ duration: 3}}
          >
            Welcome to Online Resume Builder
          </motion.h1>
          <motion.p
            variants={fadeLeft}
            initial='hidden'
            animate='visible'
            transition={{ duration: 3 }}
          >
            Journey towards resume you deserve!! :))
          </motion.p>
        </ColumnLeft>
        <ColumnRight>
        <Image src={One}alt='planet'
        whileTap={{ scale: 0.6 }}
        drag={true}
        dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 2 } }}></Image>
        

        <Image
            src={Two}
            alt='planet'
            whileTap={{ scale: 0.6 }}
            drag={true}
            dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 3 } }}
          ></Image>
          <Image
            src={Three}
            alt='planet'
            whileTap={{ scale: 0.8 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 2 } }}
          ></Image>
          </ColumnRight>
      </Container>
    </Section>
  );
};

export default HomeDesign;