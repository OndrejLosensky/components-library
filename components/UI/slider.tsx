"use client"; // Mark this as a client component

import React from 'react';
import clsx from 'clsx';

interface SliderProps {
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'green' | 'red' | 'purple';
  showValue?: boolean;
  className?: string;
}

const trackSizeClasses = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-3'
};

const colorClasses = {
  blue: 'bg-blue-600',
  green: 'bg-green-600',
  red: 'bg-red-600',
  purple: 'bg-purple-600'
};

const Slider: React.FC<SliderProps> = ({
  min,
  max,
  step = 1,
  value,
  onChange,
  disabled = false,
  size = 'md',
  color = 'blue',
  showValue = true,
  className = '',
}) => {
  const [sliderValue, setSliderValue] = React.useState(value);

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
        className={clsx(
          'w-full',
          trackSizeClasses[size],
          colorClasses[color]
        )}
        disabled={disabled}
      />
      {showValue && <span className="mt-2 text-gray-700">{sliderValue}</span>}
    </div>
  );
};

export default Slider;
