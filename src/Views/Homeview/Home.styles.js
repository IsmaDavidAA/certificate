import styled from 'styled-components';

export const WrapperView = styled.div`
  background: #d8d8d8;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 450px) {
    min-height: 100vh;
    min-width: 100%;
    padding: 0px 0px 20px 0px;
  }
`;

export const TextSoft = styled.p`
  color: #b4b4b4;
`;
