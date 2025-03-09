import { useRoutes } from 'react-router-dom';
import Settings from './Settings';
import Home from './Home';

export default function AppRoutes() {
  let userType

  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
      children: [
        {
          path: `${userType}`,
          element: <Settings />
        }
      ]
    }
  ])

  return routes;
}