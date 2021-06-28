import React from "react";
import styled from "@emotion/styled";

const CampaignCard = ({ data, openCampaignModal, modal }) => {
  const { brand, title, image } = data;
  return (
    <CampaignSlide image={image}>
      <Text>
        <h2>{brand.name}</h2>
        <h3>{title}</h3>
      </Text>
    </CampaignSlide>
  );
};

export default CampaignCard;

const CampaignSlide = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 2rem;
  background: url(${(props) => props.image});
  /* background: url("/images/pandora.jpg"); */
  object-fit: contain;
  background-size: cover;
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
