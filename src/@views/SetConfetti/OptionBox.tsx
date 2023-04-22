import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import Colorful from '@views/@common/Colorful';
import { useRecoilState } from 'recoil';
import { headerFontColorAtom } from '@store/store';
import { MotionIntro } from '@styles/keyframe';
import ColorBox from './ColorBox';
import CustomConfetti from '@views/Intro/CustomConfetti';
import { produce } from 'immer';
import CopyText from './CopyText';

interface OptionBoxT {
  color: string;
  setColor: (item: string) => void;
  setImageItem: (item: string) => void;
  setBgFull: any;
  isBgFull: boolean;
}

const OptionBox = ({ color, setColor, setImageItem, setBgFull, isBgFull }: OptionBoxT) => {
  const [isHeaderFontColor, setHeaderFontColor] = useRecoilState(headerFontColorAtom);
  const inputColorRef = useRef<HTMLInputElement>(null);
  const colorItemsRef = useRef<HTMLUListElement>(null);
  const [isWindow, setWindow] = useState<boolean>(true);
  const [isColorSelectBoxView, setColorSelectBoxView] = useState<boolean>(false);
  const [itemColors, setItemColors] = useState<string[]>([]);
  const [isAction, setAction] = useState<boolean>(false);
  const fileBoxRef = useRef<HTMLInputElement>(null);
  const [bgImage, setBgImage] = useState<string>('');
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
  const ConfettiAction = (colors: string[]) => {
    if (colors.length > 0) setAction(!isAction);
  };
  const removeColorItem = (idx: number) => {
    const colorGroups = produce(itemColors, (draft) => {
      draft.splice(idx, 1);
    });
    setItemColors(colorGroups);
    setColorSelectBoxView(false);
  };
  const imageSet = (imageItem: any) => {
    const file = imageItem.current.files[0];
    const reader = new FileReader();
    try {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setBgImage(reader.result);
          setImageItem(reader.result);
        }
      };
    } catch (e) {
      console.log(e);
    }
  };
  const bgImageReset = () => {
    setBgImage('');
    setImageItem('');
  };
  useEffect(() => {
    handleColorChange('#ffffff');
  }, []);
  useEffect(() => {
    if (!isWindow) setColorSelectBoxView(false);
  }, [isWindow]);

  return (
    <>
      <OptionBoxUI className={isWindow ? `active` : ``}>
        <BtnScale
          type="button"
          className={isWindow ? `active` : ``}
          fontColor={isHeaderFontColor}
          onClick={() => setWindow(!isWindow)}>
          최소화
        </BtnScale>
        <dl>
          <dt>🎨 배경색을 선택해 주세요.</dt>
          <dd>
            <BtnColorPad
              type="button"
              style={{ backgroundColor: color }}
              onClick={() => setColorSelectBoxView(!isColorSelectBoxView)}>
              색상박스
            </BtnColorPad>
            <input
              type="text"
              ref={inputColorRef}
              maxLength={7}
              onChange={() => (inputColorRef.current ? handleColorChange(inputColorRef.current.value) : null)}
            />
            <ColorSelectBox className={isColorSelectBoxView ? `active` : ``}>
              <p>{color}</p>
              <BtnSelect type="button" onClick={() => setColorSelectBoxView(false)}>
                선택
              </BtnSelect>
              <Colorful colorCode={color} handleColorChange={handleColorChange} />
            </ColorSelectBox>
          </dd>
          <dt>🖼 배경 이미지를 선택해 주세요</dt>
          <dd>
            <ImageBoxGroup>
              <input type="file" ref={fileBoxRef} accept="image/*" onChange={() => imageSet(fileBoxRef)} />
              {bgImage !== '' ? (
                <PreviewBox style={{ backgroundImage: `url(` + bgImage + `)` }}></PreviewBox>
              ) : (
                <ImageUploadBox>이미지 가져오기</ImageUploadBox>
              )}
            </ImageBoxGroup>
            {bgImage !== '' ? (
              <React.Fragment>
                <BtnImageSize
                  type="button"
                  className={bgImage === '' ? `disabled` : ``}
                  onClick={() => setBgFull(!isBgFull)}>
                  배경Size
                  <br />
                  {isBgFull ? `원본` : `100%`}
                </BtnImageSize>
                <BtnImageReset
                  type="button"
                  onClick={() => bgImageReset()}
                  className={bgImage === '' ? `disabled` : ``}>
                  이미지 해제
                </BtnImageReset>
              </React.Fragment>
            ) : null}
          </dd>
          <dt>🎉 꽃가루 색상 - 다중선택가능</dt>
          <dd>
            <ul ref={colorItemsRef}>
              {itemColors &&
                itemColors.map((item: string, idx: number) => (
                  <li key={idx}>
                    <BtnColorItem type="button" style={{ backgroundColor: item }} onClick={() => removeColorItem(idx)}>
                      아이템 색상
                    </BtnColorItem>
                  </li>
                ))}
            </ul>
          </dd>
          <dd>
            <ColorBox isWindow={isWindow} itemColors={itemColors} setItemColors={setItemColors} />
          </dd>
        </dl>
        <BtnBlock className={!isWindow ? `active` : ``} type="button" onClick={() => ConfettiAction(itemColors)}>
          꽃가루 날리기
        </BtnBlock>
        <CopyText colors={itemColors} />
      </OptionBoxUI>
      {itemColors.length > 0 ? <CustomConfetti colors={itemColors} toggleItem={isAction} /> : null}
    </>
  );
};

export default OptionBox;

const OptionBoxUI = styled.div`
  position: fixed;
  top: 9rem;
  right: 4rem;
  width: 5rem;
  height: 10rem;
  margin: auto;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.2);
  border: 0.1rem solid #eee;
  border-radius: 1rem;
  box-sizing: border-box;
  transition: 0.3s;
  overflow: hidden;
  animation: ${MotionIntro} 0.4s both;
  input[type='text'] {
    width: 100%;
    height: 3.6rem;
    padding: 0 1rem;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 0.4rem;
    border: 0.1rem solid #eee;
    outline: 0;
    opacity: 0;
    z-index: -1;
  }
  &.active {
    width: 30rem;
    height: 52rem;
    padding: 4rem 2rem 2rem 2rem;
    background-color: rgba(255, 255, 255, 0.7);
    overflow: auto;
    z-index: 2;
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
      & + dt {
        padding-top: 2rem;
      }
      & + dd {
        padding-top: 0.8rem;
      }
      ul {
        display: flex;
        width: 26rem;
        flex-wrap: wrap;
        li {
          &:first-of-type {
            button {
              margin-left: 0;
            }
          }
        }
      }
    }
  }
`;

const BtnColorPad = styled.button`
  flex: auto;
  flex-shrink: 0;
  width: 3.6rem;
  height: 3.6rem;
  margin-right: 0.5rem;
  text-indent: -9999rem;
  border: 0.1rem solid #eee;
  border-radius: 0.4rem;
`;

const BtnColorItem = styled.button`
  flex: auto;
  flex-shrink: 0;
  position: relative;
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
  text-indent: -9999rem;
  border: 0.1rem solid #eee;
  border-radius: 100%;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 0.8rem;
    height: 0.1rem;
    margin: auto;
    background-color: transparent;
    transform: rotate(0deg);
    transition: 0.3s;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 0.8rem;
    height: 0.1rem;
    margin: auto;
    background-color: transparent;
    transform: rotate(90deg);
    transition: 0.3s;
  }
  &:hover {
    &:before {
      background-color: #000;
      transform: rotate(45deg);
    }
    &:after {
      background-color: #000;
      transform: rotate(-45deg);
    }
  }
`;

const BtnScale = styled.button<{ fontColor: string }>`
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
    border-right: 0.1rem solid ${(props) => props.fontColor};
    border-bottom: 0.1rem solid ${(props) => props.fontColor};
    transform: rotate(45deg);
    transition: 0.2s;
  }
  &.active {
    bottom: auto;
    left: auto;
    &:before {
      border-right: 0.1rem solid #1a1a1a;
      border-bottom: 0.1rem solid #1a1a1a;
      transform: rotate(-135deg);
    }
  }
`;

const BtnBlock = styled.button`
  display: block;
  width: 100%;
  margin: 3rem auto 0;
  padding: 1.4rem;
  color: #fff;
  background-color: #36f;
  border-radius: 0.4rem;
  transition: 0.3s;
  &:hover {
    background-color: #1c48d3;
  }
  &.active {
    position: absolute;
    top: 2rem;
    width: 2.8rem;
    min-width: 2.8rem;
    height: 3rem;
    box-sizing: border-box;
    text-indent: -9999rem;
    &:before {
      content: '🎉';
      position: absolute;
      top: 0.6rem;
      right: 0;
      left: 0;
      margin: auto;
      text-indent: 0;
      line-height: 1;
      font-size: 1.8rem;
    }
  }
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

const BtnImageReset = styled.button`
  padding: 0 1rem;
  height: 4.4rem;
  color: #fff;
  background-color: #e16161;
  border-radius: 0.4rem;
  transition: 0.3s;
  flex-shrink: 0;
  &.disabled {
    background-color: #ddd;
    &:hover {
      background-color: #ddd;
    }
  }
  &:hover {
    background-color: #ca3c3c;
  }
`;

const BtnImageSize = styled.button`
  padding: 0 1rem;
  height: 4.4rem;
  color: #fff;
  margin-right: 0.5rem;
  background-color: #36f;
  border-radius: 0.4rem;
  transition: 0.3s;
  flex-shrink: 0;
  font-size: 1.2rem;
  &.disabled {
    background-color: #ddd;
    &:hover {
      background-color: #ddd;
    }
  }
  &:hover {
    background-color: #1c48d3;
  }
`;

const ImageBoxGroup = styled.label`
  flex: 1 auto;
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 1px;
    opacity: 0;
    z-index: 0;
  }
`;

const PreviewBox = styled.div`
  width: calc(100% - 1rem);
  height: 4.4rem;
  border: 0.1rem solid #eee;
  border-radius: 0.4rem;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
`;

const ImageUploadBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4.4rem;
  font-size: 1.4rem;
  color: #fff;
  background-color: #36f;
  box-sizing: border-box;
  border-radius: 0.4rem;
  transition: 0.3s;
  &:hover {
    background-color: #1c48d3;
  }
`;
