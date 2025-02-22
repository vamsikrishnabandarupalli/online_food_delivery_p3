import './App.css';
import Navigationbar from './components/navigation';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Navigationbar />
      <Outlet /> {/* Ensures Home Page Displays Correctly */}
    </>
  );
}

export default App;
