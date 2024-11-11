"use client";

import React from 'react';
import ContentHeader from "@/components/contentHeader";
import Tooltip from "@/components/UI/tooltip";
import { IoInformationCircle } from "react-icons/io5";

export default function TooltipPage() {
  return (
    <div className="prose prose-gray max-w-none">
      <ContentHeader>Tooltip</ContentHeader>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <p className="text-gray-600 mb-4">
          Tooltips provide additional information when hovering over an element.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <div className="flex gap-4">
            <Tooltip text="This is a tooltip!">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                Hover me
              </button>
            </Tooltip>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Positions</h2>
        <p className="text-gray-600 mb-4">
          Tooltips can be positioned in four different directions.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <div className="flex gap-4">
            {(['top', 'right', 'bottom', 'left'] as const).map((position) => (
              <Tooltip 
                key={position}
                text={`${position} tooltip`}
                position={position}
              >
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                  {position}
                </button>
              </Tooltip>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Variants</h2>
        <p className="text-gray-600 mb-4">
          Different styles to match your design needs.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <div className="flex gap-4">
            {(['dark', 'light', 'info'] as const).map((variant) => (
              <Tooltip 
                key={variant}
                text={`${variant} variant`}
                variant={variant}
              >
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                  {variant}
                </button>
              </Tooltip>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Delay</h2>
        <p className="text-gray-600 mb-4">
          Add a delay before showing the tooltip.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <div className="flex gap-4">
            <Tooltip 
              text="Instant tooltip"
              delay={0}
            >
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                No delay
              </button>
            </Tooltip>
            
            <Tooltip 
              text="Delayed tooltip"
              delay={500}
            >
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                500ms delay
              </button>
            </Tooltip>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">With Icons</h2>
        <p className="text-gray-600 mb-4">
          Tooltips work great with icon buttons.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <div className="flex gap-4 items-center">
            <Tooltip text="More information">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <IoInformationCircle className="w-5 h-5 text-blue-500" />
              </button>
            </Tooltip>
          </div>
        </div>
      </section>
    </div>
  );
}
