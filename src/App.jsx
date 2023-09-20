import Navbar from "./components/Navbar/Navbar";
import BioMarkt from "./pages/BioMarkt";
import Angebote from "./pages/angebote";
import Bio from "./pages/bio";
import About from "./pages/about";
import Recipe from "./pages/recipe";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<BioMarkt />}></Route>
          <Route path="/Angebote" element={<Angebote />}></Route>
          <Route path="/Rezepte" element={<Recipe />}></Route>
          <Route path="/Bio-Wissen" element={<Bio />}></Route>
          <Route path="/Ueber-Uns" element={<About />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
