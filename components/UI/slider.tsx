"use client"; // Mark this as a client component

import React, { useState } from 'react';
import clsx from 'clsx';

interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (value: number) => void;
  className?: string;
}

const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  value = 0,
  onChange,
  className = '',
}) => {
  const [sliderValue, setSliderValue] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setSliderValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className={clsx('flex flex-col', className)}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={sliderValue}
        onChange={handleChange}
        className="w-full accent-blue-500"
      />
      <span className="mt-2 text-gray-700">{sliderValue}</span>
    </div>
  );
};

export default Slider;
