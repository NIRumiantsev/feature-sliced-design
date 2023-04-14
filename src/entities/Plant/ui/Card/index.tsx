import { Card, CardContent, Typography, CardActions, IconButton, Grid } from '@mui/material';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { PlantCardProps } from './types';

const PlantCard = (props: PlantCardProps) => {
  const { name, onEditClick, onDeleteClick } = props;

  return (
    <Card sx={{ width: 200 }}>
      <CardContent>
        <Grid
          spacing={1}
          container
        >
          <Grid item><Typography variant="caption">Plant name:</Typography></Grid>
          <Grid item><Typography>{name}</Typography></Grid>
        </Grid>
        <Grid
          sx={{ paddingTop: '20px' }}
          justifyContent="center"
          container
        >
          <Grid item><LocalFloristIcon fontSize="large"/></Grid>
        </Grid>
        <CardActions>
          <IconButton
            onClick={onEditClick}
            aria-label="edit"
            size="small"
          >
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton
            onClick={onDeleteClick}
            aria-label="delete"
            size="small"
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  )
};

export { PlantCard };