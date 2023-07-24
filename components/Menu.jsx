import { Link } from 'react-router-dom';
import '../components/CSS/Menu.css';

const Menu = () => {
  const menus = document.getElementsByClassName('menu-container');
  const closeMenu = () => {
    for (const menu of menus) {
      menu.style.width = '0';
    }
  };
  return (
    <>
      <div className='menu-wrapper'>
        <div id='menu' className='menu-container'>
          <Link className='menu-item' to={`projects`} onClick={closeMenu}>
            <h1>projects</h1>
          </Link>
          <h1 className='menu-item'>graphics</h1>
          <h1 className='menu-item'>furniture</h1>
          <h1 className='menu-item'>3d</h1>
          <h1 className='menu-item'>motion</h1>
          <h1 className='menu-item'>costume</h1>
          <Link className='menu-item' to={`contact`}>
            <h1>contact</h1>
          </Link>
          <h1 onClick={closeMenu} id='menu-close' className='menu-item'>
            close
          </h1>
        </div>
      </div>
    </>
  );
};

export default Menu;
