import { motion } from 'framer-motion';
import styled from 'styled-components';
import { device } from '../../../global.styled.components';
const { laptopM } = device;
// --header divide by two sector top & bottom

// one section on top header including logo and person & chart
export const WrapperTop = styled.div`
  display: flex;
  align-items: center;
  flex: 3;
  min-height: 80px;
  height: 80px;
  width: 100vw;
  justify-content: center;
  padding: 10px 0 11px 0;
  background-color: var(--header-background);
  z-index: 99;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  > a > img {
    width: 160px;
    position: relative;
    transition: var(--transition-default);
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }
  }
`;

// person & chart on the left
export const PersonChart = styled.div`
  position: absolute;
  right: 30px;

  & > * {
    transition: var(--transition-default);
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }
  }
  & a {
    margin-left: 15px;
    display: inline;
  }
  > a {
    color: inherit;
    text-decoration: none;
    > p {
      padding-left: 5px;
      display: inline;
    }
  }
  @media (max-width: 1010px) {
    font-size: 20px;
    > a > p,
    > :first-child {
      display: none;
    }
  }
`;

// list navigation at bottom
export const List = styled(motion.ul)<{ laptop?: String }>`
  flex: 1 0 auto;
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 0;

  > li {
    list-style: none;
    margin: 0 15px;

    @media ${laptopM} {
      width: fit-content;
      margin: 0 0.9vw;
    }
    @media (max-width: 1060px) {
      margin: 0 0.5vw;
    }
    @media (max-width: 1010px) {
      ${({ laptop }) => (laptop ? 'display: none;' : null)}
    }
    position: relative;
    border-left: 1px solid var(--active-link-color);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: start;
    > a,
    div {
      padding-right: 10px;
      text-decoration: none;
      padding: 0 5px 0 5px;
      color: var(--active-link-color);
      transition: var(--transition-default);
      > p {
        display: inline-block;
        padding-right: 10px;
        color: var(--active-link-color);
        :hover {
          opacity: 0.5;
        }
      }
    }
  }
`;

export const DropDown = styled(motion.ul)<{ textcenter?: String }>`
  position: absolute;
  z-index: 1;
  margin: 0px;
  padding: 0px;
  /* width: fit-content; */
  width: 110%;
  padding-top: 80px;
  padding-bottom: ${({ textcenter }) => (!!textcenter ? '0;' : '10px')};
  overflow: hidden;
  background-color: var(--sale-color);
  border: 0.8px solid var(--mobile-menu-border-color);
  > li {
    /* overflow-x: hidden; */
    margin: none;
    padding: none;
    list-style: none;
    ${({ textcenter }) =>
      !!textcenter
        ? `
    text-align: left;
    flex-direction: column;
    align-items: center;
    padding: 10px 4px 20px 4px;
    `
        : `
    padding: 15px 0 15px 20px;
    `};
    margin-right: 15px;
    margin-left: 15px;
    height: 30px;
    border-top: 0.4px solid var(--mobile-menu-border-color);
    cursor: pointer;
    :first-child {
      border-top: none;
    }
    > span {
      display: list-item;
      list-style-type: circle;
      ${({ textcenter }) => (!!textcenter ? `margin-left: 1.2em` : null)};
    }
    > * a {
      height: inherit;
      width: inherit;
      color: var(--active-link-color);
      transition: var(--transition-default);
      :hover {
        opacity: 0.5;
      }
    }
  }
`;

//-------------------mobile navigation
export const BarMobile = styled(motion.span)`
  position: absolute;
  left: 20px;
  top: 120px;
  z-index: 999;
  @media (max-width: 633px) {
    top: 140px;
  }
  @media (max-width: 411px) {
    top: 160px;
  }
  @media (max-width: 320px) {
    top: 180px;
  } ;
`;

export const NavMobile = styled.div`
  background-color: var(--mobile-menu-background);
  margin: 0;
  padding: 0;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-around;
  align-items: center;
  height: inherit;
  @media (min-width: 1011px) {
    display: none;
  }
`;

export const Panel = styled(motion.div)`
  background-color: var(--sale-color);
  flex: 1;
  max-width: 330px;
  opacity: 0;
  @media (max-width: 411px) {
    max-width: 220px;
  }

  > * {
    margin: 0;
    padding: 0;
  }
`;

export const ListNavMobile = styled(motion.ul)`
  /* height: 80vh; */
  padding-top: 40px;
  margin: 0;
  align-items: center;
  /* -------prefer to not use scroll on left  */
  /* -------if prefer to use scroll on left  */
  /* enable this */

  height: 90vh;
  /* overflow-x: hidden; */
  /* overflow-y: scroll; */
  & li {
    /* and this */
    position: sticky;
    padding: 0 5px 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid black;
    width: 280px;
    text-align: left;
    @media (max-width: 411px) {
      width: 170px;
    }
    height: 51px;
    border: none;
    border-bottom: 1px solid var(--color-scheme-dark-background);
    :first-child {
      display: flex;
      align-items: center;
      justify-content: center;
      > a {
        list-style-type: none;
      }
    }
    > a,
    p {
      /* 
      --header-font-stack: Garamond, Baskerville, Caslon, serif;
      --header-font-weight: 400;
      --header-font-style: italic;
      --header-font-transform: none;
      --header-letter-spacing: normal;
       */
      display: list-item;
      list-style: circle;
      font-weight: var(--header-font-weight);
      font-family: var(--header-font-stack);
      text-decoration: none;
      font-size: 20px;
      color: var(--active-link-color);
    }
  }
`;

export const DropLeft = styled(motion.ul)`
  background-color: var(--sale-color);
  top: 0;
  padding-top: 40px;
  height: 100vh;
  width: 330px;
  overflow: hidden;
  @media (max-width: 411px) {
    max-width: 220px;
  }
  position: fixed;
  & li {
    padding: 0 5px 0 30px;
    display: flex;
    align-items: center;
    width: 280px;
    @media (max-width: 411px) {
      width: 170px;
    }
    height: 50px;
    border: none;
    border-bottom: 1px solid var(--color-scheme-dark-background);
    :first-child {
      justify-content: center;
      > p {
        margin-left: 10px;
        list-style: none;
      }
      @media (max-width: 400px) {
        padding-top: 30px;
      }
    }
    > a,
    p {
      /*
      --header-font-stack: Garamond, Baskerville, Caslon, serif;
      --header-font-weight: 400;
      --header-font-style: italic;
      --header-font-transform: none;
      --header-letter-spacing: normal;
       */
      display: list-item;
      list-style: disc;
      font-weight: var(--header-font-weight);
      font-family: var(--header-font-stack);
      text-decoration: none;
      font-size: 20px;
      color: var(--active-link-color);
    }
  }
`;

export const Brand = styled(motion.div)`
  height: 70px;
  position: relative;
  bottom: 0px;
  min-width: 0px;
  max-width: 40vw;
  > div {
    width: inherit;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  & a {
    text-decoration: none;
    color: inherit;
    * > {
      font-size: 5px;
    }
  }
`;
