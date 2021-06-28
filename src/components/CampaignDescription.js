import React from "react";
import styled from "@emotion/styled";

const CampaignDescription = () => {
  return (
    <Description>
      <span>Campaign description:</span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
        necessitatibus voluptas numquam eaque incidunt libero explicabo autem
        amet culpa in possimus, cupiditate dicta maiores placeat laboriosam.
        Quidem ab dicta optio! Ex vel cupiditate, est dolorum omnis natus maxime
        possimus temporibus assumenda unde, animi nihil corporis tempora,
        accusantium ipsam molestias earum repellendus amet! Delectus doloribus
        architecto repellat, cumque labore veritatis quaerat!
      </p>
      <button>Read more</button>
    </Description>
  );
};

export default CampaignDescription;
const Description = styled.div`
  width: 60%;
  margin-bottom: 1.5rem;
  span {
    font-size: 0.75rem;
  }

  p {
    margin-top: 1rem;
    line-height: 120%;
    height: 60px;
    overflow-y: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  button {
    background-color: transparent;
    border: none;
    color: orange;
    padding: 0;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }
`;
