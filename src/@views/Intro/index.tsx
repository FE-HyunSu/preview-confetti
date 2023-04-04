import React from "react";
import styled from "@emotion/styled";

const Intro = () => {
  return (
    <>
      <IntroUI>
        <h1></h1>
        <ul>
          <li>test1</li>
          <li>test1</li>
          <li>test1</li>
        </ul>
      </IntroUI>
    </>
  );
};

export default Intro;

const IntroUI = styled.section`
  padding: 3rem 0;
`;
