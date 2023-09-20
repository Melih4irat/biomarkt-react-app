import styled from "styled-components";

const Card = (dataItem) => {
  return (
    <Container background={dataItem.background}>
      <Heading>{dataItem.heading}</Heading>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  ${(props) =>
    props.background ? `background-image: url(${props.background});` : ""}
  width: 100%;
  height: 100%;

  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-image: none;
    background-color: #8eb32d;
  }
`;

const Heading = styled.h2`
  font-size: 20px;
`;
