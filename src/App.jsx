import { Link, Outlet } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import TempStarter from './pages/TempStarter';

function App() {
  //The following JSX is here temporarily

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/* <div className="container mx-auto gap-1 flex flex-col">
        <TempStarter />
      </div> */}
    </>
  );
}

export default App;
