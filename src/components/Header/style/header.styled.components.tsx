import { motion } from 'framer-motion';
import styled from 'styled-components';
// --header divide by two sector top & bottom

// one section on top header including logo and person & chart
export const WrapperTop = styled.div`
  display: flex;
  align-items: center;
  flex: 3;
  width: 100vw;
  justify-content: center;
  padding: 10px 0 10px 0;
  background-color: var(--header-background);
  z-index: 999;
  /* border: 1px solid black; */
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
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
export const List = styled.ul`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 0;
  @media (min-width:190px) {
    width: 90vw;
  }
  > li {
    list-style: none;
    border:1px solid blue;
    margin:0 15px 0 15px;
    height: 80%;
    /* border:1px solid blue; */
    position: relative;
    border-left: 1px solid var(--active-link-color);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: start;
    > a , div {
      padding-right: 10px;
      text-decoration: none;
      padding: 0 5px 0 5px;
      color: var(--active-link-color);
      transition: var(--transition-default);
      > p {
        transition: var(--transition-default);
        display: inline;
        padding-right: 10px;
        color: var(--active-link-color);
        :hover {
          opacity: 0.5;
      }
      }
    }
  }
`;

export const DropDown = styled(motion.ul)`
  position: absolute;
  margin: 0px;
  padding: 0px;
  width: fit-content;
  padding-top: 40px;
  padding-bottom: 15px;
  background-color: var(--sale-color);
  width: 110%;
  border: 0.8px solid var(--mobile-menu-border-color);
  > li {
    margin: none;
    padding: none;
    display: flex;
    align-items: center;
    padding: 15px 0 15px 10px;
    height: 30px;
    border-top: 0.4px solid var(--mobile-menu-border-color);
    :first-child{
      border-top: none;
    }
    list-style: none;
    cursor: pointer;
    > a {
      height: inherit;
      width: inherit;
      color: var(--active-link-color);
      transition: var(--transition-default);
      :hover{
        opacity: 0.5;
      }
    }
  }
`