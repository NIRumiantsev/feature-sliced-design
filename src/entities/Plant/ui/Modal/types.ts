import { NewPlantData } from 'features/addNewPlant';

export type AddPlantModalProps = {
  open: boolean,
  onClose: () => void,
  onSubmit: (data: NewPlantData) => void,
};