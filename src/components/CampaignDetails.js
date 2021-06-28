import React, { useState } from "react";
import styled from "@emotion/styled";
import Data from "./Data";
import CampaignDescription from "./CampaignDescription";
import { SwiperSlide } from "swiper/react";

const CampaignDetails = ({ data, closeModal }) => {
  const [applied, setapplied] = useState(false);

  const toggleApply = () => setapplied(!applied);
  return (
    <>
      <SwiperSlide>
        <FullPageSlide />
      </SwiperSlide>
      <SwiperSlide>
        <FullPageSlide>
          <Close
            onClick={() => {
              closeModal();
            }}
          >
            Close
          </Close>
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
            <ApplyButton onClick={() => toggleApply()} applied={apllied}>
              {applied ? "Applied" : "Yes, I want it"}
            </ApplyButton>
            <DenyButton>No, it's not for me</DenyButton>
          </Detail>
        </FullPageSlide>
      </SwiperSlide>
    </>
  );
};

export default CampaignDetails;

const Close = styled.div`
  position: absolute;
  z-index: 10;
  top: 2rem;
  right: 2rem;
  width: 100px;
  height: 100px;
  color: white;
`;
const FullPageSlide = styled.div`
  z-index: 20;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  background-color: hsla(32, 0%, 10%, 0.57);
`;

const Detail = styled.div`
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
  border: solid 2px ${(props) => (props.applied ? "darkgray" : "orange")};
  background-color: ${(props) => (props.applied ? "darkgray" : "orange")};
  border-radius: 50px;
  color: ${(props) => (props.applied ? "darkgray" : "white")};
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
