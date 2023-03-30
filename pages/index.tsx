import React, { useEffect } from "react";
import Confetti from "react-confetti";
import JSConfetti from "js-confetti";

const Index = () => {
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
  useEffect(() => {
    const confetti = new JSConfetti();
    confetti.addConfetti({
      emojis: ["ㅅ", "ㅇ", "💵", "💖"],
      emojiSize: 256,
      confettiNumber: 30,
      confettiRadius: 6,
    });
  }, []);
  return <div>{/* <Confetti width={500} /> */}</div>;
};

export default Index;
