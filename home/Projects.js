import React, { PropTypes, Component } from 'react';
import styles from './projects.css';

const embeddedInstagramTensegrity = '<div><iframe allowtransparency="true" style="margin-top:-50px;margin-left:-10px;" frameborder="0" height="710" scrolling="no" src="https://www.instagram.com/p/BJLZZuDApri/embed/" width="211"></iframe></div>';

const embeddedVimeoVelo = '<iframe src="https://player.vimeo.com/video/87160184" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'

const embeddedVimeoDrop = '<iframe src="https://player.vimeo.com/video/94519555" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><p></p>';

export default class Projects extends Component {
  render() {
    return (
      <div id="projects" className={styles.main}>
        <h1>Projects</h1>
        <div>
          <h3>Intention</h3>
          <div className={styles.images}>
            <img className={styles.example} src='tensegrity1.jpg'/>
            <img className={styles.example} src='tensegrity2.jpg'/>
            <div className={styles.example} dangerouslySetInnerHTML={{
              __html: embeddedInstagramTensegrity
            }}/>
          </div>
          <p>Intention was a sponsored art project for Burning Man 2016.  It's
          a structure based on cellular tensegrity.  That is, it's held together
          by the tension on outer wires, with a responsive light-up "nucleus"
            in <a href="https://vimeo.com/196778600">
              creating
            </a> a <a href="https://vimeo.com/196778574">
              simulator
            </a> to <a href="https://vimeo.com/196778553">
              construct animations on the LEDs
            </a>, writing a <a href="https://github.com/mprobber/intention">
              framework to control the LEDs via a Beaglebone
            </a>, and writing <a href="https://github.com/mprobber/intention/tree/master/animations">
              scripts that took in live audio, processed them using Fast Fourier
              Transforms, and outputted some visualization onto the LEDs, alongside
              other animations
            </a>.
          </p>
        </div>
        <div>
          <h3>Velo</h3>
          <div className={styles.images}>
            <img className={styles.example} src='bag.jpeg'/>
            <img className={styles.example} src='electronics.jpeg'/>
            <img className={styles.example} src='wearingbag.jpeg'/>
          </div>
          <p>
            Velo was a project concieved and prototyped at PennApps 2014 with
            three designers.  Velo is designed to be a crowdsourced courrier
            service.  There are two parts to Velo - an interactive bag that has
            a shoulder pad that vibrates and gives you audio notifications, and
            an app that looks at your next calendar event's location and looks
            up requested courrier routes that are along your way.  I programmed
            the electronics and prototyped the application as a proof-of-concept,
            while the team of designers worked on making the bag and designing
            the UX.  The project won <strong>best wearable, second-best use of
            Google Maps API, and best IndieGoGo Campaign</strong> at PennApps 2014.
          </p>
          <div className={styles.video} dangerouslySetInnerHTML={{
            __html: embeddedVimeoVelo
          }} />
        </div>
        <div>
          <h3>Drop</h3>
          <div className={styles.images}>
            <img className={styles.example} src='drop.png'/>
          </div>
          <p>
            Drop was a project first concieved and roughly prototyped at PenApps
            2011, later built in the class Designing Human Centered Software at
            Carnegie Mellon University in 2014.  The premise of drop is that of
            a digital scavenger hunt.  You can "Drop" images, text, and drawings
            to certain locations, and when your friends are near the locations,
            they get a notification that one of their friends left something
            there. Working with a team of 3 other developers, this project was
            my first foray into native Android development.  The project was
            one of the <strong>Top 20</strong> at PennApps 2011.
          </p>
          <div className={styles.video} dangerouslySetInnerHTML={{
            __html: embeddedVimeoDrop
          }} />
        </div>
        <div>
          <h3>Let's Move Pittsburgh</h3>
          <div className={styles.images}>
            <img className={styles.example} src='letsmove.jpg'/>
          </div>
          <p>
            Let's move Pittsburgh is a nonprofit organization that was created
            as a part of Michelle Obama's "Let's Move" program.  Our team of 4
            worked with them to create a <strong>phone-gap based Application</strong> that
            could scan barcodes of products, and match them up to nutrition facts, and
            give an overall "red-yellow-green" rating for fats, carbohydrates,
            and proteins in various foods.  I personally built on the backend
            in rails, integrated the application with a native barcode scanner,
            and developed a heuristic to match product names in one database to
            nutrition information in another database that was fairly reliable.
          </p>
        </div>
      </div>
    );
  }
}
