import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { headerFontColorAtom } from '@store/store';

const GuideBox = () => {
  const headerColor = useRecoilValue(headerFontColorAtom);
  const [isDisplay, setDisplay] = useState<boolean>(true);
  return (
    <>
      <GuideUI fontColor={headerColor}>
        <InfoText className={isDisplay ? `active` : ``}>
          <h1>👨🏻‍💻 사용방법</h1>
          <p>
            1. <em>배경색 또는 이미지를 선택</em>해 주세요.
          </p>
          <p>
            2. <em>색종이 색상을 선택</em>해 주세요. (다중 선택 및 취소 가능)
          </p>
          <p>
            3. <em>꽃가루 날리기 버튼을 클릭</em>해서 배경과 어울리는 색상인지 확인하세요.
          </p>
          <p>
            4. 하단 <em>script를 개발팀에게 공유</em>해 주세요.
          </p>
        </InfoText>
        <BtnGuide type="button" onClick={() => setDisplay(!isDisplay)}>
          가이드
          <br />
          {isDisplay ? `숨기기` : `보이기`}
        </BtnGuide>
      </GuideUI>
    </>
  );
};

export default GuideBox;

const GuideUI = styled.div<{ fontColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  h1 {
    padding-bottom: 1rem;
    font-weight: 300;
    font-size: 3rem;
    color: ${(props) => props.fontColor};
    transition: 0.3s;
  }
  p {
    font-weight: 400;
    font-size: 1.6rem;
    color: #3a3a3a;
    padding: 0.2rem 0;
    color: ${(props) => props.fontColor};
    line-height: 1.4;
    transition: 0.3s;
    em {
      font-weight: 700;
    }
  }
`;

const InfoText = styled.div`
  padding-bottom: 3rem;
  opacity: 0;
  transition: 0.3s;
  &.active {
    opacity: 1;
  }
`;

const BtnGuide = styled.button`
  display: block;
  position: fixed;
  left: 4rem;
  bottom: 8rem;
  width: 5rem;
  height: 5rem;
  font-size: 1.2rem;
  color: #fff;
  background-color: #36f;
  border-radius: 0.4rem;
  transition: 0.2s;
  &:hover {
    background-color: #1c48d3;
  }
`;
