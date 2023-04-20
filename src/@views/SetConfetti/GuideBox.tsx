import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { headerFontColorAtom } from '@store/store';

const GuideBox = () => {
  const headerColor = useRecoilValue(headerFontColorAtom);
  const [isDisplay, setDisplay] = useState<boolean>(false);
  return (
    <>
      <GuideUI fontColor={headerColor}>
        <InfoText className={isDisplay ? `active` : ``}>
          <p>1. 배경색을 선택해 주세요.</p>
          <p>2. 색종이 색상을 선택해 주세요. (다중 선택 및 취소 가능)</p>
          <p>3. 꽃가루 날리기 버튼을 눌러 배경색과 어울리는 색상을 지정하세요.</p>
          <p>4. 하단 script를 개발팀에게 공유해 주세요.</p>
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
  p {
    font-weight: 400;
    font-size: 1.4rem;
    color: ${(props) => props.fontColor};
    line-height: 1.4;
  }
`;

const InfoText = styled.div`
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
