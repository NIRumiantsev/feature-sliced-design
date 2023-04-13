import { action, makeAutoObservable, observable } from 'mobx';
import { loadPlant } from './api';
import { PlantProfileData } from './types';

class PlantListModel {
  plant: PlantProfileData | null = null;

  constructor() {
    makeAutoObservable(this, {
      plant: observable,
      load: action,
    });
  }

  async load(plantId: string) {
    this.plant = await loadPlant(plantId);
  }
}

export const model = new PlantListModel();