import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NotFound from '../components/common/NotFound';
import Main from '../pages/Main';
import Detail from '../pages/Detail';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Main /> },
      { path: '/detail/:id', element: <Detail /> },
    ],
  },
]);
