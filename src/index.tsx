import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { router } from './router/Router';
import { IssuseProvider } from './utils/IssuesContext';
import { HttpClient } from './services/HttpClient';
import { IssuesService } from './services/IssuesMainService';

const httpClient = new HttpClient(process.env.REACT_APP_BASE_URL);
const issuesService = new IssuesService(httpClient);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <IssuseProvider issuesService={issuesService}>
    <RouterProvider router={router} />
  </IssuseProvider>,
);
