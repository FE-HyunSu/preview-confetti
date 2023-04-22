import React, { useState, useEffect } from 'react';
import OptionBox from '@views/SetConfetti/OptionBox';
import styled from '@emotion/styled';
import GuideBox from './GuideBox';

const SetConfettiBody = () => {
  const [color, setColor] = useState<string>('#ffffff');
  const [imageItem, setImageItem] = useState<string>('');
  const [isBgFull, setBgFull] = useState<boolean>(false);
  useEffect(() => {
    console.log(imageItem);
  }, []);
  return (
    <>
      <ContentsBody
        style={{
          backgroundColor: color,
          backgroundImage: `url(` + imageItem + `)`,
          backgroundSize: isBgFull ? `100% auto` : ``,
        }}>
        <OptionBox
          color={color}
          setColor={setColor}
          setImageItem={setImageItem}
          setBgFull={setBgFull}
          isBgFull={isBgFull}
        />
        <GuideBox />
      </ContentsBody>
    </>
  );
};

export default SetConfettiBody;

const ContentsBody = styled.section`
  display: block;
  width: 100vw;
  height: 100vh;
  transition: 0.3s;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;
