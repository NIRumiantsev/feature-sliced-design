import { collection, getDocs } from 'firebase/firestore';

import { getDB } from 'shared/utils';

import { PlantDto } from './types';

const db = getDB();

const loadPlantList = async () => {
  const plantsRef = collection(db, 'plants');
  const plantsSnapshot = await getDocs(plantsRef);
  return plantsSnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})) as PlantDto[];
};

export { loadPlantList };