import { doc, updateDoc } from 'firebase/firestore';
import { getDB } from 'utils';
import { UpdatedPlantData } from './types';

const db = getDB();

export const editPlant = async (plantId: string, newData: UpdatedPlantData) => {
  await updateDoc(doc(db, 'plants', plantId), newData);
};

export type { UpdatedPlantData };