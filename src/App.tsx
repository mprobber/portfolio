import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import Conway from "./components/Conway";
import Bio from "./components/Bio";
import Header from "./components/Header";
import Education from "./components/Education";
import Experience from "./components/Experience";
// import Projects from "./components/Projects";
// import Nav from '../Nav';
import BottomNav from "./components/BottomNav";

function useOnScreen(
  ref: React.RefObject<HTMLDivElement | null>,
  rootMargin = "0px"
) {
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
      }
    );
    if (!ref) {
      return;
    }
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}

const App = () => {
  const [activeSection, setActiveSection] = useState("about");
  const conwayGame = useRef<HTMLDivElement | null>(null);

  const headerVisible = useOnScreen(conwayGame);

  return (
    <Background>
      <div ref={conwayGame}>
        <Conway width={40} height={16} />
      </div>
      <Header hidden={headerVisible} />

      <ContentContainer>
        <Content>
          {activeSection === "about" && <Bio />}
          {activeSection === "education" && <Education />}
          {activeSection === "work" && <Experience />}
          {/* {activeSection === "projects" && <Projects />} */}
        </Content>
        <Copyright>© 2025 Michael Probber - web@mikep.ro</Copyright>
      </ContentContainer>
      <BottomNav onChange={setActiveSection} active={activeSection} />
    </Background>
  );
};

export default App;

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  background-color: #999999;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-direction: column;
  flex-grow: 1;
`;

const Dummy = styled.div`
  height: 500vh;
`;

const Content = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`;

const Copyright = styled.div`
  margin-top: 15px;
  padding-bottom: 40px;
  color: #777;
  margin-bottom: 20px;
  align-self: flex-start;
  padding-left: 15px;
`;
