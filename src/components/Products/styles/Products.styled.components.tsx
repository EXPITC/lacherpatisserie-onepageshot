import styled from 'styled-components';
import { Link as link } from 'react-router-dom';
import { device } from '../../../global.styled.components';
import { motion } from 'framer-motion';
const { tabletS, tablet, laptop, laptopM, mobileM } = device;
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
  @media (max-width: 910px) {
    grid-gap: 50px;
    max-width: 700px;
    width: 90vw;
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: row wrap;
  }
  @media ${tablet} {
    grid-gap: 25px;
  }
`;
export const GridItem = styled(motion.div)<{ products?: String }>`
  width: 250px;
  max-height: 500px;
  min-height: 250px;
  height: fit-content;
  font-size: 30px;
  text-align: center;
  ${({ products }) => (products ? 'border:1px solid orange;' : null)}
  border-radius: 4px;
  @media ${laptopM} {
    width: 200px;
  }
  @media (max-width: 910px) {
    min-height: fit-content;
    width: 250px;
  }
  @media ${tablet} {
    max-width: 250px;
    min-height: fit-content;
    ${({ products }) =>
      products
        ? 'null'
        : `
     max-height: 250px;
     height: 100vh;`}
    flex: 1 0 auto;
  }

  @media ${tabletS} {
    max-width: fit-content;
    width: 40vw;
    height: 45vw;
    ${({ products }) =>
      products
        ? 'null'
        : `
    width:35vw;
    height: 35vw;`}
  }
  & div {
    height: fit-content;
    height: ${({ products }) => (products ? '250px' : 'null')};
    @media ${tabletS} {
      width: 35vw;
      height: 35vw;
      /* padding-bottom: 2.5vw; */
    }
    & a {
      /* overflow: hidden; */
      display: block;
      height: fit-content;
      width: fit-content;
      text-decoration: none;

      /* layer monthly bestseller */
      & img {
        /* top: 0; */
        width: ${({ products }) => (products ? '95%' : '100%')};
        ${({ products }) =>
          products ? 'border: 1px solid var(--button-background-color)' : null};
        border-radius: 4px;
      }
      & p {
        color: var(--border-color-subtle-darken);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        height: 20%;
        margin-top: 0px;
        font-family: var(--button-font-family);
        font-size: var(--button-font-size);
        @media ${tabletS} {
          margin:0;
        }
        @media (max-width: 560px) {
          font-size: 3vw;
        }
      }

      /* layer top */
      & div {
        width: inherit;
        height: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        text-align: center;
        border-radius: 4px;
        @media ${laptopM} {
          max-width: 200px;
          width: 25vw;
        }
        @media (max-width: 910px) {
          max-width: unset;
          width: 250px;
        }
        @media ${tablet} {
          max-width: 250px;
          width: 100vw;
          height: fit-content;
        }
        @media ${tabletS} {
          width: 35vw;
          height: 35vw;
          padding-bottom: 2.5vw;
        }
        & h1 {
          max-width: 250px;
          width: 100%;
          position: absolute;
          z-index: 100;
          @media ${laptopM} {
            max-width: 200px;
            width: 100%;
          }
          @media (max-width: 910px) {
            max-width: 220px;
          }
          @media ${tabletS} {
            max-width: 200px;
            width: 100%;
          }
          @media (max-width: 560px) {
            max-width: unset;
            max-width: 35vw;
            width: 80vw;
            font-size: 5vw;
          }
        }
      }
    }

    ${({ products }) =>
      products ? 'border : 1px solid var(--button-background-color)' : null};
    border-radius: 4px;
    height: ${({ products }) => (products ? '300px' : 'null')};

    /* @media ${laptopM} {
      max-height: ${({ products }) => (products ? '310px' : 'null')};
      height: ${({ products }) => (products ? '100vh' : 'null')};
    } */
  }
  @media ${tablet} {
    min-height: ${({ products }) => (products ? '250px' : 'null')};
    max-height: ${({ products }) => (products ? '330px' : 'null')};
    height: ${({ products }) => (products ? '100%' : 'null')};
  }
  @media ${tabletS} {
    min-height: ${({ products }) => (products ? 'unset' : 'null')};
    max-height: ${({ products }) => (products ? '50vw' : 'null')};
    height: ${({ products }) => (products ? '50vw' : 'null')};
  }

  * {
    :first-child {
      padding: 0;
    }
    ${({ products }) => (products ? 'margin : 5px' : null)}
  }
`;
