import { Link, Outlet, useNavigate } from 'react-router-dom';
import Navbar from './components/shared/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
