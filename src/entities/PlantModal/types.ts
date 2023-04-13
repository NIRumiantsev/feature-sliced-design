import { NewPlantData } from 'features';

export type AddPlantModalProps = {
  open: boolean,
  onClose: () => void,
  onSubmit: (data: NewPlantData) => void,
};