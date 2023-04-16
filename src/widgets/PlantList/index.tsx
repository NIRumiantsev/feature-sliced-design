import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Button, Grid } from '@mui/material';

import { PlantModal, PlantCard } from 'entities/Plant';
import { addNewPlant, NewPlantData } from 'shared/api/addNewPlant';
import { deletePlant } from 'shared/api/deletePlant';

import { model } from './model';

const PlantList = observer(() => {
  const [addPlantModalOpened, setAddPlantModalOpened] = useState<boolean>(false);

  useEffect(() => {
    model.load();
  }, []);

  const navigate = useNavigate();

  const plantList = model.plants;

  const handleOpenAddPlantModal = () => {
    setAddPlantModalOpened(true);
  };

  const handleCloseAddPlantModal = () => {
    setAddPlantModalOpened(false);
  };

  const handleAddPlant = async (data: NewPlantData) => {
    await addNewPlant(data);
    model.load();
    handleCloseAddPlantModal();
  };

  const handleDeletePlant = async (plantId: string) => {
    await deletePlant(plantId);
    model.load();
  };

  const handleClickCard = (plantId: string) => {
    navigate(`/${plantId}`);
  };

  return (
    <Grid
      spacing={2}
      direction="column"
      container
    >
      <Grid item>
        <Button
          type="submit"
          variant="contained"
          color="success"
          onClick={handleOpenAddPlantModal}
        >
          Add new plant
        </Button>
      </Grid>
      <Grid
        spacing={2}
        item
        container
      >
        {plantList.map(({ id, ...plant }) => (
          <Grid item>
            <PlantCard
              key={id}
              onEditClick={() => handleClickCard(id)}
              onDeleteClick={() => handleDeletePlant(id)}
              {...plant}
            />
          </Grid>
        ))}
      </Grid>
      <PlantModal
        open={addPlantModalOpened}
        onClose={handleCloseAddPlantModal}
        onSubmit={handleAddPlant}
      />
    </Grid>
  );
});

export { PlantList };