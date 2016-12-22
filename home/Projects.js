import React, { PropTypes, Component } from 'react';
import styles from './projects.css';

const embeddedInstagramTensegrity = '<div class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:100%;"><div> <div style=" background:#F8F8F8; line-height:0; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div></div></div> <script async defer src="//platform.instagram.com/en_US/embeds.js"></script>';

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
          by the tension on outer wires, with a responsive light-up "nucleus" in
          the center.  My work on tensegrity included
            <a href="https://vimeo.com/196778600">
              creating
            </a> a
            <a href="https://vimeo.com/196778574">
              simulator
            </a> to
            <a href="https://vimeo.com/196778553">
              construct animations on the LEDs
            </a>, writing a
            <a href="https://github.com/mprobber/intention">
              framework to control the LEDs via a Beaglebone
            </a>, and writing
            <a href="https://github.com/mprobber/intention/tree/master/animations">
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
            the UX.  The project won <strong>Best Wearable, second-best use of
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
            worked with them to create a phone-gap based Application that could
            scan barcodes of products, and match them up to nutrition facts, and
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
