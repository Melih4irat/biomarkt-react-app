import Cards from "../components/Categories/Cards";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Angebote() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/src/_data/angebote.json");
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData[0]);
      } catch (error) {
        console.log(error, "error");
      }
    };
    fetchData();
  }, []);

  const imageOrder = (imageFirst) => {
    return (
      <>
        {imageFirst && <Img src={data.cta.image} alt="CTA Bild" />}
        <OfferContainer>
          <h3>{data.cta.heading}</h3>
          <p>{data.cta.text}</p>
        </OfferContainer>
        {!imageFirst && <Img src={data.cta.image} alt="CTA Bild" />}
      </>
    );
  };

  return (
    <Section>
      <Grid>
        <Breadcrumbs />
        <Cards />
      </Grid>

      {data && (
        <Box>
          <Grid>
            <InnerBox>
              <Heading>{data.heading}</Heading>
              <Paragraph>{data.paragraph}</Paragraph>
            </InnerBox>
          </Grid>
          <GreenBox>
            <Grid>
              <Content>{imageOrder(false)}</Content>
              <Button onClick={"/"}>{data.cta.button}</Button>
            </Grid>
          </GreenBox>
        </Box>
      )}
    </Section>
  );
}

const Section = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
`;
const Grid = styled.div`
  width: 80%;
  max-width: 1400px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  margin: 0;
`;
const Paragraph = styled.p`
  margin: 0;
  font-size: 22px;
`;
const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f3eee8;
  width: 100%;

  margin-top: 60px;
  padding-top: 100px;
`;
const InnerBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;

  align-items: center;
  top: -30px;
  @media (max-width: 675px) {
    & h1 {
      font-size: 2.5rem;
    }
    & p {
      font-size: 16px;
    }
  }
`;
const GreenBox = styled.div`
  background-color: #005346;
  width: 100%;
  padding: 20px;

  display: flex;
  justify-content: center;
  position: relative;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  & h3 {
    color: #aac900;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 900;
  }
  & p {
    color: white;
    font-size: 16px;
  }
  @media (max-width: 1010px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Button = styled.button`
  position: absolute;
  padding: 5px 15px;
  bottom: -20px;

  background-color: #aac900;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 600;
  height: 40px;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
  @media (max-width: 675px) {
    font-size: 12px;
  }
`;

const OfferContainer = styled.div`
  max-width: 50%;
  @media (max-width: 1010px) {
    max-width: 80%;
    margin-bottom: 20px;
  }
`;
const Img = styled.img`
  @media (max-width: 1010px) {
    width: 80%;
    margin-bottom: 30px;
  }
`;
