import { useField } from 'formik';
import { Input } from '@mui/material';
import { FormFieldProps } from './types';

const FormField = (props: FormFieldProps) => {
  const { name } = props;

  const [field] = useField(name);

  return (
    <Input
      sx={{ width: '100%' }}
      {...field}
      {...props}
    />
  );
};

export { FormField };