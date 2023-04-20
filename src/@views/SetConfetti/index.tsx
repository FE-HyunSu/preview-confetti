import React, { useState } from 'react';
import OptionBox from '@views/SetConfetti/OptionBox';
import styled from '@emotion/styled';
import GuideBox from './GuideBox';

const SetConfettiBody = () => {
  const [color, setColor] = useState<string>('#ffffff');
  return (
    <>
      <ContentsBody style={{ backgroundColor: color }}>
        <OptionBox color={color} setColor={setColor} />
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
