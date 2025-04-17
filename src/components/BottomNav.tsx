import  { useCallback } from 'react';
import styled from 'styled-components';

type Props = {active: string, onChange: (s: string) => any};

const BottomNav = ({ active, onChange }: Props) => {
  const onClick = useCallback((section: string) => {
    window.scrollX = 0;
    onChange(section);
  }, []);
  return (
    <Navigation>
      <NavLink $bold={active === 'about'} onClick={() => onClick('about')}>
        About
      </NavLink>
      <NavLink
        $bold={active === 'education'}
        onClick={() => onClick('education')}
      >
        Education
      </NavLink>
      <NavLink $bold={active === 'work'} onClick={() => onClick('work')}>
        Work Experience
      </NavLink>
      {/* <NavLink $bold={active === 'projects'} onClick={() => onClick('projects')}>
        Projects
      </NavLink> */}
    </Navigation>
  );
};

const NavLink = styled.a<{$bold: boolean}>`
  cursor: pointer;
  text-decoration: none;
  font-weight: ${({ $bold }) => ($bold ? '700' : '200')};
`;

const Navigation = styled.div`
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  left: 0;
  font-family: roboto;
  font-weight: light;
  width: 100%;
  background-color: #000;
  height: 40px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export default BottomNav;
