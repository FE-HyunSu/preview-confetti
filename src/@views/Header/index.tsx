import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <HeaderUI>
        <h1>
          <Link href={"/"}>🎉 꽃가루를 날려 🎶</Link>
        </h1>
      </HeaderUI>
    </>
  );
};

export default Header;

export const HeaderUI = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  padding: 0 1.4rem;
  background-color: #fff;
  border: 0.1rem solid #eee;
  box-sizing: border-box;
  z-index: 10;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.4rem;
    color: #1a1a1a;
    img {
      display: inline-block;
      width: 2rem;
      height: 2rem;
      margin-right: 0.5rem;
    }
    span {
      font-weight: 300;
      color: #aaa;
    }
  }
  & + main {
    min-height: calc(100vh - 10rem);
    padding-top: 5rem;
    @supports (-webkit-appearance: none) and (stroke-color: transparent) {
      min-height: calc(100vh - 10rem);
    }
  }
`;
