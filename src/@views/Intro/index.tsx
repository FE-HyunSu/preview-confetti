import React, { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
// import SetConfetti from "@views/SetConfetti/SetConfettiBox";
import { useRouter } from "next/router";

const Intro = () => {
  const backgroundRef = useRef<HTMLInputElement>(null);
  const [isTrigger, setTrigger] = useState<boolean>(true);
  const router = useRouter();
  useEffect(() => {
    setTrigger(true);
  }, []);
  return (
    <>
      <IntroUI>
        <ul>
          <li>안녕하세요</li>
          <li>
            <em>디자인팀</em>과 협업을 위한
          </li>
          <li>CONFETTI 테스트 페이지 입니다.</li>
        </ul>
        <Btn type="button" onClick={() => router.push("/main")}>
          시작하기
        </Btn>
      </IntroUI>
      {/* <SetConfetti
        bgColor={!!backgroundRef.current ? backgroundRef.current.value : `#fff`}
        colors={["#fff000", "#ff0000", "#000"]}
        trigger={isTrigger}
      /> */}
    </>
  );
};

export default Intro;

const IntroUI = styled.section`
  padding: 3rem 0;
  h1 {
    font-size: 2rem;
    text-align: center;
  }
  ul {
    li {
      font-weight: 200;
      font-size: 2rem;
      color: #333;
      line-height: 1.4;
      text-align: center;
      em {
        font-weight: 200;
        color: #ff0000;
      }
    }
  }
`;

const Btn = styled.button`
  padding: 1rem;
  background-color: #eee;
`;
