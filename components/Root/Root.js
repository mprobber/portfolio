import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Conway from '../Conway';
import Bio from '../Bio';
import Header from '../Header';
import Education from '../Education';
import Experience from '../Experience';
import Projects from '../Projects';
import Nav from '../Nav';
import BottomNav from '../BottomNav';

function useOnScreen(ref, rootMargin = '0px') {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}

const HomePage = () => {
  const [activeSection, setActiveSection] = useState('about');
  const conwayGame = useRef(null);
  const headerVisible = useOnScreen(conwayGame);
  return (
    <Background>
      <div ref={conwayGame}>
        <Conway width={40} height={16} />
      </div>
      <Header hidden={headerVisible} />
      <Content>
        {activeSection === 'about' && <Bio />}
        {activeSection === 'education' && <Education />}
        {activeSection === 'work' && <Experience />}
        {activeSection === 'projects' && <Projects />}
        <Copyright>© 2020 Michael Probber - web@mikep.ro</Copyright>
      </Content>
      <BottomNav onChange={setActiveSection} active={activeSection} />
    </Background>
  );
};

export default HomePage;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: scroll;
  background-color: #585858;
`;

const Content = styled.div`
  max-width: 900px;
  padding-left: 30px;
  padding-right: 30px;
  float: left;

  @media only screen and (max-width: 1229px) {
    margin-left: auto;
    margin-right: auto;
    float: none;
  }
`;

const Copyright = styled.div`
  font-family: roboto;
  font-weight: 100;
  text-align: center;
  padding: 40px;
  color: #888;
  margin-bottom: 20px;
`;
