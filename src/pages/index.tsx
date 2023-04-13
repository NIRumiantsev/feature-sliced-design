import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Greenhouse } from './Greenhouse';
import { Profile } from './Profile';
import { RouteData } from './types';

const routes: RouteData[] = [
  { path: '/', element: <Greenhouse/>, key: 'greenhouse_page' },
  { path: '/:plantId', element: <Profile/>, key: 'plant_page' },
];

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((props) => <Route {...props}/>)}
      </Routes>
    </BrowserRouter>
  )
};

export { Routing };