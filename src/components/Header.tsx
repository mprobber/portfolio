import styled from "styled-components";

const x = true;
const _ = false;
const letters = [
  [_, x, _, _, _, x, _, x, x, x, _, _],
  [_, x, x, _, x, x, _, x, _, _, x, _],
  [_, x, _, x, _, x, _, x, x, x, _, _],
  [_, x, _, _, _, x, _, x, _, _, _, _],
  [_, x, _, _, _, x, _, x, _, _, _, _],
];

const EmailIcon = () =>(
  <svg
    version="1.1"
    x="0px"
    y="0px"
    viewBox="0 0 100 100"
    enableBackground="new 0 0 100 100"
  >
    <rect x="5" y="5.001" fill="none" width="90" height="89.999" />
    <path
      fill="#efefef"
      d="M91.559,44.428l-8.336-7.999v-14.81c0-0.714-0.58-1.293-1.293-1.293H66.443L50.894,5.404c-0.499-0.48-1.289-0.48-1.79,0  L33.556,20.326H18.07c-0.713,0-1.292,0.579-1.292,1.293v14.81l-8.335,7.999c-0.254,0.244-0.397,0.582-0.397,0.934v48.304  c0,0.716,0.579,1.293,1.293,1.293h81.324c0.715,0,1.293-0.577,1.293-1.293V45.361C91.955,45.01,91.811,44.672,91.559,44.428z   M82.188,39.021l6.98,6.7l-6.98,6.7V39.021z M50,8.128l13.788,13.232H36.213L50,8.128z M39.436,46.306l-2.475-2.644L50,31.458  l13.038,12.204l-2.475,2.644l-8.752-8.194v18.675h-3.622V38.112L39.436,46.306z M17.812,39.021V52.42l-6.98-6.7L17.812,39.021z   M10.63,47.678l28.524,27.376L10.63,91.996V47.678z M13.034,92.371L40.315,76.17l9.146,8.776c0.15,0.146,0.344,0.216,0.538,0.216  s0.387-0.07,0.537-0.216l8.879-8.522l27.473,15.947H13.034z M89.369,92.019L60.582,75.307l28.787-27.628V92.019z"
    />
  </svg>
);

const GithubIcon = () => (
  <svg
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    fill="#efefef"
    strokeMiterlimit="1.414"
  >
    <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.09-.202-.36-1.015.07-2.117 0 0 .67-.215 2.2.82.64-.178 1.32-.266 2-.27.68.004 1.36.092 2 .27 1.52-1.035 2.19-.82 2.19-.82.43 1.102.16 1.915.08 2.117.51.56.82 1.274.82 2.147 0 3.073-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38C13.71 14.53 16 11.53 16 8c0-4.418-3.582-8-8-8" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    fill="#efefef"
    strokeMiterlimit="1.414"
  >
    <path
      d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51v1.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z"
      fillRule="nonzero"
    />
  </svg>
);

export default (props: { hidden: boolean }) => {
  return (
    <HeaderContainer $hidden={props.hidden}>
      <Initials>
        {letters.map((row, i) => {
          return (
            <GridRow key={i}>
              {row.map((highlighted) => (
                <GridItem $highlighted={highlighted} />
              ))}
            </GridRow>
          );
        })}
      </Initials>
      <Contact>
        <a href="mailto:web@mikep.ro">
          <Icon><EmailIcon /></Icon>
        </a>
        <a href="http://github.com/mprobber">
          <Icon><GithubIcon /></Icon>
        </a>
        <a href="http://linkedin.com/in/mprobber">
          <Icon><LinkedInIcon /></Icon>
        </a>
      </Contact>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div<{ $hidden: boolean }>`
  width: 100%;
  position: fixed;
  top: 0;
  opacity: 1;
  height: 30px;
  background-color: #000;
  transition: transform 0.3s ease-in-out;
  z-index: 10;
  transform: translateY(${({ $hidden }) => ($hidden ? -30 : 0)}px);
`;

const GridItem = styled.div<{ $highlighted: boolean }>`
  height: 3px;
  width: 3px;
  margin-right: 2px;
  background-color: ${({ $highlighted }) => ($highlighted ? "#efefef" : "111")};
`;

const GridRow = styled.div`
  display: flex;
  height: 3px;
  margin-top: 2px;
`;

const Initials = styled.div`
  margin-top: 4px;
  margin-left: 15px;
`;

const Contact = styled.div`  position: fixed;
  top: 5px;
  right: 15px;`;

  const Icon = styled.div`  display: inline-block;
  height: 18px;
  width: 18px;
  margin-left: 3px;`