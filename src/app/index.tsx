import { Routing } from 'pages';
import { firebaseConfig } from './firebase';
import { Container } from '@mui/material';

const App = () => {
  return (
    <Container>
      <Routing/>
    </Container>
  )
}

export { App, firebaseConfig };
