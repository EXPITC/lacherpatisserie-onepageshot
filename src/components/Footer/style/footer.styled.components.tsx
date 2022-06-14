import { motion } from 'framer-motion';
import styled from 'styled-components';
import { device } from '../../../global.styled.components';
const { laptop, tablet } = device;

// --footer-background: #fff7b2;
// --footer-text: #88694e;
// --footer-hover-background-color:
export const Copyright = styled(motion.span)`
  &:before {
    font-family: var(--button-font-family);
    font-size: 12px;
    font-weight: lighter;
    content: '© 2022 Lacher Malaysia Sdn Bhd (1412523-D)';
    color: var(--footer-text);
  }
`;

export const Container = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 80vw;
  @media ${laptop} {
    width: 75vw;
    align-items: center;
  }
  @media ${tablet} {
    width: 90vw;
  }
`;

export const ContentWrapper = styled(motion.div)<{
  col?: String;
  row?: String;
  content?: string;
  gap?: string;
}>`
  display: flex;
  ${({ col }) => (col ? 'flex-direction:column' : null)};
  @media ${tablet} {
    flex-direction: column;
    margin-bottom: 50px;
    ${({ row }) => (row ? 'flex-direction:row' : null)};
  }
  gap: ${({ gap }) => (gap ? gap : '10px')};
  ${({ content }) =>
    content
      ? `
  >a {
    margin:0;
    padding:0;
    color:var(--color-link);
    text-decoration: none;
    transition: 0.8s cubic-bezier(0.23, 1, 0.320, 1);
    &:hover {
      opacity: 0.6;
      color: var(--button-background-hover-color-lighten);
    }
    > p {
      margin:0;
      text-align: left;
      line-height: 22px;
      font-size: 15px;
      font-weight: lighter;
      word-spacing: 2px;
  }
  `
      : null}
`;

export const Content = styled.div<{ textMidTablet?: boolean }>`
  margin: 0 auto;
  min-width: 200px;
  @media ${laptop} {
    min-width: 175px;
  }
  @media ${tablet} {
    > p {
      ${({ textMidTablet }) => (textMidTablet ? 'text-align: center !important;' : null)}
    }
    width: 100%;
  }
  flex: 1 0;
  height: fit-content;
  color: var(--footer-text);
  /* width: 20px; */
  > h1 {
    font-size: var(--subheading-2-font-size);
    font-family: var(--heading-font-stack);
    font-weight: 500;
    letter-spacing: var(--header-letter-spacing);
    margin-bottom: 20px;
  }
  > p {
    text-align: left;
    line-height: 22px;
    font-size: 15px;
    font-weight: lighter;
    word-spacing: 4px;
  }
`;

export const Form = styled.form`
  @media ${tablet} {
    display: flex;
    justify-content: center;
  }
  margin-top: 20px;
  > input {
    background-color: var(--footer-background-color);
    height: 45px;
    width: 70%;
    border: 1.5px solid var(--border-color);
    @media ${tablet} {
      width: 180px;
    }
    :focus {
      outline: none;
      border: 1.5px solid var(--border-color-subtle-darken);
    }
    ::placeholder {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      text-align: left;
      padding: 50px 0 50px 10px;
      opacity: 0.5;
      color: var(--footer-text);
      font-size: 18px;
    }
  }
  > button {
    color: var(--footer-text);
    width: 20%;
    @media ${tablet} {
      padding-left: 20px;
      width: fit-content;
    }
    border: none;
    background: transparent;
    cursor: pointer;
    :hover {
      opacity: 0.6;
    }
  }
`;
