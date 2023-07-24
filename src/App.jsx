import NameFall from '../components/NameFall.jsx';
import Landing from '../components/Landing.jsx';
import Menu from '../components/Menu.jsx';
import { Outlet, Link } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <>
      {/* <NameFall /> */}
      <Landing />
      <Menu />
      <Outlet />
    </>
  );
};

export default App;
