import { Outlet } from 'react-router-dom';
import Layout from './components/Layout';
import Header from './components/Layout/Header';
import { IssuseProvider } from './utils/IssuesContext';
import { HttpClient } from './services/HttpClient';
import { IssuesService } from './services/IssuesMainService';

const httpClient = new HttpClient(process.env.REACT_APP_BASE_URL);
const issuesService = new IssuesService(httpClient);
function App() {
  return (
    <IssuseProvider issuesService={issuesService}>
      <Layout>
        <Header />
        <Outlet />
      </Layout>
    </IssuseProvider>
  );
}

export default App;
