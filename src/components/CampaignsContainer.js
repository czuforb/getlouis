import React from "react";
import styled from "@emotion/styled";
import Slide from "./Slide";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";
// import data
import { data } from "../data/data";
// install Swiper modules
SwiperCore.use([Navigation]);

const Campaigns = () => {
  return (
    <>
      <CampContainer>
        <Swiper navigation={true} spaceBetween={32} slidesPerView={3.75}>
          {data.map((e, i) => (
            <SwiperSlide key={i}>
              <Slide data={e} />
            </SwiperSlide>
          ))}
        </Swiper>
      </CampContainer>
    </>
  );
};

export default Campaigns;

const CampContainer = styled.div`
  width: 100%;
  height: 70%;
  @media only screen and (max-device-width: 375px) and (max-device-height: 812px) and (orientation: portrait) {
  }
  @media only screen and (min-device-width: 768px) and (min-device-height: 1014px) and (orientation: portrait) {
  }
  @media only screen and (max-device-width: 1024px) and (max-device-height: 768px) and (orientation: landscape) {
  }
`;
