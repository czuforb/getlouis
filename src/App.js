import React, { useRef } from "react";
import styled from "@emotion/styled";
import Campaigns from "./components/Campaigns";
import CampaignDetails from "./components/CampaignDetails";
import { data } from "./data/data";
import { Swiper } from "swiper/react";

const App = () => {
  const openModal = () => {
    console.log("open");
    swiperRef.current.swiper.slideNext();
  };
  const closeModal = () => {
    swiperRef.current.swiper.slidePrev();
  };
  const swiperRef = useRef();
  return (
    <>
      <Container>
        <Navigation>
          <h2>Logo</h2>
          <button>Create a campaign</button>
          <a>The Hub</a>
          <a>Menu</a>
        </Navigation>
        <Hero>
          <h1>
            Newest <br /> campaigns
          </h1>
        </Hero>
        <Campaigns openModal={openModal} />
        <DetailsContainer>
          <Swiper
            ref={swiperRef}
            initialSlide={1}
            resistanceRatio={0}
            slideToClickedSlide={true}
            slidesPerView={1}
            allowTouchMove={false}
          >
            <CampaignDetails closeModal={closeModal} data={data} />
          </Swiper>
        </DetailsContainer>
      </Container>
    </>
  );
};

export default App;

const Container = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
  align-items: center;
  margin-bottom: auto;
  color: white;
  a {
    margin-left: 2rem;
    margin-right: 2rem;
  }
  h2 {
    width: 40px;
    height: 40px;
    background-color: #f2f2f2;
  }
  button {
    margin-left: auto;
    border: solid 2px orange;
    background-color: transparent;
    border-radius: 50px;
    color: white;
    font-size: 1rem;
    font-weight: 500;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
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

const DetailsContainer = styled.div`
  display: none;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
`;
