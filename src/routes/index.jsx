import {
  BrowserRouter,
  Route,
  Routes as RouterContainer,
} from 'react-router-dom';
import Details from '../pages/Details';
import Home from '../pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <RouterContainer>
        <Route path="/" exact element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </RouterContainer>
    </BrowserRouter>
  );
}
