import React from 'react';
import styled from '@emotion/styled';

interface colorsT {
  colors: string[];
}

const CopyText = ({ colors }: colorsT) => {
  const colorCodes = JSON.stringify(colors);
  const codes = [
    `confetti({`,
    `  particleCount: 100,`,
    `  spread: 170,`,
    `  origin: {`,
    `    y: 0.6,`,
    `  },`,
    `  colors: ` + colorCodes + `,`,
    `  ticks: 60,`,
    `  startVelocity: 30,`,
    `});`,
  ];
  return (
    <>
      <CodeCopyBox>
        <h1>개발팀에 전달 코드</h1>
        <pre>
          {codes.map((item, idx) => (
            <p key={idx}>{item}</p>
          ))}
        </pre>
      </CodeCopyBox>
    </>
  );
};

export default CopyText;

const CodeCopyBox = styled.div`
  padding: 1rem 0;
  h1 {
    font-weight: 200;
    font-size: 1.4rem;
  }
  pre {
    margin-top: 1rem;
    padding: 1.4rem;
    font-weight: 300;
    font-size: 1.2rem;
    background-color: #ccc;
    border-radius: 0.4rem;
    white-space: pre-wrap;
    p {
      color: #111;
    }
  }
`;
