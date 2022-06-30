import React from "react";
import { styled, keyframes } from "frontity";

const Loading = () => <Spinner />;

export default Loading;

const spin = keyframes`
  0% {transform: rotate(0deg)}
  100% {transform: rotate(360deg)}`;

const Spinner = styled.div`
  border: 12px solid whitesmoke;
  border-top: 12px solid steelblue;
  border-radius: 50%;
  width: 75px;
  height: 75px;
  animation: ${spin} 2s linear infinite;
`;
