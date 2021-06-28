import React, { useEffect } from "react";
import styled from "@emotion/styled";
import Data from "./Data";
import CampaignDescription from "./CampaignDescription";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";

const CampaignDetails = ({ data, modalOpen, closeModal }) => {
  useEffect(() => {}, [modalOpen]);
  return (
    <Swiper
      slidesPerView="auto"
      initialSlide={1}
      resistanceRatio={0}
      slideToClickedSlide={true}
      onSlideChangeTransitionStart={() => {
        var slider = this;
        if (slider.activeIndex === 0) {
          menuButton.classList.add("cross");
          // required because of slideToClickedSlide
          menuButton.removeEventListener("click", openMenu, true);
        } else {
          menuButton.classList.remove("cross");
        }
      }}
      onSlideChangeTransitionEnd={() => {
        var slider = this;
        if (slider.activeIndex === 1) {
          menuButton.addEventListener("click", openMenu, true);
        }
      }}
    >
      <Modal className="">
        <Detail>
          <h1>pandora</h1>
          <h2>New Bracelet 2021</h2>
          <CampaignDescription />
          <Row>
            <Data title="Category" data="Lifestyle" />
            <Data title="Category" data="Lifestyle" />
          </Row>
          <Row>
            <Data title="Category" data="Lifestyle" />
            <Data title="Category" data="Lifestyle" />
          </Row>
          <Row>
            <Data title="Category" data="Lifestyle" />
            <Data title="Category" data="Lifestyle" />
          </Row>
          <Row>
            <Data title="Category" data="Lifestyle" />
          </Row>
          <Row>
            <Data title="Category" data="Lifestyle" />
          </Row>
          <Row>
            <Data title="Category" data="Lifestyle" />
            <Data title="Category" data="Lifestyle" />
          </Row>
          <ApplyButton>Yes, I want it</ApplyButton>
          <DenyButton>No, it's not for me</DenyButton>
        </Detail>
      </Modal>
    </Swiper>
  );
};

export default CampaignDetails;
const Close = styled.div``;
const Modal = styled.div`
  display: none;
  ${({ modalOpen }) =>
    modalOpen &&
    `
    display:flex;
  `}

  position: absolute;
  z-index: 20;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  justify-content: flex-end;
  background-color: hsla(32, 0%, 10%, 0.57);
`;
const Detail = styled.div`
  transform: translateX(100%);
  position: absolute;
  width: 50%;
  height: 100%;
  background-color: #202123;
  color: white;
  padding-left: 14rem;
  padding-top: 6rem;
  h1 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  h2 {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;
const Row = styled.div`
  width: 60%;
  display: flex;
  margin-bottom: 2rem;
`;
const ApplyButton = styled.button`
  width: 60%;
  margin-bottom: 1rem;
  border: solid 2px orange;
  background-color: orange;
  border-radius: 50px;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;
const DenyButton = styled.button`
  width: 60%;
  margin-bottom: 1rem;
  border: solid 2px orange;
  background-color: transparent;
  border-radius: 50px;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;
