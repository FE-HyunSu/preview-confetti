import React, { useState, useEffect } from 'react';
import OptionBox from '@views/SetConfetti/OptionBox';
import styled from '@emotion/styled';
import GuideBox from './GuideBox';

const SetConfettiBody = () => {
  const [color, setColor] = useState<string>('#ffffff');
  const [imageItem, setImageItem] = useState<string>('');
  useEffect(() => {
    console.log(imageItem);
  }, []);
  return (
    <>
      <ContentsBody style={{ backgroundColor: color, backgroundImage: `url(` + imageItem + `)` }}>
        <OptionBox color={color} setColor={setColor} setImageItem={setImageItem} />
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
`;
