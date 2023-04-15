import React from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { BounceMotion, TextMotion } from '@styles/keyframe';
import WelcomConfetti from './WelcomConfetti';

const Intro = () => {
  const router = useRouter();
  const introContents = [
    `안녕하세요`,
    <>
      <em>디자인팀</em>과 협업을 위한
    </>,
    <>
      <em>Canvas-Confetti Preview</em>
    </>,
    `입니다.`,
    <>
      <BtnBlock type="button" onClick={() => router.push('/main')}>
        시작하기
      </BtnBlock>
    </>,
  ];
  return (
    <>
      <FlexBox>
        <IntroUI>
          <h1>🎉</h1>
          <ul>
            {introContents.map((item, idx) => (
              <li key={idx} style={{ animationDelay: (idx + 1) * 0.3 + `s` }}>
                {item}
              </li>
            ))}
          </ul>
        </IntroUI>
      </FlexBox>
      <WelcomConfetti />
    </>
  );
};

export default Intro;
const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 10rem);
  @supports (-webkit-appearance: none) and (stroke-color: transparent) {
    min-height: calc(100vh - 10rem);
  }
`;

const IntroUI = styled.section`
  padding: 3rem 0;
  h1 {
    font-size: 8rem;
    text-align: center;
    animation: ${BounceMotion} 2s infinite;
  }
  ul {
    margin: 3rem auto;
    li {
      font-weight: 300;
      font-size: 2rem;
      color: #333;
      line-height: 1.4;
      text-align: center;
      animation: ${TextMotion} 1s both;
      em {
        font-weight: 300;
        color: #36f;
      }
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
