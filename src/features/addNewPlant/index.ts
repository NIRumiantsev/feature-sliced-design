import { doc, setDoc } from 'firebase/firestore';
import { v4 as uuid } from 'uuid';
import { getDB } from 'utils';
import { NewPlantData } from './types';

const db = getDB();

export const addNewPlant = async (data: NewPlantData) => {
  const plantRef = doc(db, 'plants', uuid());
  await setDoc(plantRef, data);
};

export type { NewPlantData };