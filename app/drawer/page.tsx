"use client";

import React, { useState } from 'react';
import ContentHeader from "@/components/contentHeader";
import Drawer from "@/components/UI/drawer";
import Button from "@/components/UI/Button";

export default function DrawerPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<'left' | 'right' | 'top' | 'bottom'>('right');
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');

  return (
    <div className="prose prose-gray max-w-none">
      <ContentHeader>Drawer</ContentHeader>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <p className="text-gray-600 mb-4">
          Drawers slide in from the edge of the screen and contain supplementary content.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
          <Drawer 
            isOpen={isOpen} 
            onClose={() => setIsOpen(false)}
            title="Basic Drawer"
          >
            <p>This is a basic drawer with default settings.</p>
            <p className="mt-4">It includes a header with title and close button.</p>
          </Drawer>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Positions</h2>
        <p className="text-gray-600 mb-4">
          Drawers can slide in from any edge of the screen.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 space-x-4">
          {(['left', 'right', 'top', 'bottom'] as const).map((pos) => (
            <Button
              key={pos}
              onClick={() => {
                setPosition(pos);
                setIsOpen(true);
              }}
            >
              {pos.charAt(0).toUpperCase() + pos.slice(1)} Drawer
            </Button>
          ))}
          <Drawer 
            isOpen={isOpen} 
            onClose={() => setIsOpen(false)}
            position={position}
            title={`${position.charAt(0).toUpperCase() + position.slice(1)} Drawer`}
          >
            <p>This drawer slides in from the {position}.</p>
          </Drawer>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
        <p className="text-gray-600 mb-4">
          Drawers come in different sizes to accommodate various content needs.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 space-x-4">
          {(['sm', 'md', 'lg'] as const).map((sz) => (
            <Button
              key={sz}
              onClick={() => {
                setSize(sz);
                setIsOpen(true);
              }}
            >
              {sz.toUpperCase()} Size
            </Button>
          ))}
          <Drawer 
            isOpen={isOpen} 
            onClose={() => setIsOpen(false)}
            size={size}
            title={`${size.charAt(0).toUpperCase() + size.slice(1)} Size Drawer`}
          >
            <p>This drawer is {size} in size.</p>
          </Drawer>
        </div>
      </section>
    </div>
  );
}
