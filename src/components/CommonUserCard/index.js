import React, { useState, useEffect, useContext } from 'react';
import downloadIcon from '../../images/file.png';
import {
  ImageLogo,
  MySelect,
  Title,
  WrapperCommonUser,
  FormDownloadCertificate,
  Label,
  Input,
  ButtonDownload,
  DownloadFile,
} from './CommonCard.styles';

const CommonUserCard = props => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([]);
  const extractOptions = value => {
    let option = [];
    if (value) {
      value.map(cert => {
        option.push({
          value: `${cert[0]}`,
          label: `${cert[1].nombre}`,
          logoLink: `${cert[1].logo}`,
        });
      });
    }
    return option;
  };

  return (
    <>
      <WrapperCommonUser>
        <Title>Descargue su certificado</Title>

        <MySelect
          value={selectedOption}
          onChange={setSelectedOption}
          options={extractOptions(props.certificados)}
        ></MySelect>
        {selectedOption == null ? (
          <></>
        ) : (
          <ImageLogo src={selectedOption.logoLink}></ImageLogo>
        )}

        <FormDownloadCertificate>
          <Label>
            Nombre
            <Input />
          </Label>
          <Label>
            CI
            <Input />
          </Label>
        </FormDownloadCertificate>
        <DownloadFile
          download="tuCertificado.png"
          href={selectedOption == null ? '' : selectedOption.logoLink}
        >
          <ButtonDownload src={downloadIcon} />
        </DownloadFile>
      </WrapperCommonUser>
    </>
  );
};

export default CommonUserCard;
