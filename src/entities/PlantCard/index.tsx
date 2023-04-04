import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { PlantCardProps } from './types';

const PlantCard = (props: PlantCardProps) => {
  const { name, onDeleteClick } = props;

  return (
    <Card>
      <CardContent>
        <Typography>{name}</Typography>
        <CardActions>
          <Button onClick={onDeleteClick}>Delete</Button>
        </CardActions>
      </CardContent>
    </Card>
  )
};

export { PlantCard };