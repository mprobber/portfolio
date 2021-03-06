import React from 'react';
import styles from './bio.css';
import me from './me.jpg';

export default () => (
  <div className={styles.background} id="about">
    <div className={styles.text}>
      <div className={styles.intro}>
        <img className={styles.avatar} src={me} />
        <div>
          <h1>Hello!</h1>
          <p>
            My name is Michael Probber. I'm a full stack software engineer with
            an interest in design, living in the San Francisco Bay Area. I grew
            up in the New York area, and went to University in Pittsburgh, PA.
            When I'm not at the computer, I like to travel, shoot pictures, see
            live music, and cycle.
          </p>
        </div>
        <div style={{ clear: 'both' }} />
      </div>
    </div>
  </div>
);
