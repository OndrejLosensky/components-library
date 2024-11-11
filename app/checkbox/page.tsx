"use client";

import ContentHeader from "@/components/contentHeader";
import Checkbox from "@/components/UI/checkbox";
import { useState } from 'react';

export default function CheckboxPage() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(true);

  return (
    <div className="prose prose-gray max-w-none">
      <ContentHeader>Checkbox</ContentHeader>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <p className="text-gray-600 mb-4">
          Checkboxes allow users to select one or multiple options from a set.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <div className="flex flex-col gap-4">
            <Checkbox 
              label="Accept terms and conditions" 
              checked={isChecked1}
              onChange={(checked) => setIsChecked1(checked)}
            />
            <Checkbox 
              label="Subscribe to newsletter" 
              checked={isChecked2}
              onChange={(checked) => setIsChecked2(checked)}
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">States</h2>
        <p className="text-gray-600 mb-4">
          Checkboxes can be in different states to indicate their current status.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <div className="flex flex-col gap-4">
            <Checkbox 
              label="Default checkbox" 
            />
            <Checkbox 
              label="Checked checkbox" 
              checked={true}
            />
            <Checkbox 
              label="Disabled checkbox" 
            />
            <Checkbox 
              label="Disabled checked checkbox" 
              checked={true}
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Custom Styling</h2>
        <p className="text-gray-600 mb-4">
          Checkboxes can be customized with different styles and colors.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <div className="flex flex-col gap-4">
            <Checkbox 
              label="Custom styled checkbox" 
              className="text-blue-600"
            />
            <Checkbox 
              label="Another custom style" 
              className="text-green-600"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
