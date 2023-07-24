import { useEffect } from 'react';
import '../components/CSS/Landing.css';
import { TxtAnime } from 'txtanime.js';

const Landing = () => {
  useEffect(() => {
    new TxtAnime('.role-text', {
      effect: 'txt-an-7',
      delayStart: 0,
      delay: 1,
      duration: 0.15,
      repeat: true,
      overlayBackground: '#FFC716',
      text: ['designer.', 'web developer.'],
    });
    new TxtAnime('.skills-text', {
      effect: 'txt-an-9',
      delayStart: 0,
      delay: 2,
      duration: 1.5,
      repeat: true,
      overlayBackground: '#FFC716',
      text: [
        'graphic design.',
        'front-end dev.',
        'furniture design.',
        'costume design.',
        '3d modeling.',
      ],
    });
  }, []);

  const menus = document.getElementsByClassName('menu-container');

  const openMenu = () => {
    for (const menu of menus) {
      menu.style.width = '100%';
    }
  };

  return (
    <>
      <div className='main'>
        <div className='title-div'>
          <h1 className='name'>
            hi ~ <br />
            <span className='name-span'>i'm cody derbyshire.</span>
          </h1>
          <div className='change-div'>
            <p>i'm a pretty okay&nbsp;</p>
            <p className='role-text'></p>
          </div>
          <div className='change-div'>
            <p>i do a bit of&nbsp;</p>
            <p className='skills-text'></p>
          </div>
        </div>
        <a onClick={openMenu} id='menu-open' className='menu-link'>
          menu &rarr;
        </a>
      </div>
    </>
  );
};

export default Landing;
