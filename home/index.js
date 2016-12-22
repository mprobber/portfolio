import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import Conway from './Conway';
import Bio from './Bio';
import Header from './Header';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import styles from './styles.css';
import textStyles from './text.css';

class HomePage extends Component {
  state = {
    headerVisible: false,
    activeSection: 1,
  };

  _getActiveSection() {
    const proj = ReactDOM.findDOMNode(this.projects).getBoundingClientRect();
    if (proj.top - 20 <= 0) return 4;
    const exp = ReactDOM.findDOMNode(this.experience).getBoundingClientRect();
    if (exp.top - 20 <= 0) return 3;
    const edu = ReactDOM.findDOMNode(this.education).getBoundingClientRect();
    if (edu.top - 20 <= 0) return 2;
    return 1;
  }

  _handleScroll = () => {
    const conway = ReactDOM.findDOMNode(this.conway).getBoundingClientRect();
    const activeSection = this._getActiveSection();
    this.setState({
      headerVisible: conway.bottom <= 0,
      activeSection
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this._handleScroll);;
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._handleScroll);;
  }

  render() {
    const { headerVisible, activeSection } = this.state;
    return (
      <div ref={(main) => this.main = main}>
        <div ref={(conway) => this.conway = conway}>
          <Conway width={40} height={16} />
        </div>
        <Header hidden={!headerVisible}/>
        <div className={styles.background}>
          <div className={styles.content}>
            <Bio ref={(bio) => this.bio =  bio} />
            <Education ref={(education) => this.education = education} />
            <Experience ref={(experience) => this.experience = experience} />
            <Projects ref={(projects) => this.projects = projects} />
            <div className={styles.copyright}>
              © 2016 Michael Probber - michael@probber.com
            </div>
          </div>
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
        </div>
      </div>
    );
  }

}

export default HomePage;
