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
`;

export const MySelect = styled(Select)`
  width: 100%;
`;

export const ImageLogo = styled.img`
  width: 100%;
  max-height: 200px;
`;

export const Title = styled.h2`
  color: #161d6f;
  font-size: 28px;
`;

export const FormDownloadCertificate = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 85px 0px 85px;
  height: 100%;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 10px;
  font-weight: 18px;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #161d6f;
  background: transparent;
  outline: none;
  height: 36px;
  min-width: 240px;
  color: #161d6f;
  font-size: 14px;
`;

export const ButtonDownload = styled.img`
  hight: 40px;
  width: 40px;
  margin: 0px 0px 0px 0px;
  cursor: pointer;
`;

export const DownloadFile = styled.a`
 
` 