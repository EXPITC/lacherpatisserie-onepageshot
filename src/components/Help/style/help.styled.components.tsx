import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const HelpBtn = styled.div`
  position: fixed;
  z-index: 99;
  height: 30px;
  width: 30px;
  background-color: var(--button-background-color);
  padding: 15px;
  overflow: hidden;
  bottom: 30px;
  right: 30px;
  border-radius: 50%;
  > img {
    background-color: transparent;
  }
  cursor: pointer;
`;

export const Panel = styled(motion.div)`
  /* position */
  bottom: 2vh;
  right: 20px;

  /* size */
  max-height: 96vh;
  max-width: 380px;
  height: 100%;
  width: 100%;
  border-radius: 7px;
  overflow: hidden;

  /* position */
  position: fixed;
  z-index: 999;

  background-color: #f4f6f8;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;

  @media (max-width: 412px) {
    max-width: 100%;
    right: 0;
    bottom: 0;
  }
`;
export const Header = styled.div`
  width: 100%;
  height: 8%;
  > div {
    background-color: #87694f;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    height: 60px;
    width: 90%;
    position: relative;
    z-index: 999;
    padding: 0 5% 0 5%;

    /* left div */
    > div {
      > * {
        cursor: pointer;
        color: #fff;
      }
      > :first-child {
        background-color: #fff;
        padding: 10px;
        border-radius: 50%;
        color: #87694f;
        font-size: 20px;
      }
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 120px;
    }

    /* right */
    > span {
      cursor: pointer;
      > div {
        display: flex;
        align-items: center;
        justify-content: center;
        > * {
          font-size: 20px !important;
          color: #fff;
        }
        > span {
          position: fixed;
          z-index: -1;
          border: none;
          margin: 0;
          padding: 0;
          background-color: #624e3d;
          border-radius: 50%;
        }
      }
      margin-bottom: 10px;
    }
  }
`;
export const PanelOption = styled(motion.div)`
  padding: 20% 5% 0 5%;

  width: 90%;
  height: 85%;
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;
`;

export const Wrapper = styled(motion.div)`
  position: sticky;
  /* height: fit-content; */
  height: 110%;
  > h1 {
    font-size: 16px;
  }
`;

// export const

export const BoxContent = styled(motion.div)`
  height: fit-content;
  display: flex;
  flex-flow: row wrap;
  flex-grow: 2 3 (4/2);
  justify-content: space-between;

  gap: 10px;
  @media (max-width: 412px) {
    gap: 10px;
  }
  > div {
    cursor: pointer;
    > div {
      border: 2px solid #ffff;
      background-color: #fff;
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      width: 160px;
      box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
      height: 80px;
      @media (max-width: 412px) {
        width: 42vw;
      }
      > p {
        width: fit-content;
        margin: 0;
        padding: 0;
        font-weight: lighter;
      }
      > span {
        margin: 0;
        padding: 0;
      }
    }
  }
`;

export const WordBullet = styled.p<{ color: String }>`
  margin: 0;
  border-radius: 30px;
  font-weight: normal !important;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color};
  font-size: 15px;
  text-align: center;
  height: 30px !important;
  width: 30px !important;
  border: none !important;
  color: black !important;
`;

export const ListContent = styled(motion.ul)`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  list-style-type: none;
  padding: 0 0 10% 0;
  margin: 0;

  > li {
    cursor: pointer;
    display: flex;
    width: 100%;
    > div {
      display: flex;
      width: inherit;
      gap: 10px;
      border-radius: 4px;
      background-color: #fff;
      box-shadow: 0 0 0 1px #3f3f440d, 0 1px 3px #3f3f4426;
      height: fit-content;
      width: calc(100% - 10px);
      padding: 10px 0 10px 10px;
      @media (max-width: 412px) {
        padding: 0px 10px 0 10px;
      }
      > span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 10%;
      }
      > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2px;
        width: calc(90%-10px);
        > p {
          text-align: left;
          width: fit-content;
          @media (max-width: 412px) {
            margin: 7px;
          }
        }
        > p:nth-child(2) {
          font-weight: lighter !important;
          font-size: 15px;
        }
      }
    }
  }
`;

export const Trigger = styled(motion.span)`
  width: fit-content;
  height: 30px;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 99;
  bottom: 15vh;
  padding: 5px;
  right: 30px;
  background-color: #ffff;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  >span{
    padding: 5px;
  }
  >:nth-child(2){
    font-size: 13px;
    padding-bottom: 15px;
    width: 20px;
  }
`