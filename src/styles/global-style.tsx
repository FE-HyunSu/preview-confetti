import { css, Global, SerializedStyles } from '@emotion/react';
import emotionReset from 'emotion-reset';

const globalStyleSheet = (): SerializedStyles => css`
  ${emotionReset}
  html {
    -webkit-text-size-adjust: none;
    font-family: -apple-system, BlinkMacSystemFont, helvetica, Apple SD Gothic Neo, sans-serif;
    font-display: fallback;
    font-size: 10px;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  button {
    background: none;
    padding: 0;
    border: none;
    cursor: pointer;
    &:disabled {
      cursor: default;
      fill: #f2f3f4;
    }
  }
  :focus {
    outline: none;
    border: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

const GlobalStyle = () => {
  return <Global styles={globalStyleSheet()} />;
};

export default GlobalStyle;
