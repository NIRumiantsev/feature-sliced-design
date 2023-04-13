import { doc, getDoc } from 'firebase/firestore';
import { getDB } from 'utils';
import { PlantProfileData } from './types';

const db = getDB();

export const loadPlant = async (plantId: string) => {
  const plantRef = doc(db, 'plants', plantId);
  const plantDoc = await getDoc(plantRef);
  return plantDoc.data() as PlantProfileData;
};