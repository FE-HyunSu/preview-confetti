import React, { useState, useRef, useEffect } from "react";
import SetConfetti from "@views/SetConfetti";

const Index = () => {
  const backgroundRef = useRef<HTMLInputElement>(null);
  const [isBackgroundColor, setBackgroundColor] = useState<string>("");
  const [isTrigger, setTrigger] = useState<boolean>(true);

  // //HTML Canvas 요소를 생성하여 페이지에 추가
  // const jsConfetti = new JSConfetti();

  // //색종이 커스터마이징
  // const handleClick = () => {
  //   jsConfetti.addConfetti({
  //     confettiColors: [
  //       "#ff0a54",
  //       "#ff477e",
  //       "#ff7096",
  //       "#ff85a1",
  //       "#fbb1bd",
  //       "#f9bec7",
  //     ],
  //     confettiRadius: 5,
  //     confettiNumber: 500,
  //   });
  // };

  // return <button onClick={handleClick}>CLICK</button>;

  // ## option
  // emojis: ["ㅅ", "ㅇ", "💵", "💖"],
  // emojiSize: 256,
  // confettiNumber: 30,
  // confettiRadius: 6,
  // useEffect(() => {
  //   const confetti: any = new JSConfetti();
  //   confetti.addConfetti({
  //     particleCount: 100,
  //     spread: 170,
  //     origin: { y: 0.6 },
  //     confettiColors: ["#ff0000", "#fff000"],
  //   });
  // }, []);
  return (
    <>
      <input
        type="text"
        placeholder="배경색을 선택해 주세요."
        ref={backgroundRef}
      />
      <input type="text" placeholder="test" />
      <button type="button" onClick={() => setTrigger(!isTrigger)}>
        GO
      </button>
      <SetConfetti
        bgColor={!!backgroundRef.current ? backgroundRef.current.value : `#fff`}
        colors={["#fff000", "#ff0000", "#000"]}
        trigger={isTrigger}
      />
    </>
  );
};

export default Index;
