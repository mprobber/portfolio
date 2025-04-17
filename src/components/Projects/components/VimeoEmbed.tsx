import styled from "styled-components";
type Props = {
  id: string;
};

const VimeoEmbed = ({ id }: Props) => (
  <Container>
    <iframe
      src={`https://player.vimeo.com/video/${id}`}
      width="640"
      height="360"
      frameBorder="0"
      allowFullScreen
    />
  </Container>
);

const Container = styled.div`
  text-align: center;
`;

export default VimeoEmbed;
