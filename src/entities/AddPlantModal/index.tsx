import { Card, CardContent, Grid, Modal } from '@mui/material';
import { Form, Formik } from 'formik';
import { AddButton, FormField } from 'shared';
import { AddPlantModalProps } from './types';
import { defaultPlantData } from './mocks';

const AddPlantModal = (props: AddPlantModalProps) => {
  const { open, onClose, onAdd } = props;

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
            onSubmit={onAdd}
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
                  <AddButton text="Add"/>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </CardContent>
      </Card>
    </Modal>
  )
};

export { AddPlantModal };