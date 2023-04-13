import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Button, Grid, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { PlantModal } from 'entities';
import { editPlant, UpdatedPlantData } from 'features';
import { model } from './model';

const PlantProfile = observer(() => {
  const [editPlantModalOpened, setEditPlantModalOpened] = useState<boolean>(false);

  const { plantId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (plantId) {
      model.load(plantId);
    }
  }, [plantId]);

  const plant = model.plant;

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
      <Grid
        display="flex"
        flexDirection="row"
        spacing={3}
        container
      >
        <Grid item>
          <Typography variant="h5">
            {plant?.name}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={handleOpenEditPlantModal}
            variant="contained"
          >
            <EditIcon/>
          </Button>
        </Grid>
        <PlantModal
          open={editPlantModalOpened}
          onClose={handleCloseEditPlantModal}
          onSubmit={handleUpdatePlant}
        />
      </Grid>
    </Grid>
  )
});

export { PlantProfile };