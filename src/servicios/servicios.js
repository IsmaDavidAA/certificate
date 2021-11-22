import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  orderBy,
  limit,
  updateDoc,
  setDoc,
  increment,
  deleteDoc,
  addDoc,
} from 'firebase/firestore';
import { db } from './firebase';

const listaCertificados = 'certificado';
const administrador = 'administrador';
const listaUsuarios = 'usuario';

export const apiSettings = {
  getCertificados: async () => {
    const datos = await getDocs(collection(db, listaCertificados));
    let datosJson = [];
    datos.forEach(doc => {
      datosJson.push([doc.id, doc.data()]);
    });
    if (datosJson === []) {
      datosJson = [{}];
    }
    return datosJson;
  },

  getName: async userId => {
    const user = await getDoc(doc(db, administrador, userId));
    console.log(user.data());
    return user.data();
  },

  getCertificate: async (idCertificado, nombreEst, apellidoEst, idEst) => {
    let existe = false;
    const q = query(
      collection(db, listaUsuarios),
      where('nombres', '==', nombreEst),
      where('apellidos', '==', apellidoEst),
      where('ci', '==', parseInt(idEst)),
      where('id_certificado', '==', idCertificado),
      where('activo', '==', true)
    );
    const querySnapshot = await getDocs(q);
    let certificado;
    querySnapshot.forEach(doc => {
      existe = true;

      certificado = doc.data().linkCert;
    });

    return [existe, certificado];
  },
};
