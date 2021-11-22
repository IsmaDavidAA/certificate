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
  InputInvisible,
} from './CommonCard.styles';

const CommonUserCard = props => {
  const [selectedOption, setSelectedOption] = useState(null);
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
        <FormDownloadCertificate onSubmit={props.handleGetMyDocument}>
          <MySelect
            value={selectedOption}
            onChange={setSelectedOption}
            options={extractOptions(props.certificados)}
            name="certificado"
          ></MySelect>
          {selectedOption == null ? (
            <></>
          ) : (
            <ImageLogo src={selectedOption.logoLink}></ImageLogo>
          )}
          <Label>
            Nombre/s
            <Input name="nombres" type="text" placeholder="Nombre/s usuario" />
          </Label>
          <Label>
            Apellido/s
            <Input
              name="apellidos"
              type="text"
              placeholder="Apellido/s usuario"
            />
          </Label>
          <Label>
            CI
            <Input
              name="ci"
              type="number"
              placeholder="Documento de identidad"
            />
          </Label>
          <DownloadFile
            // download="tuCertificado.png"
            // href={selectedOption == null ? '' : selectedOption.logoLink}
            type="submit"
          >
            <ButtonDownload src={downloadIcon} />
          </DownloadFile>
        </FormDownloadCertificate>
      </WrapperCommonUser>
    </>
  );
};

export default CommonUserCard;
