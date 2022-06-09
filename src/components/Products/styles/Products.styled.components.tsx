import styled from 'styled-components';
import { Link as link } from 'react-router-dom';

export const Link = styled(link)`
  color: inherit;
  text-decoration: inherit;
`;
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  /* max-width: 1250px; */
  border: 1px solid green;
  justify-content: center;
  grid-gap: 2vw;
  padding: 10px;
`;

export const GridItem = styled.div<{products?:boolean}>`
  width: 250px;
  max-height: 500px;
  min-height: 250px;
  height: fit-content;
  font-size: 30px;
  text-align: center;
  /* overflow: hidden; */
  & div {
    ${({ products }) => products ? 'border : 1px solid var(--button-background-color)' : null};
    border-radius: 3px;
    * {
        /* display: flex; */
        flex-direction: column;
        /* align-items: center; */
        /* justify-content: center; */
      /* border: 1px solid blue; */
      ${({ products }) => products ? 'margin : 5px' : null}
    }
    * > img {
    ${({products}) => products ? 'border: 1px solid var(--button-background-color)' : null};
      border-radius: 4px;
    }
    * > p {
      ${({products}) => products ? 'margin-top: 20px' : null};
      ${({products}) => products ? 'margin-bottom: 0px' : null};
      font-family: var(--button-font-family);
      font-size: var(--button-font-size);
    }
  }
`;
