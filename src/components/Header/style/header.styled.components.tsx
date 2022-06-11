import { motion } from 'framer-motion';
import styled from 'styled-components';
import { device } from '../../../global.styled.components';
const { laptopM, laptop } = device;
// --header divide by two sector top & bottom

// one section on top header including logo and person & chart
export const WrapperTop = styled.div`
  display: flex;
  align-items: center;
  flex: 3;
  height: 80px;
  width: 100vw;
  justify-content: center;
  padding: 10px 0 10px 0;
  background-color: var(--header-background);
  z-index: 999;
  /* border: 1px solid black; */
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  > img {
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
  right: 25px;
  & > * {
    transition: var(--transition-default);
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }
  }

  & div {
    margin-left: 15px;
    display: inline;
  }
  & p {
    padding-left: 5px;
    display: inline;
  }
`;

// list navigation at bottom
export const List = styled(motion.ul)`
  /* flex: 1; */
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 0;
  /* @media ${laptopM} {
  } */
  > li {
    list-style: none;
    margin: 0 15px;

    @media ${laptopM} {
      width: fit-content;
      margin: 0 0.9vw;
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
