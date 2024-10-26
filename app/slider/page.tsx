"use client"; // Mark this as a client component

import React, { useState } from 'react';
import ContentHeader from "@/components/contentHeader"; // Adjust the import path
import Slider from "@/components/UI/slider"; // Adjust the import path

export default function SliderPage() {
  const [sliderValue, setSliderValue] = useState(50); // Default slider value

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
  };

  return (
    <div className="p-4 w-full">
      <ContentHeader>Slider</ContentHeader>
      <div className="mt-4">
        <Slider
          min={0}
          max={100}
          step={1}
          value={sliderValue}
          onChange={handleSliderChange}
        />
        <p className="mt-2 text-gray-700">Selected Value: {sliderValue}</p>
      </div>
    </div>
  );
}
