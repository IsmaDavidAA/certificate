import React, { useState, useEffect, useContext } from 'react';
import {
  ImageLogo,
  MySelect,
  TitleLogin,
  WrapperCommonUser,
} from './CommonCard.styles';
import Select from 'react-select';
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
        <TitleLogin>Descargue su certificado</TitleLogin>

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
      </WrapperCommonUser>
    </>
  );
};

export default CommonUserCard;
