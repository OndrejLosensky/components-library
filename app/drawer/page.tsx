"use client"; // Mark this as a client component

import React, { useState } from 'react';
import ContentHeader from "@/components/contentHeader"; // Adjust the import path
import Drawer from "@/components/UI/drawer"; // Adjust the import path

export default function DrawerPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="p-4 w-full">
      <ContentHeader>Drawer</ContentHeader>
      <button 
        onClick={toggleDrawer} 
        className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4"
      >
        Toggle Drawer
      </button>
      <Drawer isOpen={isDrawerOpen} onClose={closeDrawer}>
        <h2 className="text-lg font-bold">Drawer Content</h2>
        <p>This is a complex drawer component.</p>
        <p>You can put any content here!</p>
      </Drawer>
    </div>
  );
}
