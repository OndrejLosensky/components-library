"use client"; // Mark this as a client component

import ContentHeader from "@/components/contentHeader"; // Adjust the import path
import Checkbox from "@/components/UI/checkbox"; // Adjust the import path
import { useState } from 'react';

export default function CheckboxPage() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
    alert(`Checkbox is now ${checked ? 'checked' : 'unchecked'}`);
  };

  return (
    <div className="p-4 w-full">
      <ContentHeader>Checkbox</ContentHeader>
      <div className="flex w-full mt-4 flex-col gap-y-2">
        <Checkbox label="Accept Terms and Conditions" checked={isChecked} onChange={handleCheckboxChange} />
        <Checkbox label="Subscribe to Newsletter" onChange={handleCheckboxChange} />
      </div>
    </div>
  );
}
