import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

interface colorCodeT {
  colorCode: string;
  handleColorChange: (item: string) => void;
}

const Colorful = ({ colorCode, handleColorChange }: colorCodeT) => {
  return <HexColorPicker color={colorCode} onChange={(changeColor) => handleColorChange(changeColor)} />;
};

export default Colorful;
