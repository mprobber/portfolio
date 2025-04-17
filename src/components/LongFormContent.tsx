import styled from "styled-components";

export default styled.div`
  max-width: 900px;
  align-self: center;
  text-align: justify;
  align-items: center;

  h1 {
    text-align: center;
  }

  h3 {
  text-align: left;}

  h4 {
  text-align: right;}

  p,
  strong,
  a {
    font-family: "Quicksand", sans-serif;
    font-optical-sizing: auto;
    font-weight: 300;
  }

  a {
    color: #222;
  }

  strong {
    font-style: italic;
  }
`;
