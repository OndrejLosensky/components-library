"use client";

import React, { useState } from 'react';
import ContentHeader from "@/components/contentHeader";
import Toggle from "@/components/UI/toggle";

export default function TogglePage() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(true);
  const [isChecked3, setIsChecked3] = useState(false);

  return (
    <div className="prose prose-gray max-w-none">
      <ContentHeader>Toggle</ContentHeader>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <p className="text-gray-600 mb-4">
          Toggle switches allow users to turn an option on or off.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <div className="flex flex-col gap-4">
            <Toggle 
              isChecked={isChecked1}
              onChange={setIsChecked1}
              label="Notifications"
            />
            <Toggle 
              isChecked={isChecked2}
              onChange={setIsChecked2}
              label="Dark Mode"
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
        <p className="text-gray-600 mb-4">
          Toggles come in three different sizes to suit your needs.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <div className="flex flex-col gap-4">
            <Toggle 
              size="sm"
              isChecked={isChecked3}
              onChange={setIsChecked3}
              label="Small toggle"
            />
            <Toggle 
              size="md"
              isChecked={isChecked3}
              onChange={setIsChecked3}
              label="Medium toggle"
            />
            <Toggle 
              size="lg"
              isChecked={isChecked3}
              onChange={setIsChecked3}
              label="Large toggle"
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Colors</h2>
        <p className="text-gray-600 mb-4">
          Customize the toggle with different colors.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <div className="flex flex-col gap-4">
            <Toggle 
              isChecked={true}
              onChange={() => {}}
              color="blue"
              label="Blue (default)"
            />
            <Toggle 
              isChecked={true}
              onChange={() => {}}
              color="green"
              label="Green"
            />
            <Toggle 
              isChecked={true}
              onChange={() => {}}
              color="red"
              label="Red"
            />
            <Toggle 
              isChecked={true}
              onChange={() => {}}
              color="purple"
              label="Purple"
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">States</h2>
        <p className="text-gray-600 mb-4">
          Toggle switches can be disabled when needed.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <div className="flex flex-col gap-4">
            <Toggle 
              isChecked={false}
              onChange={() => {}}
              disabled
              label="Disabled off"
            />
            <Toggle 
              isChecked={true}
              onChange={() => {}}
              disabled
              label="Disabled on"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
