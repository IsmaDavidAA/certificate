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
const listaInscripciones = 'inscripcion';
const estudiante = 'estudiante';

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
    console.log(datosJson);
    return datosJson;
  },

  getName: async userId => {
    const user = await getDoc(doc(db, administrador, userId));
    console.log(user.data());
    return user.data();
  },
};
