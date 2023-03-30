import React, { useEffect } from "react";
import JSConfetti from "js-confetti";
import styled from "styled-components";

interface SetConfettiType {
  bgColor: string | undefined;
  colors: string[];
  trigger: boolean;
}

const SetConfetti = ({ bgColor, colors, trigger }: SetConfettiType) => {
  useEffect(() => {
    const confetti: any = new JSConfetti();
    confetti.addConfetti({
      particleCount: 100,
      spread: 170,
      origin: { y: 0.6 },
      confettiColors: colors,
    });
  }, [trigger]);
  return (
    <>
      <ConfettiSection
        style={{ backgroundColor: !!bgColor ? bgColor : "#fff" }}
      ></ConfettiSection>
    </>
  );
};

export default SetConfetti;

const ConfettiSection = styled.section`
  width: 100vw;
  height: calc(100vh - 5rem);
  transition: 0.5s;
`;
