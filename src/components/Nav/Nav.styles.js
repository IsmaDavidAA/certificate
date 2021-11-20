import styled from 'styled-components';

export const WrapperNav = styled.div`
  width: 100%;
  display: flex;
  box-shadow: 0px 0px 10px 0 #999999;
  position: fixed;
  background: #161d6f;
  z-index: 10;
  left: 0;
  right: 0;
  top: 0;
  height: 60px;
  justify-content: flex-end;
  align-items: center;
`;

export const WrapperState = styled.div`
  hight: 50px;
  margin: 0px 10px 0px 0px;
  display: flex;
  align-items: center;
  min-width: 140px;
  justify-content: flex-end;
`;

export const FigureState = styled.img`
  hight: 40px;
  width: 40px;
  margin: 0px 0px 0px 0px;
`;
export const TextState = styled.a`
  color: white;
  margin: 0px 5px 7px 0px;
  text-decoration: none;
`;

export const TextName = styled.a`
  text-decoration: none;
  margin: 0px 5px 7px 0px;
  color: white;
`;
