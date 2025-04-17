import styled from "styled-components";
import me from "./me.jpg";

export default () => (
  <Intro id="about">
    <Avatar src={me} />

    <TextContainer>
      <Hi>Hello!</Hi>
      <Sentence>My name is Michael Probber</Sentence>
      <Sentence>
        I'm a full stack software engineer with an interest in design, living in
        the San Francisco Bay Area.
      </Sentence>
      <Sentence>
        I grew up in the New York area, and went to University in Pittsburgh,
        PA. When I'm not at the computer, I like to travel, shoot pictures, see
        live music, and cycle.
      </Sentence>
    </TextContainer>
  </Intro>
);

const Hi = styled.h1`
  text-align: center;
  margin: 0;
  margin-bottom: 4px;
`;

const Sentence = styled.p`
  margin: 8px;
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
`;

const Intro = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: stretch; // Make children match each other's height
  flex-direction: row;
  @media only screen and (max-width: 688px) {
    flex-direction: column;
    align-items: center; // This keeps things centered on mobile
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  max-width: 520px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 200px;
  display: flex;
  margin-bottom: 0;
  margin-right: 40px;
  flex-grow: 0;
  align-self: center;
  flex-shrink: 0;
  margin: 25px;
`;
