"use client"; // Mark this as a client component

import ContentHeader from "@/components/contentHeader"; // Adjust the import path
import { Dropdown, DropdownOption } from "@/components/UI/dropdown"; 

export default function DropdownPage() {
  const handleOptionClick = (value: string) => {
    alert(`You selected: ${value}`);
  };

  return (
    <div className="p-4 w-full">
      <ContentHeader>Dropdown</ContentHeader>
      <div className="flex w-full mt-4 flex-col gap-y-2">
        <Dropdown>
          <DropdownOption value="Option 1" onClick={() => handleOptionClick('Option 1')} />
          <DropdownOption value="Option 2" onClick={() => handleOptionClick('Option 2')} />
          <DropdownOption value="Option 3" onClick={() => handleOptionClick('Option 3')} />
        </Dropdown>
      </div>
    </div>
  );
}
