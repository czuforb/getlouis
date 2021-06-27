import React from "react";
import styled from "@emotion/styled";
import Campaigns from "./components/Campaigns";

const App = () => {
  return (
    <Container>
      <Navigation>
        <h2>Logo</h2>
        <h3>Burger</h3>
      </Navigation>
      <Hero>
        <h1>
          Newest <br /> campaigns
        </h1>
      </Hero>
      <Campaigns />
    </Container>
  );
};

export default App;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100vw;
  height: 100vh;
  background-color: #202123;
  padding: 3rem;
`;

const Navigation = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: auto;
  h3 {
    margin-left: auto;
  }
`;
const Hero = styled.div`
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 3rem;

  h1 {
    font-size: 4rem;
    font-weight: 500;
    color: #f4f4f4;
  }
`;
