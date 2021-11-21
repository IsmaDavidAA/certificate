import React, { useState, useEffect } from 'react';
import CommonUserCard from '../../components/CommonUserCard';
import { apiSettings } from '../../servicios/servicios';
import { WrapperView, TextSoft } from './Home.styles';
const Home = () => {
  const [certificados, setCertificados] = useState('');

  useEffect(() => {
    const fetchCertificados = async () => {
      const data = await apiSettings.getCertificados();
      setCertificados(data);
    };

    fetchCertificados();
  }, []);

  return (
    <>
      <WrapperView>
        <CommonUserCard certificados={certificados}></CommonUserCard>
        <TextSoft>BY CERTIFICATE</TextSoft>
      </WrapperView>
    </>
  );
};

export default Home;
