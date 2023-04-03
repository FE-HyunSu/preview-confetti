import React, { useState, useCallback } from "react";
import { ChromePicker } from "react-color";

const ColorCode = () => {
  const [color, setColor] = useState<string>("");
  const handleColorChange = useCallback(
    // 온체인지 이벤트를 담당할 함수다.
    (color: string) => {
      // 바뀌는 컬러값을 매개변수로 받아서
      setColor(color); // setColor 안에 넣어줘서 color 를 변경해줄거다.
    },
    [color]
  ); // 단 컬러 데이터가 바뀔때마다 이 함수는 갱신된다.
  return <></>;
};

export default ColorCode;

// import React, { useState, useRef, useEffect, useCallback } from "react";
// import SetConfetti from "@views/SetConfetti";
// import styled from "styled-components";
// import { ChromePicker } from "react-color";

// const Index = () => {
//   const backgroundRef = useRef<HTMLInputElement>(null);
//   const [isTrigger, setTrigger] = useState<boolean>(true);
//   const [isWindow, setWindow] = useState<boolean>(true);
//   const [color, setColor] = useState<string>("");
//   const handleColorChange = useCallback(
//     // 온체인지 이벤트를 담당할 함수다.
//     (color: string) => {
//       // 바뀌는 컬러값을 매개변수로 받아서
//       setColor(color); // setColor 안에 넣어줘서 color 를 변경해줄거다.
//     },
//     [color]
//   ); // 단 컬러 데이터가 바뀔때마다 이 함수는 갱신된다.
//   // useEffect(() => {
//   //   if (!label.color) {
//   //     // 받아온 레이블 컬러가 없으면
//   //     setColor(""); // 걍 빈칸
//   //   }
//   //   setColor(label.color); // 데이터가 있으면 컬러로 세팅
//   // }, [label]);
//   return (
//     <>
//       <OptionBox className={isWindow ? `active` : ``}>
//         <BtnScale
//           type="button"
//           className={isWindow ? `active` : ``}
//           onClick={() => setWindow(!isWindow)}
//         >
//           최소화
//         </BtnScale>
//         <input
//           type="text"
//           placeholder="배경색을 선택해 주세요."
//           ref={backgroundRef}
//         />
//         <input type="text" placeholder="test" />
//         <input
//           value={color}
//           onChange={(e) => handleColorChange(e.target.value)}
//         />

//         <ChromePicker
//           color={color}
//           onChange={(color) => handleColorChange(color.hex)}
//         />
//         <BtnBase type="button" onClick={() => setTrigger(!isTrigger)}>
//           효과 만들기
//         </BtnBase>
//       </OptionBox>
//       <SetConfetti
//         bgColor={!!backgroundRef.current ? backgroundRef.current.value : `#fff`}
//         colors={["#fff000", "#ff0000", "#000"]}
//         trigger={isTrigger}
//       />
//       {/* <SketchPicker /> */}
//     </>
//   );
// };

// export default Index;

// const OptionBox = styled.div`
//   position: fixed;
//   top: 10rem;
//   right: 4rem;
//   width: 5rem;
//   height: 5rem;
//   margin: auto;
//   padding: 1rem;
//   background-color: rgba(255, 255, 255, 0.7);
//   border: 0.1rem solid #ccc;
//   border-radius: 1rem;
//   box-sizing: border-box;
//   transition: 0.3s;
//   overflow: hidden;
//   input {
//     width: 100%;
//     margin-bottom: 0.5rem;
//     padding: 1rem;
//     box-sizing: border-box;
//     background-color: #fff;
//     border-radius: 0.4rem;
//     border: 0.1rem solid #eee;
//     outline: 0;
//   }
//   input {
//     opacity: 0;
//     z-index: -1;
//   }
//   &.active {
//     top: calc(50% - 15rem);
//     right: calc(50% - 15rem);
//     width: 30rem;
//     height: 30rem;
//     padding: 4rem 2rem 2rem 2rem;
//     input {
//       opacity: 1;
//       z-index: 1;
//     }
//   }
// `;

// const BtnScale = styled.button`
//   position: absolute;
//   top: -0.3rem;
//   right: 0.1rem;
//   bottom: 0;
//   left: 0;
//   width: 5rem;
//   height: 5rem;
//   text-indent: -9999rem;
//   z-index: 2;
//   &:before {
//     content: "";
//     position: absolute;
//     top: 0.1rem;
//     right: 0.2rem;
//     bottom: 0;
//     left: 0;
//     width: 0.6rem;
//     height: 0.6rem;
//     margin: auto;
//     border-right: 0.1rem solid #333;
//     border-bottom: 0.1rem solid #333;
//     transform: rotate(45deg);
//     transition: 0.3s;
//   }
//   &.active {
//     bottom: auto;
//     left: auto;
//     &:before {
//       transform: rotate(-135deg);
//     }
//   }
// `;

// const BtnBase = styled.button`
//   width: 100%;
//   height: 4rem;
//   margin-top: 2rem;
//   font-size: 1.4rem;
//   color: #fff;
//   background-color: #333;
//   border-radius: 0.4rem;
//   transition: 0.4s;
//   z-index: 2;
//   &:hover {
//     background-color: #111;
//   }
// `;
