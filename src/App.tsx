import { Outlet } from 'react-router-dom';
import Layout from './components/Layout';
import Header from './components/Layout/Header';

function App() {
  return (
    <Layout>
      <Header />
      <Outlet />
    </Layout>
  );
}

export default App;
