import { Button } from '@mui/material';
import { AddButtonProps } from './types';

const AddButton = (props: AddButtonProps) => {
  const { text, onClick } = props;

  return (
    <Button
      type="submit"
      color="success"
      variant="contained"
      onClick={onClick}
    >
      {text}
    </Button>
  )
};

export { AddButton };