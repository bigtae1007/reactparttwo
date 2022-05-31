import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

export default function BlindView() {
  return (
    <WrapDiv>
      <div>
        <p> 로딩중.....</p>
      </div>
    </WrapDiv>
  );
}
const FontAnimation = keyframes`
0%{
  transform: translate(-100%, -100%);
}
25%{
  transform: translate(100%, 100%);

}
50%{
  transform: translate(100%, -100%);

}
75%{
  transform: translate(-100%, 100%);

}
100%{
  transform: translate(-100%, -100%);

}
`;

const WrapDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #86efac;
  justify-content: center;
  align-items: center;
  & > div {
    position: absolute;
    width: 300px;
    height: 200px;
    border: bold;
    font-size: 4em;
    animation: ${FontAnimation} infinite 20s linear;
  }
`;
