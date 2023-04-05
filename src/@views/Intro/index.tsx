import React, { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
// import SetConfetti from "@views/SetConfetti/SetConfettiBox";
import { useRouter } from "next/router";

const Intro = () => {
  const backgroundRef = useRef<HTMLInputElement>(null);
  const [isTrigger, setTrigger] = useState<boolean>(true);
  const router = useRouter();
  const nextPageAction = () => {
    router.push("/main");
  };
  useEffect(() => {
    setTrigger(true);
  }, []);
  return (
    <>
      <IntroUI>
        <h1>CONFETTI REVIEW</h1>
        <ul>
          <li>안녕하세요</li>
          <li>CONFETTI 테스트 페이지 입니다.</li>
        </ul>
        <button type="button" onClick={() => nextPageAction()}>
          시작하기
        </button>
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
`;
