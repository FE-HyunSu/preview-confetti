import React, { useCallback, useEffect, useRef } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

const canvasStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  zIndex: 99,
};

const getAnimationSettings = (colors) => {
  return {
    particleCount: 100,
    spread: 170,
    origin: {
      y: 0.6,
    },
    colors: colors,
    ticks: 60,
    startVelocity: 30,
  };
};

const CustomConfetti = ({ colors, toggleItem }) => {
  const refAnimationInstance = useRef(null);
  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings(colors));
    }
  }, []);

  useEffect(() => {
    nextTickAnimation(colors);
  }, [toggleItem]);

  return (
    <>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </>
  );
};

export default CustomConfetti;
