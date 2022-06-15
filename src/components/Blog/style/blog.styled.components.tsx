import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../../../global.styled.components';
const { tablet, tabletS } = device;

export const Btn = styled(motion.a)`
  color: black;
  :hover {
    opacity: 0.6;
  }
`;
export const ViewAll = styled(motion.a)`
  color: var(--button-text-color);
  text-decoration: none;
  background-color: var(--color-scheme-light-text);
  padding: 12px 30px;
`;
export const BlogContent = styled(motion.div)`
  display: flex;
  margin-bottom: 30px;
  gap: 30px;

  @media ${tabletS} {
    flex-direction: column;
  }
  > div {
    width: 40vw;
    text-overflow: ellipsis;

    @media ${tablet} {
      width: 35vw;
    }
    @media ${tabletS} {
      width: 90vw;
    }
    a > img {
      width: inherit;
      height: 20vw;
    
      @media ${tabletS} {
        height: 45vw;
      }
    }
    > h4 {
      font-size: 15px;
      font-family: var(--subheading-font-stack);
      font-style: normal;
      font-weight: 400;
    }
    > p {
      text-align: left;
      width: 100%;
      height: 40px;
      margin-bottom: 15px;
      line-height: 20px;
      font-size: 15px;
      font-weight: lighter;
      word-spacing: 2px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

      @media ${tablet} {
        word-spacing: normal;
        height: 100px;
        -webkit-line-clamp: 5;
      }
      @media ${tabletS} {
        height: 40px;
        -webkit-line-clamp: 2;
        word-spacing: 2px;
      }
    }
  }
`;
