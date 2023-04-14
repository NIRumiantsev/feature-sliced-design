import { action, makeAutoObservable, observable } from 'mobx';

import { loadPlantList } from './api';
import { PlantDto } from './types';

class PlantListModel {
  plants: PlantDto[] = [];

  constructor() {
    makeAutoObservable(this, {
      plants: observable,
      load: action,
    });
  }

  async load() {
    this.plants = await loadPlantList();
  }
}

export const model = new PlantListModel();