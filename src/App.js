import React from "react";
import styled from "@emotion/styled";
import Campaigns from "./components/CampaignsContainer";

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
  /* max-width: 1440px;
  margin-left: auto;
  margin-right: auto; */
  width: 100vw;
  height: 100vh;
  background-color: #202123;
  padding: 3rem;
  @media only screen and (max-device-width: 375px) and (max-device-height: 812px) and (orientation: portrait) {
    background-color: grey;
  }
  @media only screen and (min-device-width: 768px) and (min-device-height: 1014px) and (orientation: portrait) {
    background-color: red;
  }
  @media only screen and (max-device-width: 1024px) and (max-device-height: 768px) and (orientation: landscape) {
    background-color: green;
  }
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
