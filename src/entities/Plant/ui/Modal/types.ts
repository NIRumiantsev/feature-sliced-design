import { NewPlantData } from 'shared/api/addNewPlant';

export type AddPlantModalProps = {
  open: boolean,
  onClose: () => void,
  onSubmit: (data: NewPlantData) => void,
};