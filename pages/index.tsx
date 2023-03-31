import React, { useState, useRef, useEffect } from "react";
import SetConfetti from "@views/SetConfetti";
import styled from "styled-components";

const Index = () => {
  const backgroundRef = useRef<HTMLInputElement>(null);
  const [isTrigger, setTrigger] = useState<boolean>(true);
  const [isWindow, setWindow] = useState<boolean>(true);
  return (
    <>
      <OptionBox className={isWindow ? `active` : ``}>
        <BtnScale
          type="button"
          className={isWindow ? `active` : ``}
          onClick={() => setWindow(!isWindow)}
        >
          최소화
        </BtnScale>
        <input
          type="text"
          placeholder="배경색을 선택해 주세요."
          ref={backgroundRef}
        />
        <input type="text" placeholder="test" />
        <BtnBase type="button" onClick={() => setTrigger(!isTrigger)}>
          효과 만들기
        </BtnBase>
      </OptionBox>
      <SetConfetti
        bgColor={!!backgroundRef.current ? backgroundRef.current.value : `#fff`}
        colors={["#fff000", "#ff0000", "#000"]}
        trigger={isTrigger}
      />
    </>
  );
};

export default Index;

const OptionBox = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: calc(100% - 40rem);
  left: calc(100% - 20rem);
  width: 6rem;
  height: 6rem;
  margin: auto;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.7);
  border: 0.1rem solid #ccc;
  border-radius: 1rem;
  box-sizing: border-box;
  transition: 0.3s;
  overflow: hidden;
  input {
    width: 100%;
    margin-bottom: 0.5rem;
    padding: 1rem;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 0.4rem;
    border: 0.1rem solid #eee;
    outline: 0;
  }
  input {
    opacity: 0;
    z-index: -1;
  }
  &.active {
    width: 30rem;
    height: 40rem;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    padding: 12rem 2rem 2rem 2rem;
    input {
      opacity: 1;
      z-index: 1;
    }
  }
`;

const BtnScale = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 5rem;
  height: 5rem;
  text-indent: -9999rem;
  z-index: 2;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 0.6rem;
    height: 0.6rem;
    margin: auto;
    border-right: 0.1rem solid #333;
    border-bottom: 0.1rem solid #333;
    transform: rotate(45deg);
    transition: 0.3s;
  }
  &.active {
    bottom: auto;
    left: auto;
    &:before {
      transform: rotate(-135deg);
    }
  }
`;

const BtnBase = styled.button`
  width: 100%;
  height: 4rem;
  margin-top: 2rem;
  font-size: 1.4rem;
  color: #fff;
  background-color: #333;
  border-radius: 0.4rem;
  transition: 0.4s;
  z-index: 2;
  &:hover {
    background-color: #111;
  }
`;
