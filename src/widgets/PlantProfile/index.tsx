import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import { IconButton, Button, CircularProgress, Grid, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

import { PlantModal } from 'entities/Plant';
import { editPlant, UpdatedPlantData } from 'features/editPlant';

import { model } from './model';

const PlantProfile = observer(() => {
  const [plantLoading, setPlantLoading] = useState<boolean>(false);
  const [editPlantModalOpened, setEditPlantModalOpened] = useState<boolean>(false);

  const { plantId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    loadPlant()
  }, [plantId]);

  const plant = model.plant;

  const loadPlant = async () => {
    if (plantId) {
      setPlantLoading(true);
      await model.load(plantId);
      setPlantLoading(false);
    }
  };

  const handleOpenEditPlantModal = () => {
    setEditPlantModalOpened(true);
  };

  const handleCloseEditPlantModal = () => {
    setEditPlantModalOpened(false);
  };

  const handleUpdatePlant = async (data: UpdatedPlantData) => {
    if (plantId) {
      await editPlant(plantId, data);
      model.load(plantId);
      handleCloseEditPlantModal();
    }
  };

  const handleClickBack = () => {
    navigate('/');
  };

  return (
    <Grid
      direction="column"
      container
    >
      <Grid item>
        <Button onClick={handleClickBack}>Back</Button>
      </Grid>
      {plantLoading ? (
        <CircularProgress/>
      ) : (
        <Grid
          display="flex"
          flexDirection="row"
          alignItems="center"
          spacing={1}
          container
        >
          <Grid item><Typography variant="caption">Plant name:</Typography></Grid>
          <Grid item><Typography variant="h5">{plant?.name}</Typography></Grid>
          <Grid item>
            <IconButton
              aria-label="edit"
              size="small"
              onClick={handleOpenEditPlantModal}
            >
              <EditIcon/>
            </IconButton>
          </Grid>
          <PlantModal
            open={editPlantModalOpened}
            onClose={handleCloseEditPlantModal}
            onSubmit={handleUpdatePlant}
          />
        </Grid>
      )}
    </Grid>
  )
});

export { PlantProfile };