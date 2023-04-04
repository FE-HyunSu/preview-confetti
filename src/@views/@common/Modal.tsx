import React from "react";
import ReactDOM from "react-dom";
import { PropsWithChildren } from "react";
import styled from "@emotion/styled";
import { MotionIntro } from "@styles/keyframe";

interface ModalProps {
  onClose: () => void;
}

const ModalBgDimed = (props: ModalProps) => {
  return <ModalBackground onClick={props.onClose} />;
};

const ModalContents = ({ children }: PropsWithChildren) => {
  return <ModalInner>{children}</ModalInner>;
};

const Modal = (props: PropsWithChildren<ModalProps>) => {
  const modalElement = document.getElementById("_modal");
  if (modalElement === null) {
    return <div></div>;
  } else {
    return (
      <>
        {ReactDOM.createPortal(
          <ModalTemplate>
            <ModalContents>{props.children}</ModalContents>
            <ModalBgDimed onClose={props.onClose}></ModalBgDimed>
          </ModalTemplate>,
          modalElement
        )}
      </>
    );
  }
};

export default Modal;

export const ModalTemplate = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
`;

export const ModalBackground = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: -1;
`;

export const ModalInner = styled.div`
  position: relative;
  width: 92%;
  max-width: 80rem;
  height: auto;
  max-height: 80%;
  background-color: #fff;
  border-radius: 1rem;
  transform: scale(0.1, 0.1);
  overflow: hidden;
  animation: ${MotionIntro} 0.5s forwards;
`;
