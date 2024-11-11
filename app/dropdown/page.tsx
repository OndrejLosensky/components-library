"use client";

import React from 'react';
import ContentHeader from "@/components/contentHeader";
import { Dropdown, DropdownItem } from "@/components/UI/dropdown";
import { IoSettings, IoTrash, IoNotifications, IoHeart } from "react-icons/io5";

export default function DropdownPage() {
  return (
    <div className="prose prose-gray max-w-none">
      <ContentHeader>Dropdown</ContentHeader>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <p className="text-gray-600 mb-4">
          Dropdowns display a list of options when triggered.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <Dropdown>
            <DropdownItem onClick={() => alert('Profile clicked')}>Profile</DropdownItem>
            <DropdownItem onClick={() => alert('Settings clicked')}>Settings</DropdownItem>
            <DropdownItem onClick={() => alert('Logout clicked')}>Logout</DropdownItem>
          </Dropdown>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Variants</h2>
        <p className="text-gray-600 mb-4">
          Different styles to match your design needs.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 space-x-4">
          <Dropdown variant="default">
            <DropdownItem>Default</DropdownItem>
            <DropdownItem>Option 2</DropdownItem>
          </Dropdown>

          <Dropdown variant="outline">
            <DropdownItem>Outline</DropdownItem>
            <DropdownItem>Option 2</DropdownItem>
          </Dropdown>

          <Dropdown variant="ghost">
            <DropdownItem>Ghost</DropdownItem>
            <DropdownItem>Option 2</DropdownItem>
          </Dropdown>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">With Icons</h2>
        <p className="text-gray-600 mb-4">
          Dropdown items can include icons for better visual hierarchy.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <Dropdown>
            <DropdownItem icon={<IoSettings />}>Settings</DropdownItem>
            <DropdownItem icon={<IoNotifications />}>Notifications</DropdownItem>
            <DropdownItem icon={<IoHeart />}>Favorites</DropdownItem>
            <DropdownItem icon={<IoTrash />} destructive>Delete</DropdownItem>
          </Dropdown>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
        <p className="text-gray-600 mb-4">
          Dropdowns come in different sizes.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 space-x-4">
          <Dropdown size="sm">
            <DropdownItem>Small</DropdownItem>
            <DropdownItem>Option</DropdownItem>
          </Dropdown>

          <Dropdown size="md">
            <DropdownItem>Medium</DropdownItem>
            <DropdownItem>Option</DropdownItem>
          </Dropdown>

          <Dropdown size="lg">
            <DropdownItem>Large</DropdownItem>
            <DropdownItem>Option</DropdownItem>
          </Dropdown>
        </div>
      </section>
    </div>
  );
}
