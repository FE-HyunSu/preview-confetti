import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import Colorful from '@views/@common/Colorful';

interface OptionBoxT {
  color: string;
  colorIdx: number;
  setColor: any;
  isWindow: boolean;
}

const ColorBox = ({ color, colorIdx, setColor, isWindow }: OptionBoxT) => {
  const inputColorRef = useRef<HTMLInputElement>(null);
  const inputColorItemRef = useRef<HTMLInputElement>(null);
  const [isColorSelectBoxView, setColorSelectBoxView] = useState<boolean>(false);
  const [selectColor, setSelectColor] = useState<string>('#fff');

  const handleColorChange = (color: string) => {
    setSelectColor(color);
    if (inputColorItemRef.current) inputColorItemRef.current.value = color;
  };
  useEffect(() => {
    handleColorChange('#ffffff');
  }, []);
  useEffect(() => {
    if (!isWindow) setColorSelectBoxView(false);
  }, [isWindow]);
  return (
    <>
      <ColorBoxUI>
        <BtnColorPad
          type="button"
          style={{ backgroundColor: selectColor }}
          onClick={() => setColorSelectBoxView(!isColorSelectBoxView)}>
          색상박스
        </BtnColorPad>
        <input
          type="text"
          ref={inputColorItemRef}
          maxLength={7}
          onChange={() => (inputColorItemRef.current ? handleColorChange(inputColorItemRef.current.value) : null)}
        />
        <BtnApply type="button">추가</BtnApply>
        <ColorSelectBox className={isColorSelectBoxView ? `active` : ``}>
          <p>{selectColor}</p>
          <BtnSelect type="button" onClick={() => setColorSelectBoxView(false)}>
            선택
          </BtnSelect>
          <Colorful colorCode={selectColor} handleColorChange={handleColorChange} />
        </ColorSelectBox>
      </ColorBoxUI>
    </>
  );
};

export default ColorBox;

const ColorBoxUI = styled.div`
  display: flex;
`;

const BtnColorPad = styled.button`
  flex: auto;
  flex-shrink: 0;
  width: 3.6rem;
  height: 3.6rem;
  margin-right: 0.5rem;
  background-color: #eee;
  text-indent: -9999rem;
  border: 0.1rem solid #eee;
  border-radius: 0.4rem;
`;

const ColorSelectBox = styled.div`
  display: none;
  position: absolute;
  top: calc(100% + 1rem);
  right: 0;
  padding: 2rem;
  border: 0.1rem solid #ddd;
  background-color: #fff;
  border-radius: 0.8rem;
  z-index: 10;
  p {
    padding: 0 1rem 1rem 0.5rem;
    font-size: 1.2rem;
    color: #999;
  }
  &.active {
    display: block;
  }
`;

const BtnSelect = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 1rem 1.2rem;
  font-size: 1.2rem;
  color: #1a1a1a;
  background-color: #fff;
`;

const BtnApply = styled.button`
  font-size: 1.4rem;
  width: 5rem;
  height: 3.5rem;
  margin-left: 0.5rem;
  flex-shrink: 0;
  box-sizing: border-box;
  border-radius: 0.4rem;
  color: #fff;
  background-color: #36f;
  border-radius: 0.4rem;
  transition: 0.3s;
  &:hover {
    background-color: #1c48d3;
  }
`;
