"use client";

import React, { useState } from 'react';
import ContentHeader from "@/components/contentHeader";
import Slider from "@/components/UI/slider";

export default function SliderPage() {
  const [value1, setValue1] = useState(50);
  const [value2, setValue2] = useState(25);
  const [value3, setValue3] = useState(75);

  return (
    <div className="prose prose-gray max-w-none">
      <ContentHeader>Slider</ContentHeader>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <p className="text-gray-600 mb-4">
          Sliders allow users to select a value from a range.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <div className="max-w-md space-y-6">
            <Slider
              min={0}
              max={100}
              value={value1}
              onChange={setValue1}
              showValue
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
        <p className="text-gray-600 mb-4">
          Sliders come in different sizes to suit your needs.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <div className="max-w-md space-y-6">
            <Slider
              size="sm"
              min={0}
              max={100}
              value={value2}
              onChange={setValue2}
              showValue
            />
            <Slider
              size="md"
              min={0}
              max={100}
              value={value2}
              onChange={setValue2}
              showValue
            />
            <Slider
              size="lg"
              min={0}
              max={100}
              value={value2}
              onChange={setValue2}
              showValue
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Colors</h2>
        <p className="text-gray-600 mb-4">
          Customize the slider with different colors.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <div className="max-w-md space-y-6">
            <Slider color="blue" value={value3} onChange={setValue3} min={0} max={100} />
            <Slider color="green" value={value3} onChange={setValue3} min={0} max={100} />
            <Slider color="red" value={value3} onChange={setValue3} min={0} max={100} />
            <Slider color="purple" value={value3} onChange={setValue3} min={0} max={100} />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">States</h2>
        <p className="text-gray-600 mb-4">
          Sliders can be disabled when needed.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <div className="max-w-md space-y-6">
            <Slider
              disabled
              value={30}
              onChange={() => {}}
              min={0}
              max={100}
              showValue
            />
          </div>
        </div>
      </section>
    </div>
  );
}
