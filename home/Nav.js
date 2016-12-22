import React from 'react';
import styles from './nav.css';
export default ({activeSection, headerVisible}) => (
  <ul className={headerVisible ? styles.nav : styles.navStationary}>
    <a href='#about'>
      <li className={activeSection === 1 ? styles.bold : ''} >
        About Me
      </li>
    </a>
    <a href='#education'>
      <li className={activeSection === 2 ? styles.bold : ''} >
        Education
      </li>
    </a>
    <a href='#experience'>
      <li className={activeSection === 3 ? styles.bold : ''} >
        Experience
      </li>
    </a>
    <a href='#projects'>
      <li className={activeSection === 4 ? styles.bold : ''} >
        Projects
      </li>
    </a>
  </ul>
);
