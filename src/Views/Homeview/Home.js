import React, { useState, useEffect, useCallback } from 'react';
import CommonUserCard from '../../components/CommonUserCard';
import { apiSettings } from '../../servicios/servicios';
import { WrapperView, TextSoft } from './Home.styles';
const Home = ({ history }) => {
  const [certificados, setCertificados] = useState('');

  useEffect(() => {
    const fetchCertificados = async () => {
      const data = await apiSettings.getCertificados();
      setCertificados(data);
    };

    fetchCertificados();
  }, []);
  const handleGetMyDocument = useCallback(
    async event => {
      event.preventDefault();
      const { certificado, nombres, apellidos, ci } = event.target.elements;
      try {
        const existe = await apiSettings.getCertificate(
          certificado.value,
          nombres.value,
          apellidos.value,
          ci.value
        );
        console.log(existe);
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  return (
    <>
      <WrapperView>
        <CommonUserCard
          certificados={certificados}
          handleGetMyDocument={handleGetMyDocument}
        ></CommonUserCard>
        <TextSoft>BY CERTIFICATE</TextSoft>
      </WrapperView>
    </>
  );
};

export default Home;
