import { motion } from 'framer-motion';
import styled from 'styled-components';
import { device } from '../../../global.styled.components';
const { tablet, tabletS } = device;

export const ProductInfo = styled(motion.div)`
  position: relative;
  bottom: 200px;
  left: 5vw;
  width: fit-content;
  height: 150px;
  color: var(--color-scheme-accent-text);
  @media ${tabletS} {
    max-width: 600px;
    width: 100vw;
  }
  > p {
    margin: 0;
    text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
      1px 1px 1px rgba(0, 0, 0, 1), -3px 1px 1px rgba(32, 14, 9, 0.13);
  }
  > h1 {
    font-family: Madera;
    font-weight: lighter;
    font-style: italic;
    margin: 5px 0 10px 0;
    text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
      1px 1px 1px rgba(0, 0, 0, 1), -3px 1px 1px rgba(32, 14, 9, 0.13);
    @media ${tabletS} {
      margin: 15px 15px 15px 0px;
    }
  }
  a > button {
    position: relative;
    height: 50px;
    width: 50%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing: 1px;
    font-style: normal;
    color: var(--color-scheme-accent-text);
    background-color: var(--button-background-color);
    border: none;
    border-radius: 2px;
    text-overflow: clip;
    cursor: pointer;
  }
`;

export const MoreInfo = styled(motion.div)`
  background-color: var(--color-scheme-light-background);
  width: 100vw;
  height: fit-content;
  padding: none;
  margin: none;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transform: translateY(-20px);
  @media ${tablet} {
    height: 120px;
  }
  > li {
    padding: 15px;
    max-width: 250px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-wrap: normal;
    list-style: none;
    cursor: cursor;

    :nth-child(2) {
      border-left: 2px solid var(--slideshow-border-color);
      border-right: 2px solid var(--slideshow-border-color);
    }
    :nth-child(3) {
      border-right: 2px solid var(--slideshow-border-color);
    }
    @media ${tablet} {
      border-left: 2px solid var(--slideshow-border-color);
      border-right: 2px solid var(--slideshow-border-color);
      height: 50px;
      max-width: 50vw;
      width: 100%;
    }
    a > div {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      max-width: 150px;
      margin-left: 20px;
      text-overflow: clip;

      > h4 {
        font-size: 15px;
        font-weight: 600;
        margin: 0 0 5px 0;
      }
      > p {
        margin: 5px 0 0 0;
      }
    }
    > * {
      color: inherit;
      text-decoration: inherit;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;

      position: inherit;
    }
  }
`;
