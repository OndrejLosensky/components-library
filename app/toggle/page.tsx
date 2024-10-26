"use client"; // Mark this as a client component

import React, { useState } from 'react';
import ContentHeader from "@/components/contentHeader"; // Adjust the import path
import Toggle from "@/components/UI/toggle"; // Adjust the import path

export default function TogglePage() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <div className="p-4 w-full">
      <ContentHeader>Toggle</ContentHeader>
      <div className="mt-4 flex items-center gap-x-4">
        <Toggle isChecked={isChecked} onChange={handleToggleChange} />
        <span>{isChecked ? 'On' : 'Off'}</span>
      </div>
    </div>
  );
}
