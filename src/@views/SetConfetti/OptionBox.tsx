import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import Colorful from '@views/@common/Colorful';
import { useRecoilState } from 'recoil';
import { headerFontColorAtom } from '@store/store';

interface OptionBoxT {
  color: string;
  setColor: any;
}

const OptionBox = ({ color, setColor }: OptionBoxT) => {
  const [isHeaderFontColor, setHeaderFontColor] = useRecoilState(headerFontColorAtom);
  const inputColorRef = useRef<HTMLInputElement>(null);
  const [isWindow, setWindow] = useState<boolean>(true);
  const [isColorSelectBoxView, setColorSelectBoxView] = useState<boolean>(false);
  const handleColorChange = useCallback(
    (color: string) => {
      setColor(color);
      if (inputColorRef.current) inputColorRef.current.value = color;
      !!Number(color[1]) || Number(color[1]) === 0
        ? Number(color[1]) <= 6
          ? setHeaderFontColor('#ddd')
          : setHeaderFontColor('#1a1a1a')
        : setHeaderFontColor('#1a1a1a');
    },
    [color]
  );
  useEffect(() => {
    handleColorChange('#FFFFFF');
  }, []);
  useEffect(() => {
    if (!isWindow) setColorSelectBoxView(false);
  }, [isWindow]);
  return (
    <>
      <OptionBoxUI className={isWindow ? `active` : ``}>
        <BtnScale type="button" className={isWindow ? `active` : ``} onClick={() => setWindow(!isWindow)}>
          최소화
        </BtnScale>
        <dl>
          <dt>배경색을 선택해 주세요.</dt>
          <dd>
            <input
              type="text"
              ref={inputColorRef}
              maxLength={7}
              onChange={() => (inputColorRef.current ? handleColorChange(inputColorRef.current.value) : null)}
            />
            <BtnColorPad
              type="button"
              style={{ backgroundColor: color }}
              onClick={() => setColorSelectBoxView(!isColorSelectBoxView)}>
              색상박스
            </BtnColorPad>
            <ColorSelectBox className={isColorSelectBoxView ? `active` : ``}>
              <BtnClose type="button" onClick={() => setColorSelectBoxView(false)}>
                닫기
              </BtnClose>
              <Colorful colorCode={color} handleColorChange={handleColorChange} />
            </ColorSelectBox>
          </dd>
        </dl>
        <BtnBlock type="button" onClick={() => handleColorChange(color)}>
          효과 만들기
        </BtnBlock>
      </OptionBoxUI>
    </>
  );
};

export default OptionBox;

const OptionBoxUI = styled.div`
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
    padding: 0 1rem;
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
    height: 30rem;
    padding: 4rem 2rem 2rem 2rem;
    overflow: visible;
    input {
      opacity: 1;
      z-index: 1;
    }
    dl {
      opacity: 1;
    }
  }
  dl {
    opacity: 0;
    dt {
      padding: 0.8rem 0;
      font-weight: 300;
      font-size: 1.4rem;
      color: #000;
    }
    dd {
      display: flex;
      position: relative;
    }
  }
`;

const BtnColorPad = styled.button`
  flex: auto;
  flex-shrink: 0;
  width: 3.6rem;
  height: 3.6rem;
  margin-left: 0.5rem;
  background-color: #eee;
  text-indent: -9999rem;
  border: 0.1rem solid #eee;
  border-radius: 0.4rem;
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

const BtnBlock = styled.button`
  display: block;
  min-width: 24rem;
  margin: 3rem auto 0;
  padding: 1.4rem;
  color: #fff;
  background-color: #36f;
  border-radius: 0.4rem;
  transition: 0.3s;
  &:hover {
    background-color: #1c48d3;
  }
`;

const ColorSelectBox = styled.div`
  display: none;
  position: absolute;
  top: calc(100% + 1rem);
  right: 0;
  padding: 4rem 2rem 2rem 2rem;
  border: 0.1rem solid #ddd;
  background-color: #fff;
  border-radius: 0.8rem;
  &.active {
    display: block;
  }
`;

const BtnClose = styled.button`
  position: absolute;
  top: 1rem;
  right: 2rem;
  width: 2rem;
  height: 2rem;
  text-indent: -999rem;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 1.4rem;
    height: 0.1rem;
    margin: auto;
    background-color: #111;
    transform: rotate(45deg);
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 1.4rem;
    height: 0.1rem;
    margin: auto;
    background-color: #111;
    transform: rotate(-45deg);
  }
`;
