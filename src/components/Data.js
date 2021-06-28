import React from "react";
import styled from "@emotion/styled";

const Data = ({ title, data }) => {
  return (
    <Tag>
      <span>{title}</span> <br />
      {data}
    </Tag>
  );
};

export default Data;

const Tag = styled.h3`
  width: 50%;
  font-size: 1.25rem;
  font-weight: 500;
  span {
    font-size: 0.75rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }
`;
