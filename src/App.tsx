import { Outlet } from 'react-router-dom';
import Layout from './components/Layout';
import Header from './components/Layout/Header';
import { IssuseProvider } from './utils/IssuesContext';
import { HttpClient } from './services/HttpClient';
import { IssuesService } from './services/IssuesMainService';

function App() {
  return (
    <Layout>
      <Header />
      <Outlet />
    </Layout>
  );
}

export default App;
