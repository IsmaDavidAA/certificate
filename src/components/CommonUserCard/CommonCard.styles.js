import styled from 'styled-components';
import Select from 'react-select';
export const WrapperCommonUser = styled.div`
  background: white;
  min-height: 300px;
  min-width: 300px;
  max-width: 400px;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 15px 20px 15px;
  justify-content: space-between;

  @media only screen and (max-width: 450px) {
    max-width: 460px;
    padding: 0px 0px 0px 0px;
    margin: 100px 0px 0px 0px;
  }
`;

export const MySelect = styled(Select)`
  width: 100%;
  @media only screen and (max-width: 450px) {
    max-width: 340px;
    padding: 0px 5px 20px 5px;
  }
`;

export const ImageLogo = styled.img`
  width: 100%;
  max-height: 200px;
`;

export const Title = styled.h2`
  color: #161d6f;
  font-size: 28px;
  @media only screen and (max-width: 450px) {
    max-width: 300px;
    padding: 0px 10px 20px 10px;
    text-align: center;
  }
`;

export const FormDownloadCertificate = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  height: 100%;
  @media only screen and (max-width: 450px) {
    max-width: 350px;
    margin: 0px 8px 20px 8px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 8px;
  font-weight: 18px;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #161d6f;
  background: transparent;
  outline: none;
  height: 36px;
  min-width: 220px;
  color: #161d6f;
  font-size: 14px;
`;

export const InputInvisible = styled.input`
  border: none;
  border-bottom: 1px solid #161d6f;
  background: transparent;
  outline: none;
  height: 36px;
  min-width: 220px;
  color: #161d6f;
  font-size: 14px;
  display none;
`;

export const ButtonDownload = styled.img`
  hight: 40px;
  width: 40px;
  margin: 0px 0px 0px 0px;
`;

export const DownloadFile = styled.button`
  border: 0;
  cursor: pointer;
  background: white;
`;
