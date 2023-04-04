import { NewPlantData } from 'features';

export type AddPlantModalProps = {
  open: boolean,
  onClose: () => void,
  onAdd: (data: NewPlantData) => void,
};