import styled from 'styled-components';
import { Link as link } from 'react-router-dom';
import { device } from '../../../global.styled.components';
import { motion } from 'framer-motion';
const {tabletS, tablet, laptop, laptopM } = device;
export const Link = styled(link)`
  color: inherit;
  text-decoration: inherit;
`;
export const GridContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: auto auto auto auto;
  max-width: 1250px;
  justify-content: center;
  grid-gap: 50px;
  padding: 10px;
  @media ${laptop} {
    grid-gap: 25px;
  }
  @media ${tablet} {
    max-width: 700px;
    width: 90vw;
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: row wrap;
  }
`;

export const GridItem = styled(motion.div)<{ products?: boolean }>`
  width: 250px;
  max-height: 500px;
  min-height: 250px;
  height: fit-content;
  font-size: 30px;
  text-align: center;
  /* overflow: hidden; */
  ${({products})=> products ? 'border:1px solid orange;' : null }
  border-radius: 4px;
  @media ${laptopM} {
    width: 200px;
  }
  @media ${laptop} {
    width: 150px;
    min-height: 150px;
  }
  @media ${tablet} {
    max-width: 250px;
    width: 100vw;
    ${({products})=> products? 'null' : `
    max-height: 250px;
    height: 100vh;`}
    /* second variant */
    flex: 1 0 auto;
  }
  @media ${tabletS} {
      width: 30vw;
      /* overflow: hidden !important; */
  }
  & div {
    ${({ products }) =>
    products ? 'border : 1px solid var(--button-background-color)' : null};
    border-radius: 4px;
    height: ${({ products }) => (products ? '350px' : 'null')};

    @media ${laptopM} {
      height: ${({ products }) => (products ? '300px' : 'null')};
    }
    @media ${laptop} {
      height: ${({ products }) => (products ? '250px' : 'null')};
    }
    @media ${tablet} {
      max-height: ${({ products }) => (products ? '350px !important' : 'null')};
      height: ${({ products }) => (products ? '100%' : 'null')};
      
    }
    @media ${tabletS} {
        ${({ products }) => (products ? 'height: 38vw' : null)};
        ${({ products }) => (products ? 'margin-bottom: 50px;' : null)};
    }

    >h1 {
      position: absolute;
      z-index: 999;
    }
  }
  * {
    :first-child {
      /* display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center; */
      padding: 0;
      /* margin: 5px; */
      /* border: 1px solid blue; */
    }
    ${({ products }) => (products ? 'margin : 5px' : null)}
  }
  * > img {
    top: 0;
    width: ${({ products }) => products ? '95%': '100%'};
    ${({ products }) =>
      products ? 'border: 1px solid var(--button-background-color)' : null};
    border-radius: 4px;
  }
  * > p {
    ${({ products }) => (products ? 'margin-top: 20px' : null)};
    font-family: var(--button-font-family);
    font-size: var(--button-font-size);
    @media ${tabletS} {
        margin: 0;
    }
  }
`;
