import { Button, Card, CardContent, Grid, Modal } from '@mui/material';
import { Form, Formik } from 'formik';

import { FormField } from 'shared/ui/FormField';

import { AddPlantModalProps } from './types';
import { defaultPlantData } from './mocks';

const PlantModal = (props: AddPlantModalProps) => {
  const { open, onClose, onSubmit } = props;

  return (
    <Modal
      open={open}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      onClose={onClose}
    >
      <Card sx={{ width: 500 }}>
        <CardContent>
          <Formik
            initialValues={defaultPlantData}
            onSubmit={onSubmit}
          >
            <Form>
              <Grid
                spacing={2}
                direction="column"
                container
              >
                <Grid item>
                  <FormField
                    name="name"
                    placeholder="Plant name"
                  />
                </Grid>
                <Grid item>
                  <Button
                    type="submit"
                    variant="contained"
                    color="success"
                  >
                    Submit changes
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </CardContent>
      </Card>
    </Modal>
  )
};

export { PlantModal };