import { doc, deleteDoc } from 'firebase/firestore';
import { getDB } from 'utils';

const db = getDB();

export const deletePlant = async (plantId: string) => {
  await deleteDoc(doc(db, 'plants', plantId));
};