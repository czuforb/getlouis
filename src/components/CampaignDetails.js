import React from "react";
import styled from "@emotion/styled";

const CampaignDetails = () => {
  return (
    <Detail>
      <h1>DETAIl</h1>
    </Detail>
  );
};

export default CampaignDetails;

const Detail = styled.div`
  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: hsla(32, 0%, 10%, 0.57);
`;
