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

const listaCursos = 'curso';
const administrador = 'administrador';
const listaInscripciones = 'inscripcion';
const estudiante = 'estudiante';

export const apiSettings = {
  getCursos: async () => {
    const datos = await getDocs(collection(db, listaCursos));
    let datosJson = [];
    datos.forEach(doc => {
      datosJson.push([doc.id, doc.data()]);
    });
    if (datosJson === []) {
      datosJson = [{}];
    }
    return await datosJson;
  },
  getCurso: async idCurso => {
    const curso = await getDoc(doc(db, listaCursos, idCurso));
    return [curso.id, curso.data()];
  },

  getTopCursos: async () => {
    const q = query(
      collection(db, listaCursos),
      orderBy('cantInscritos', 'desc'),
      limit(3)
    );
    const querySnapshot = await getDocs(q);
    let datosJson = [];
    querySnapshot.forEach(doc => {
      datosJson.push([doc.id, doc.data()]);
    });
    if (datosJson === []) {
      datosJson = [{}];
    }
    console.log(datosJson);
    return await datosJson;
  },

  postInscripcion: async (idCurso, idEst) => {
    await addDoc(collection(db, listaInscripciones), {
      codCurso: idCurso,
      codEst: idEst,
      estadoInscripcion: 1,
    });
    return true;
  },

  dropOutCourse: async idIns => {
    await deleteDoc(doc(db, listaInscripciones, idIns));
    return true;
  },

  putCurso: async idCurso => {
    await updateDoc(doc(db, listaCursos, idCurso), {
      cantInscritos: increment(1),
    });
    return true;
  },

  updateCourse: async idCurso => {
    await updateDoc(doc(db, listaCursos, idCurso), {
      cantInscritos: increment(-1),
    });
    return true;
  },

  getInscrito: async (idCurso, idEst) => {
    let existe = false;
    const q = query(
      collection(db, listaInscripciones),
      where('codCurso', '==', idCurso),
      where('codEst', '==', idEst)
    );
    const querySnapshot = await getDocs(q);
    let idIns;
    querySnapshot.forEach(doc => {
      existe = true;
      idIns = doc.id;
      console.log('oka');
    });

    return [existe, idIns];
  },

  getName: async userId => {
    const user = await getDoc(doc(db, administrador, userId));
    console.log(user.data());
    return user.data();
  },
};
