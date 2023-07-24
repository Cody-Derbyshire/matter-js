import { Link } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
import '../components/CSS/Projects.css';

const Projects = () => {
  return (
    <>
      <div className='projects-wrapper'>
        <div id='projects' className='projects-container'>
          <a
            className='projects-item'
            target='_blank'
            rel='noreferrer'
            href='https://poke-gen.onrender.com/'
          >
            <h1>poke-api</h1>
          </a>
          <a
            className='projects-item'
            target='_blank'
            rel='noreferrer'
            href='https://build-a-chatbot-wwl8.onrender.com/'
          >
            <h1>chatbot</h1>
          </a>
          <a
            className='projects-item'
            target='_blank'
            rel='noreferrer'
            href='https://react-online-shop.onrender.com/'
          >
            <h1>font-face</h1>
          </a>
          <Link to={`/`} className='projects-item'>
            <h1>home</h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Projects;
