import React from 'react';
import styled from '@emotion/styled';

const Footer = () => {
  return (
    <>
      <FooterUI>
        <p>KHS. ALL RIGHT RESERVED.</p>
      </FooterUI>
    </>
  );
};
export default Footer;

export const FooterUI = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  border-top: 0.1rem solid rgba(0, 0, 0, 0.05);
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.05);
  transition: 0.3s;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0;
    padding: 0;
    font-weight: 300;
    font-size: 1.4rem;
    color: rgba(0, 0, 0, 0.2);
    text-align: center;
    a {
      display: inline-block;
      width: 4rem;
      opacity: 0.5;
      transition: 0.3s;
      svg {
        width: 80%;
      }
      &:hover {
        opacity: 1;
      }
    }
  }
`;
