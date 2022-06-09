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
  /* border: 1px solid black; */
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  > img {
    width: 160px;
    position: relative;
    transition: var(--transition-default);
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
  > li {
    list-style: none;
    margin:0 15px 0 15px;
    height: 80%;
    position: relative;
    border-left: 1px solid var(--active-link-color);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: start;
    > * {
      padding-right: 10px;
      text-decoration: none;
      padding: 0 5px 0 5px;
      color: var(--active-link-color);
      transition: var(--transition-default);
      &:hover {
        opacity: 0.5;
      }
    }
  }
`;
