import React from "react";
import styled from "@emotion/styled";

const App = () => {
  return (
    <div>
      <Stuff></Stuff>
    </div>
  );
};

export default App;

const Stuff = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`;
