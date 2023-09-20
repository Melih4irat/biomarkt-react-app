import styled from "styled-components";
import { useState, useEffect } from "react";
import Card from "./Card";

export default function Cards() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/src/_data/category.json");
        const jsonData = await response.json();
        console.log(jsonData);
        setCategories(jsonData);
      } catch (error) {
        console.log(error, "error");
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      {categories.map((dataItem, index) => (
        <a key={index} href="/angebote">
          <Card
            key={dataItem.id}
            heading={dataItem.heading}
            background={dataItem.background}
          />
        </a>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  margin: 30px 0 50px 0;

  & a {
    width: 270px;
    height: 115px;
  }
`;
