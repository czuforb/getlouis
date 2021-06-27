import React from "react";
import styled from "@emotion/styled";

const Campaigns = () => {
  return (
    <>
      <CampaignsContainer>
        <Left>Left</Left>
        <Right>Right</Right>
      </CampaignsContainer>
    </>
  );
};

export default Campaigns;

const CampaignsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 70%;
  background: grey;
`;

const Left = styled.div`
  position: absolute;
  top: 50%;
  left: 1rem;
  z-index: 3;
`;
const Right = styled.div`
  position: absolute;
  top: 50%;
  right: 1rem;
  z-index: 3;
`;
