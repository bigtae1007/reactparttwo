import React from "react";
import styled from "styled-components";

const Title = () => {
  return (
    <Header>
      <TextH1>나만의 단어장</TextH1>
      <Line></Line>
    </Header>
  );
};

export default Title;

const TextH1 = styled.h1`
  text-align: center;
`;

const Line = styled.div`
  border: 1px solid rgb(219, 232, 216);
`;

const Header = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  z-index: 10;
`;
