import React from "react";
import styled from "@emotion/styled";

const Slide = ({ data }) => {
  const { brand, title } = data;
  return (
    <CampaignSlide>
      <Text>
        <h2>{brand.name}</h2>
        <h3>{title}</h3>
      </Text>
    </CampaignSlide>
  );
};

export default Slide;

const CampaignSlide = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  background: url("/images/pandora.jpg");
  object-fit: cover;
`;

const Text = styled.div`
  position: absolute;
  bottom: 2rem;
  color: #f4f4f4;
  h2 {
    font-size: 3.25rem;
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;
