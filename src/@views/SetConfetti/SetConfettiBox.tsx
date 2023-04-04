import React, { useEffect } from "react";
import JSConfetti from "js-confetti";
import styled from "@emotion/styled";

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
      // spread: 360,
      origin: { x: 0.5, y: 0.6 },
      // startVelocity: 30,
      spread: 25,
      startVelocity: 55,
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
