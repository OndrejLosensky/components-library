"use client"; // Mark this as a client component

import React from 'react';
import ContentHeader from "@/components/contentHeader"; // Adjust the import path
import Tooltip from "@/components/UI/tooltip"; // Adjust the import path

export default function TooltipPage() {
  return (
    <div className="p-4 w-full">
      <ContentHeader>Tooltip</ContentHeader>
      <div className="mt-4 flex gap-x-4">
        <Tooltip text="This is a tooltip!" position="top">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Hover me (Top)
          </button>
        </Tooltip>
        <Tooltip text="This is a tooltip!" position="right">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Hover me (Right)
          </button>
        </Tooltip>
        <Tooltip text="This is a tooltip!" position="bottom">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Hover me (Bottom)
          </button>
        </Tooltip>
        <Tooltip text="This is a tooltip!" position="left">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Hover me (Left)
          </button>
        </Tooltip>
      </div>
    </div>
  );
}
