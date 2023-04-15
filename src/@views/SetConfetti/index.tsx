import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import Colorful from '@views/@common/Colorful';

const SetConfettiBody = () => {
  const backgroundRef = useRef<HTMLInputElement>(null);
  const inputColorRef = useRef<HTMLInputElement>(null);
  const [isTrigger, setTrigger] = useState<boolean>(true);
  const [isWindow, setWindow] = useState<boolean>(true);
  const [color, setColor] = useState<string>('#fff');
  const handleColorChange = useCallback(
    (color: string) => {
      setColor(color);
      if (inputColorRef.current) inputColorRef.current.value = color;
    },
    [color]
  );
  useEffect(() => {
    handleColorChange('#fff');
  }, []);
  return (
    <>
      <OptionBox className={isWindow ? `active` : ``}>
        <BtnScale type="button" className={isWindow ? `active` : ``} onClick={() => setWindow(!isWindow)}>
          최소화
        </BtnScale>
        <input type="text" placeholder="배경색을 선택해 주세요." ref={backgroundRef} />
        <input
          type="text"
          ref={inputColorRef}
          onChange={() => (inputColorRef.current ? handleColorChange(inputColorRef.current.value) : null)}
        />
        <Colorful colorCode={color} handleColorChange={handleColorChange} />
        <BtnBase type="button" onClick={() => handleColorChange(color)}>
          효과 만들기
        </BtnBase>
      </OptionBox>
    </>
  );
};

export default SetConfettiBody;

const OptionBox = styled.div`
  // display:flex;
  // justify-content:center;
  // align-items:center;
  position: fixed;
  top: 10rem;
  right: 4rem;
  width: 5rem;
  height: 5rem;
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
    top: calc(50% - 15rem);
    right: calc(50% - 15rem);
    width: 30rem;
    height: 50rem;
    padding: 4rem 2rem 2rem 2rem;
    input {
      opacity: 1;
      z-index: 1;
    }
  }
`;

const BtnScale = styled.button`
  position: absolute;
  top: -0.3rem;
  right: 0.1rem;
  bottom: 0;
  left: 0;
  width: 5rem;
  height: 5rem;
  text-indent: -9999rem;
  z-index: 2;
  &:before {
    content: '';
    position: absolute;
    top: 0.1rem;
    right: 0.2rem;
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
