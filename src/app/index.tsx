import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';

import { Routing } from 'pages';

import { firebaseConfig } from './firebase';

const App = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Greenhouse
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ paddingTop: '20px' }}>
        <Routing/>
      </Container>
    </Box>
  )
}

export { App, firebaseConfig };
